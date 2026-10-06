from pathlib import Path
from concurrent.futures import ThreadPoolExecutor
from PIL import Image
import json, re
root=Path(__file__).resolve().parent.parent
images=root/'public/images'
def convert(path):
    with Image.open(path) as im:
        out=path.with_suffix('.avif')
        im.convert('RGB').save(out,'AVIF',quality=48,speed=6)
        return path.stat().st_size,out.stat().st_size
sources=list(images.glob('*.webp'))
with ThreadPoolExecutor(max_workers=4) as pool:
    sizes=list(pool.map(convert,sources))
metadata={}
for path in images.glob('*-1440.webp'):
    name=path.stem.rsplit('-',1)[0]
    with Image.open(path) as im:
        metadata[name]={'width':im.width,'height':im.height}
        for width in (640,720):
            im.resize((width,round(im.height*width/im.width)),Image.Resampling.LANCZOS).convert('RGB').save(images/f'{name}-{width}.avif','AVIF',quality=48,speed=6)
for width in (480,900):
    with Image.open(images/'film-poster.webp') as im:
        im.resize((width,round(im.height*width/im.width)),Image.Resampling.LANCZOS).convert('RGB').save(images/f'film-poster-{width}.avif','AVIF',quality=48,speed=6)
(root/'lib/image-dimensions.json').write_text(json.dumps(metadata,indent=2)+'\n',encoding='utf-8')
print(f'AVIF assets: {sum(a for a,b in sizes):,} -> {sum(b for a,b in sizes):,} bytes ({len(sizes)} originals)')
