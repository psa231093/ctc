"""Rebuild local web assets. Requires Pillow."""
from pathlib import Path
from PIL import Image, ImageOps
import json

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT.parent / 'Pictures'
TARGET = ROOT / 'public' / 'images'
IMAGES = {
    'chicago-handstands': 'CTC_beach-jams-26_10.jpg',
    'lakefront-handstand': 'CTC_beach-jams-26_52.jpg',
    'club-session': 'CTC_beach-jams-26_37.jpg',
    'club-culture': 'CTC_beach-jams-26_7.jpg',
    'front-lever': 'CTC_beach-jams-26_14.jpg',
    'planche': 'CTC_beach-jams-26_2.jpg',
    'bar-work': 'CTC_beach-jams-26_81.jpg',
    'chicago-strength': 'CTC_beach-jams-26_24.jpg',
    'club-tent': 'CTC_beach-jams-26_48.jpg',
    'handstand-study': 'CTC_beach-jams-26_51.jpg',
}
TARGET.mkdir(parents=True, exist_ok=True)
manifest = []
for name, filename in IMAGES.items():
    original = SOURCE / filename
    image = ImageOps.exif_transpose(Image.open(original)).convert('RGB')
    for width in (480, 900, 1440):
        result = image.copy()
        result.thumbnail((width, round(width * image.height / image.width)))
        path = TARGET / f'{name}-{width}.webp'
        result.save(path, 'WEBP', quality=79, method=6)
        manifest.append(dict(file=path.name, width=result.width, height=result.height, bytes=path.stat().st_size, source=filename))
(ROOT / 'docs' / 'image-manifest.json').write_text(json.dumps(manifest, indent=2))
print(f'{len(manifest)} optimized images; {sum(m["bytes"] for m in manifest):,} bytes total across all sizes.')
