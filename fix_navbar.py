with open('components/navbar.tsx', 'r') as f:
    content = f.read()

content = content.replace("text-slate-400 dark:text-slate-500 dark:text-slate-400", "text-slate-500 dark:text-slate-400")

with open('components/navbar.tsx', 'w') as f:
    f.write(content)
