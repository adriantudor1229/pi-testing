## Comparing Claude Code with 4.6 vs Pi with GML-5.1
### For now what is outside of claude-playground, is generated using PI withouth any skills and plugins.
### 1. What I want to test, is the difference in capabilities.

#### 1. Forest dashboard - there was a big difference, design wise. Used the same prompt but the Claude Code was the clear winner.
- The prompt used:

 ` Create a 'Workspace Dashboard' for Forest. Use a sidebar navigation on the left. The main content should feature 'Usage Overview' cards showing metrics like:

- Total Tokens Used: 200
- Avg Response Quality: 60
- Monthly Spend: 30

With neon progress bars for each metric.

Include:
1. **Sidebar navigation** — Dashboard (active), Library, Analytics, Settings with icons
2. **Usage Overview cards** — 3-4 metric cards with sparkline-style neon progress bars
3. **Recent Activity** — A scrollable list showing the last 10 prompts run, with columns for: Prompt Name, Latency (ms), Token Cost, Timestamp, Status badge
4. **Quick Start sidebar** — Right-side panel with action buttons for forest related
5. **Top nav bar** — Search, notifications, user profile dropdown

Design constraints:
- Dark theme with #0a1a0a background
- Primary accent: #22c55e
- Font: Fraunces for headings, Inter for body
- Subtle glassmorphism on cards (backdrop-blur, semi-transparent borders)
- All cards should have hover states with neon glow`
  
## Cons: the usage, using claude with max effort, was too high for this. I'm using pro-plan, and it took 20% of my usage.
- TO-DO: add screenshots

## First try of adding skills to PI
- The usage of tokens is still very good.
- The worst part: after creating the skills, I tried to see how will the site look. The output was awfull. The problem is 100% because of the prompt, that is generated from the index.html. I'm saying this because, even Claude Opus 4.6, made the same design mistakes.
- The outputs can be seen in pi-sitese/pi-landing-page-with-skill/2 and claude-playground/claude-same-prompt
