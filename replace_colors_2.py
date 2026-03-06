import re
import os

replacements = {
    # Additional background colors missed
    r'\bbg-\[#080c1a\]\b': 'bg-slate-50 dark:bg-[#080c1a]',
    r'\bbg-[#080c1a]\b': 'bg-slate-50 dark:bg-[#080c1a]',

    # Specific gradient
    r'\bfrom-\[#080c1a\]\b': 'from-slate-50 dark:from-[#080c1a]',
    r'\bto-slate-800\b': 'to-slate-100 dark:to-slate-800',
    r'\bfrom-slate-800\b': 'from-slate-100 dark:from-slate-800',

    # Borders
    r'\bborder-slate-800\b': 'border-slate-200 dark:border-slate-800',

    # Global css background
    # ( handled in global.css manually)
}

def replace_in_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    new_content = content
    for pattern, replacement in replacements.items():
        safe_pattern = r'(?<!dark:)' + pattern
        new_content = re.sub(safe_pattern, replacement, new_content)

    if new_content != content:
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

def scan_dir(dirpath):
    for root, dirs, files in os.walk(dirpath):
        for file in files:
            if file.endswith('.tsx') or file.endswith('.ts'):
                replace_in_file(os.path.join(root, file))

scan_dir('app')
scan_dir('components')
