import re

filepath = 'app/layout.tsx'

with open(filepath, 'r') as f:
    content = f.read()

# Make sure we import ThemeProvider
if 'ThemeProvider' not in content:
    content = content.replace('import { RouteHandler } from "@/components/route-handler";',
        'import { RouteHandler } from "@/components/route-handler";\nimport { ThemeProvider } from "@/components/theme-provider";')

# Wrap RouteHandler and children with ThemeProvider
body_pattern = r'(<body className="[^"]*">)\s*<Suspense fallback=\{null\}>\s*<RouteHandler />\s*</Suspense>\s*\{children\}\s*</body>'

replacement = r'''\1
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Suspense fallback={null}>
            <RouteHandler />
          </Suspense>
          {children}
        </ThemeProvider>
      </body>'''

content = re.sub(body_pattern, replacement, content)

with open(filepath, 'w') as f:
    f.write(content)
print("Updated app/layout.tsx")
