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

## Created The Tarot Club
- What it is behind. It opens 4 PI's, each one have their own skill up. They communicate using STATUS.md. When someone is done, they rewrite the file and pass the work to the next one
- 4 tmux PI agents, they each have their own role
- communicate with each other, and verify the work
- created a good looking Lord Of The Mysteries site -- IF YOU PLAN TO READ LORD OF THE MYSTERIES DO NOT CHECK THE PATHWAYS --
- 10% of usage using Z.AI
- https://github.com/adriantudor1229/pi-testing/tree/master/pi-sites/tarot-site

- You can see here what I was thinking, I need to investigate more
  <img width="2782" height="1754" alt="Untitled-2026-04-01-0149(1)" src="https://github.com/user-attachments/assets/aaac442e-ba71-4c45-a06b-bb6a2b1dbf38" />


## Second try - Comparing same prompt - used Claude Code with Opus 4.6 vs PI with 4 agents Z.AI
- The UI created was similar
- It took a bit longer for the 4 PI agents to complete the site, only because I made them to review the code too.
- I do not know how well was the code generated - need to investigate
- PI with 4 agents used 23 % of the Z.AI plan
- Claude Code with Pro plan used 90%
- The prompt used can be see here: https://github.com/adriantudor1229/pi-testing/blob/master/pi-sites/code-geass/tarot-plan/technologies.md#technologies-code-geass-fan-site 

## Created a Dashboard using Tarot Club
- Usage - around 30% -
- One prompt, after he finished the site, I had like 1 nitpick, that he resolved in 3 prompts.
- You can check it here https://github.com/adriantudor1229/pi-testing/tree/master/pi-sites/dashboard-4pi
