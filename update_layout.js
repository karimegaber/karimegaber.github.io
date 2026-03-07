const fs = require('fs');

const path = 'app/layout.tsx';
let layout = fs.readFileSync(path, 'utf8');

// Add imports
layout = layout.replace(
  'import { ThemeProvider } from "@/components/theme-provider";',
  'import { ThemeProvider } from "@/components/theme-provider";\nimport { ChatProvider } from "@/components/chat-context";\nimport { ChatInterface } from "@/components/chat-interface";'
);

// Wrap children
layout = layout.replace(
  '<ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>',
  '<ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>\n          <ChatProvider>'
);

layout = layout.replace(
  '{children}\n        </ThemeProvider>',
  '{children}\n            <ChatInterface />\n          </ChatProvider>\n        </ThemeProvider>'
);

fs.writeFileSync(path, layout);
