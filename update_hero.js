const fs = require('fs');

const path = 'components/hero.tsx';
let hero = fs.readFileSync(path, 'utf8');

if (!hero.includes('import { useChat }')) {
  hero = hero.replace('import { trackEvent } from "@/lib/analytics"', 'import { trackEvent } from "@/lib/analytics"\nimport { useChat } from "@/components/chat-context"');
}

// Update component start
hero = hero.replace('export function Hero() {\n  return (', 'export function Hero() {\n  const { openChat } = useChat()\n\n  return (');

// Update CTA button
const oldCTA = `<a
                href="#projects"
                className="group flex items-center gap-2 rounded-lg bg-blue-500 px-6 py-3 font-mono text-sm font-medium text-slate-900 dark:text-white transition-all hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-500/20"
              >
                View My Top Projects
                <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
              </a>`;

const newCTA = `<button
                onClick={openChat}
                className="group relative flex items-center gap-2 rounded-lg bg-slate-900 px-6 py-3 font-mono text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-blue-500/20 overflow-hidden"
              >
                {/* Animated conic gradient border background */}
                <span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0f172a_0%,#3b82f6_50%,#0f172a_100%)]" />

                {/* Inner button background */}
                <span className="absolute inset-[1px] rounded-lg bg-slate-900 transition-colors group-hover:bg-slate-800" />

                {/* Button content */}
                <span className="relative z-10 flex items-center gap-2">
                  Talk to my AI Twin
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
                  </span>
                </span>
              </button>`;

hero = hero.replace(oldCTA, newCTA);

fs.writeFileSync(path, hero);
