import os
import sys
import glob
from PIL import Image

def process_images(assets_dir):
    labels_dir = os.path.join(assets_dir, 'labels')
    if not os.path.exists(labels_dir):
        os.makedirs(labels_dir)

    # find all jpg and png images (excluding labels dir and already converted webp if any)
    images = []
    for ext in ('*.jpg', '*.jpeg', '*.png'):
        images.extend(glob.glob(os.path.join(assets_dir, ext)))
    
    count = 0
    for img_path in images:
        if 'labels' in img_path:
            continue
            
        filename = os.path.basename(img_path)
        name, ext = os.path.splitext(filename)
        
        try:
            with Image.open(img_path) as img:
                # Convert to RGB to safely save as WebP (removes alpha if not needed, or we can keep it)
                if img.mode in ("RGBA", "P"):
                    img = img.convert("RGB")
                    
                width, height = img.size
                
                # Check if it's a Front image
                is_front = 'front' in name.lower()
                
                if is_front:
                    # Crop top 25% for label reading
                    crop_box = (0, 0, width, int(height * 0.25))
                    label_img = img.crop(crop_box)
                    label_path = os.path.join(labels_dir, f"{name}-label.jpg")
                    label_img.save(label_path, "JPEG", quality=85)
                    print(f"Created label crop: {label_path}")
                
                # Resize for web if it's too large (max width 800px)
                max_width = 800
                if width > max_width:
                    ratio = max_width / float(width)
                    new_height = int((float(height) * float(ratio)))
                    img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
                
                # Save as WebP
                webp_path = os.path.join(assets_dir, f"{name}.webp")
                img.save(webp_path, "WEBP", quality=80)
                print(f"Converted to WebP: {webp_path}")
                count += 1
                
        except Exception as e:
            print(f"Error processing {img_path}: {e}")
            
    print(f"\nDone! Processed {count} images.")

if __name__ == "__main__":
    assets_dir = os.path.join(os.path.dirname(__file__), 'assets')
    process_images(assets_dir)
