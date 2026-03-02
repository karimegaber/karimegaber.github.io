import re

filepath = 'components/navbar.tsx'

with open(filepath, 'r') as f:
    content = f.read()

# Make sure we import ThemeToggle
if 'ThemeToggle' not in content:
    content = content.replace('import { usePathname } from "next/navigation"',
        'import { usePathname } from "next/navigation"\nimport { ThemeToggle } from "@/components/theme-toggle"')

# Add ThemeToggle to desktop view
desktop_pattern = r'(<div className="hidden items-center gap-8 md:flex">\s*\{navLinks\.map\(\(link\) => \(\s*<Link[\s\S]*?</Link>\s*\)\)\s*\}[\s\S]*?)</div>'
desktop_replacement = r'\1\n          <ThemeToggle />\n        </div>'

content = re.sub(desktop_pattern, desktop_replacement, content)

# Add ThemeToggle to mobile view
mobile_pattern = r'(<button\s*onClick=\{\(\) => setMobileOpen\(!mobileOpen\)\}[\s\S]*?</button>)'
mobile_replacement = r'<div className="flex items-center gap-4 md:hidden">\n          <ThemeToggle />\n          \1\n        </div>'

content = re.sub(mobile_pattern, mobile_replacement, content)

with open(filepath, 'w') as f:
    f.write(content)
print("Updated components/navbar.tsx")
