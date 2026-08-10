import os
from PIL import Image

def rotate_image(img_path):
    print(f"Rotating 180 {img_path}...")
    with Image.open(img_path) as img:
        img = img.transpose(Image.Transpose.ROTATE_180)
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
