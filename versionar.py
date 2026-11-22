#!/usr/bin/env python3
"""Pone la versión del commit en TODO lo que el navegador cachea.

El navegador guarda cada archivo por su URL. Si la URL no cambia, no vuelve a
pedirlo aunque el servidor tenga otro distinto: a quien ya abrió la invitación
le siguen llegando el CSS, el JS y las IMÁGENES viejos. Pasó dos veces —una con
el código y otra con el telón de lentejuelas, que en vivo seguía saliendo de
flores—, así que la versión va en todas las rutas, no solo en tres.

Se ejecuta antes de publicar:  python3 versionar.py
"""
import re, subprocess, time

SHA = subprocess.run(['git', 'rev-parse', '--short', 'HEAD'],
                     capture_output=True, text=True).stdout.strip()
V = f'{int(time.time())}-{SHA}'
RUTA = re.compile(r"(assets/[\w./-]+?\.(?:webp|mp4|png|jpg|svg|mp3)|(?:datos|styles|script)\.(?:js|css))(\?v=[\w.-]+)?")

total = 0
for archivo in ('index.html', 'styles.css', 'script.js'):
    s = open(archivo, encoding='utf-8').read()
    s, n = RUTA.subn(lambda m: f'{m.group(1)}?v={V}', s)
    open(archivo, 'w', encoding='utf-8').write(s)
    print(f'{archivo:12s} {n:3d} rutas')
    total += n
print(f'versión {V} · {total} rutas en total')
