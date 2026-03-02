import re
import os

replacements = {
    # Text
    r'\btext-white\b': 'text-slate-900 dark:text-white',
    r'\btext-slate-100\b': 'text-slate-800 dark:text-slate-100',
    r'\btext-slate-200\b': 'text-slate-700 dark:text-slate-200',
    r'\btext-slate-300\b': 'text-slate-600 dark:text-slate-300',
    r'\btext-slate-400\b': 'text-slate-500 dark:text-slate-400',
    r'\btext-slate-500\b': 'text-slate-400 dark:text-slate-500',
    r'\btext-blue-300\b': 'text-blue-600 dark:text-blue-300',
    r'\btext-blue-400\b': 'text-blue-600 dark:text-blue-400',
    r'\btext-blue-100\b': 'text-blue-800 dark:text-blue-100',

    # Backgrounds
    r'\bbg-slate-800\b': 'bg-white dark:bg-slate-800',
    r'\bbg-slate-800/50\b': 'bg-white/50 dark:bg-slate-800/50',
    r'\bbg-slate-800/60\b': 'bg-white/60 dark:bg-slate-800/60',
    r'\bbg-slate-700\b': 'bg-slate-100 dark:bg-slate-700',
    r'\bbg-slate-700/50\b': 'bg-slate-100/50 dark:bg-slate-700/50',
    r'\bbg-slate-700/30\b': 'bg-slate-100/30 dark:bg-slate-700/30',
    r'\bbg-slate-900\b': 'bg-slate-100 dark:bg-slate-900',
    r'\bbg-slate-900/50\b': 'bg-slate-100/50 dark:bg-slate-900/50',
    r'\bbg-slate-900/70\b': 'bg-slate-100/70 dark:bg-slate-900/70',
    r'\bbg-slate-900/80\b': 'bg-slate-100/80 dark:bg-slate-900/80',

    r'\bbg-\[#080c1a\]\b': 'bg-slate-50 dark:bg-[#080c1a]',
    r'\bfrom-\[#080c1a\]\b': 'from-slate-50 dark:from-[#080c1a]',
    r'\bbg-\[#0f1629\]\b': 'bg-white dark:bg-[#0f1629]',

    r'\bbg-white/10\b': 'bg-slate-200/50 dark:bg-white/10',
    r'\bbg-white/5\b': 'bg-slate-200/30 dark:bg-white/5',

    # Borders
    r'\bborder-slate-800\b': 'border-slate-200 dark:border-slate-800',
    r'\bborder-slate-700\b': 'border-slate-300 dark:border-slate-700',
    r'\bborder-white/10\b': 'border-slate-200 dark:border-white/10',

    # Hovers
    r'\bhover:bg-slate-800\b': 'hover:bg-slate-100 dark:hover:bg-slate-800',
    r'\bhover:text-white\b': 'hover:text-slate-900 dark:hover:text-white',
    r'\bhover:border-slate-700\b': 'hover:border-slate-300 dark:hover:border-slate-700',
}

# Add prose variants
replacements[r'\bprose-headings:text-slate-100\b'] = 'prose-headings:text-slate-900 dark:prose-headings:text-slate-100'
replacements[r'\bprose-p:text-slate-300\b'] = 'prose-p:text-slate-700 dark:prose-p:text-slate-300'
replacements[r'\bprose-code:text-blue-300\b'] = 'prose-code:text-blue-600 dark:prose-code:text-blue-300'
replacements[r'\bprose-pre:bg-\[#0f1629\]\b'] = 'prose-pre:bg-slate-100 dark:prose-pre:bg-[#0f1629]'
replacements[r'\bprose-pre:border-white/10\b'] = 'prose-pre:border-slate-200 dark:prose-pre:border-white/10'

def replace_in_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    new_content = content
    for pattern, replacement in replacements.items():
        # Only replace if not already prefixed with dark: (to avoid double replacement if run multiple times)
        # We can use a negative lookbehind if we compile it.
        # But lookbehind requires fixed width. We'll just do a simple replace first.
        # Actually, standard regex with \b works if we are careful.

        # A simpler way is to just do re.sub, but prevent matching 'dark:text-white'
        # (?<!dark:)text-white
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
