import os
import glob
from PIL import Image

def find_horizontal_images(assets_dir):
    images = glob.glob(os.path.join(assets_dir, '*.webp'))
    for img_path in images:
        with Image.open(img_path) as img:
            width, height = img.size
            if width > height:
                print(f"Horizontal image found: {os.path.basename(img_path)} ({width}x{height})")

if __name__ == "__main__":
    assets_dir = os.path.join(os.path.dirname(__file__), 'assets')
    find_horizontal_images(assets_dir)
