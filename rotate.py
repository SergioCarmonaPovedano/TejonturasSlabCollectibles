import os
from PIL import Image

def rotate_image(img_path):
    print(f"Rotating {img_path}...")
    with Image.open(img_path) as img:
        # Depending on how it was taken, it could be 90 or 270.
        # Most phones rotate 90 deg CCW when horizontal, so we rotate 270 (or 90) to fix.
        # Actually let's try 90 degrees CCW (ROTATE_90).
        img = img.transpose(Image.Transpose.ROTATE_270)
        img.save(img_path)

if __name__ == "__main__":
    assets_dir = os.path.join(os.path.dirname(__file__), 'assets')
    targets = [
        'Glaceon-Front.webp',
        'Glaceon-Back.webp',
        'Suicune-Front.webp',
        'Suicune-Back.webp'
    ]
    for target in targets:
        path = os.path.join(assets_dir, target)
        if os.path.exists(path):
            rotate_image(path)
