"""Optimize the four user-selected Instagram downloads; originals are unchanged."""
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
DOWNLOADS = Path.home() / 'Downloads'
FILES = [
    '565562132_17946385050059568_4006273518297476340_n.jpg',
    '524641509_17937691719059568_4036423522693754922_n.jpg',
    '810777955_17988149343059568_163129688820416545_n.jpg',
    '720552969_17974258125059568_5757446455041295917_n.jpg',
]
contact = Image.new('RGB', (1200, 400), '#f3f1e9')
for index, filename in enumerate(FILES, 1):
    im = ImageOps.exif_transpose(Image.open(DOWNLOADS / filename)).convert('RGB')
    contact.paste(ImageOps.fit(im, (300, 400)), ((index-1)*300, 0))
    for width in (400, 800):
        variant = im.copy()
        variant.thumbnail((width, width*2))
        variant.save(ROOT / 'public/images' / f'instagram-{index}-{width}.webp', quality=80, method=6)
contact.save(ROOT / 'work/instagram-contact.jpg')
im = Image.open(ROOT / 'work/reel-poster.jpg').convert('RGB')
im.thumbnail((540, 960))
im.save(ROOT / 'public/images/sunday-reel-poster.webp', quality=82, method=6)
