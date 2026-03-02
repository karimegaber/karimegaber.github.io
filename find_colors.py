import re
import os

color_classes = set()

def scan_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # regex for tailwind color classes like text-slate-400, bg-blue-500/10, border-[#123], etc.
    # we'll look for text-, bg-, border-, ring-, shadow-, fill-, stroke-, from-, via-, to-, hover:bg-, etc.
    pattern = re.compile(r'\b(?:hover:|focus:|active:|group-hover:)?(?:text|bg|border|ring|shadow|fill|stroke|from|via|to)-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|white|black|transparent|\[#[a-fA-F0-9]+\])(?:-\d+)?(?:/[0-9]+)?\b')

    matches = pattern.findall(content)
    for match in matches:
        color_classes.add(match)

def scan_dir(dirpath):
    for root, dirs, files in os.walk(dirpath):
        for file in files:
            if file.endswith('.tsx') or file.endswith('.ts'):
                scan_file(os.path.join(root, file))

scan_dir('app')
scan_dir('components')

for c in sorted(color_classes):
    print(c)
