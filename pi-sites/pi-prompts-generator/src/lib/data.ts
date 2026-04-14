export interface PromptField {
	key: string;
	label: string;
	placeholder: string;
	type?: 'text' | 'textarea' | 'select';
	options?: string[];
}

export interface Prompt {
	id: string;
	name: string;
	description: string;
	tags: string[];
	template: string;
	fields: PromptField[];
}

export interface Category {
	id: string;
	name: string;
	icon: string;
	description: string;
	prompts: Prompt[];
}

export const categories: Category[] = [
	{
		id: 'frontend-design',
		name: 'Frontend Design',
		icon: '🎨',
		description: 'Prompts for UI/UX design, component creation, and styling',
		prompts: [
			{
				id: 'design-system-generator',
				name: 'Design System Generator',
				description: 'Generate a complete design system with tokens, colors, typography, and component foundations.',
				tags: ['#System', '#DesignToken'],
				template: `Design a high-fidelity design system for a cutting-edge AI prompt engineering platform named '{{platform_name}}'. The aesthetic should be '{{aesthetic_style}}': ultra-dark backgrounds ({{bg_color}}), vibrant neon accents in {{accent_colors}}, using the {{typeface}} typeface for a technical, modern feel. Focus on high-contrast borders, subtle glassmorphism effects, and a layout that emphasizes precision and machine-learning sophistication.

Generate:
1. **Color tokens** — Primary, secondary, tertiary, surface, error, and all semantic variants with dark/light modes
2. **Typography scale** — 8 levels using {{typeface}}, with weights, line heights, and letter spacing
3. **Spacing scale** — 4px base grid with 8 levels
4. **Border radii** — Sharp to fully rounded, 6 levels
5. **Shadow system** — 4 elevation levels with subtle neon glow variants
6. **Component foundations** — Button (5 variants), Input, Card, Badge, Tooltip states
7. **CSS custom properties** — All tokens output as CSS variables
8. **Tailwind config** — Ready-to-use tailwind.config.js extension

Brand mood: {{brand_mood}}
Target platform: {{target_platform}}`,
				fields: [
					{ key: 'platform_name', label: 'Platform Name', placeholder: 'e.g. Kinetic Intelligence' },
					{ key: 'aesthetic_style', label: 'Aesthetic Style', placeholder: 'e.g. The Neon Architect, Soft Minimal, Cyberpunk' },
					{ key: 'bg_color', label: 'Background Color', placeholder: 'e.g. #0e0e0e, #0a0a0f' },
					{ key: 'accent_colors', label: 'Accent Colors', placeholder: 'e.g. indigo #6366f1 and violet' },
					{ key: 'typeface', label: 'Typeface', placeholder: 'e.g. Space Grotesk, Inter, JetBrains Mono' },
					{ key: 'brand_mood', label: 'Brand Mood', placeholder: 'e.g. precision, machine-learning sophistication' },
					{ key: 'target_platform', label: 'Target Platform', placeholder: 'e.g. web app, desktop, mobile' }
				]
			},
			{
				id: 'workspace-dashboard',
				name: 'Workspace Dashboard',
				description: 'Create a dashboard with usage metrics, activity feeds, and quick-start actions.',
				tags: ['#Dashboard', '#Analytics'],
				template: `Create a 'Workspace Dashboard' for {{platform_name}}. Use a sidebar navigation on the left. The main content should feature 'Usage Overview' cards showing metrics like:

- Total Tokens Used: {{total_tokens}}
- Avg Response Quality: {{avg_quality}}
- Monthly Spend: {{monthly_spend}}

With neon progress bars for each metric.

Include:
1. **Sidebar navigation** — Dashboard (active), Library, Analytics, Settings with icons
2. **Usage Overview cards** — 3-4 metric cards with sparkline-style neon progress bars
3. **Recent Activity** — A scrollable list showing the last {{activity_count}} prompts run, with columns for: Prompt Name, Latency (ms), Token Cost, Timestamp, Status badge
4. **Quick Start sidebar** — Right-side panel with action buttons for {{quick_actions}}
5. **Top nav bar** — Search, notifications, user profile dropdown

Design constraints:
- Dark theme with {{bg_color}} background
- Primary accent: {{primary_accent}}
- Font: {{typeface}} for headings, Inter for body
- Subtle glassmorphism on cards (backdrop-blur, semi-transparent borders)
- All cards should have hover states with neon glow`,
				fields: [
					{ key: 'platform_name', label: 'Platform Name', placeholder: 'e.g. Kinetic Intelligence' },
					{ key: 'total_tokens', label: 'Token Metric', placeholder: 'e.g. 1.2M' },
					{ key: 'avg_quality', label: 'Quality Metric', placeholder: 'e.g. 98.2%' },
					{ key: 'monthly_spend', label: 'Spend Metric', placeholder: 'e.g. $42.80' },
					{ key: 'activity_count', label: 'Activity Items', placeholder: 'e.g. 8, 12' },
					{ key: 'quick_actions', label: 'Quick Actions', placeholder: 'e.g. Creative Writing, Code Generation, Data Analysis' },
					{ key: 'bg_color', label: 'Background', placeholder: 'e.g. #0e0e0e' },
					{ key: 'primary_accent', label: 'Primary Accent', placeholder: 'e.g. indigo #6366f1' },
					{ key: 'typeface', label: 'Heading Font', placeholder: 'e.g. Space Grotesk' }
				]
			},
			{
				id: 'prompt-library-editor',
				name: 'Prompt Library & Editor',
				description: 'Design a full prompt editor with code view, model config, execution output, and version history.',
				tags: ['#Editor', '#Config'],
				template: `Design a 'Prompt Library & Editor' screen for {{platform_name}}.

The layout should have three columns:

**Left Column ({{left_width}}px):**
- Prompt Library header
- Folder list: {{folders}}
- Recent prompts list with tags, timestamps, and click-to-open
- Active folder highlighted with primary color border

**Center Column (flex):**
- Editor header with: prompt title, "Unsaved changes" indicator, Share button, "Run Prompt" CTA
- Code editor with:
  - Line numbers (faded)
  - Syntax highlighting for prompt template variables in {{variable_style}}
  - Variables wrapped in {{variable_delimiter}} and highlighted
  - Blinking cursor animation
- Execution Output panel at bottom ({{output_height}}px):
  - Terminal-style header with token count and latency
  - JSON response output with syntax coloring
  - Monospace font

**Right Column ({{right_width}}px):**
- Model Config section:
  - Model selector dropdown with glow indicator
  - Temperature slider (0.0-2.0) with description
  - Top-P slider (0.0-1.0)
  - Detected Variables list with type badges
- Version History card at bottom

Design:
- Background: {{bg_color}}
- Primary: {{primary_color}}
- Surface containers at multiple elevation levels
- Neon glow on active elements
- Custom thin scrollbar (4px)
- Font: {{typeface}} for code, Inter for UI`,
				fields: [
					{ key: 'platform_name', label: 'Platform Name', placeholder: 'e.g. Kinetic Intelligence' },
					{ key: 'left_width', label: 'Left Panel Width', placeholder: 'e.g. 320' },
					{ key: 'folders', label: 'Folders', placeholder: 'e.g. Customer Support, Code Refactoring, Creative Writing' },
					{ key: 'variable_style', label: 'Variable Highlight', placeholder: 'e.g. purple pill badges' },
					{ key: 'variable_delimiter', label: 'Variable Syntax', placeholder: 'e.g. {{variable}}' },
					{ key: 'output_height', label: 'Output Panel Height', placeholder: 'e.g. 256' },
					{ key: 'right_width', label: 'Right Panel Width', placeholder: 'e.g. 280' },
					{ key: 'bg_color', label: 'Background', placeholder: 'e.g. #0e0e0e' },
					{ key: 'primary_color', label: 'Primary Color', placeholder: 'e.g. #a3a6ff' },
					{ key: 'typeface', label: 'Mono Font', placeholder: 'e.g. JetBrains Mono' }
				]
			},
			{
				id: 'component-builder',
				name: 'Component Builder',
				description: 'Generate a fully accessible, responsive UI component from a description.',
				tags: ['#Component', '#A11y'],
				template: `Create a {{framework}} component for {{componentName}}.

Requirements:
- Must be fully responsive (mobile-first)
- Follow {{designSystem}} design conventions
- Include proper ARIA attributes for accessibility
- Support dark/light mode
- Include all relevant states: default, hover, focus, active, disabled

Component details:
{{componentDescription}}

Include:
1. The component file with TypeScript types
2. CSS/Styled styles
3. A brief usage example`,
				fields: [
					{ key: 'framework', label: 'Framework', placeholder: 'e.g. React, Svelte, Vue' },
					{ key: 'componentName', label: 'Component Name', placeholder: 'e.g. PricingCard' },
					{ key: 'designSystem', label: 'Design System', placeholder: 'e.g. Tailwind, Material UI, Radix' },
					{ key: 'componentDescription', label: 'Component Description', placeholder: 'Describe what the component should do and look like' }
				]
			},
			{
				id: 'landing-page',
				name: 'Landing Page',
				description: 'Generate a complete, conversion-optimized landing page.',
				tags: ['#Landing', '#Conversion'],
				template: `Design and build a landing page for {{productName}}.

Target audience: {{audience}}
Primary goal: {{goal}}

The page should include:
1. Hero section with a strong headline and CTA
2. Social proof section (testimonials/logos)
3. Features/Benefits section (3-5 key points)
4. Pricing or how-it-works section
5. Final CTA section
6. Footer

Technical requirements:
- Use {{techStack}}
- Fully responsive
- Fast loading (minimal JS)
- SEO-optimized meta tags
- Accessible (WCAG 2.1 AA)

Brand tone: {{tone}}`,
				fields: [
					{ key: 'productName', label: 'Product Name', placeholder: 'e.g. PiPrompts' },
					{ key: 'audience', label: 'Target Audience', placeholder: 'e.g. developers, designers, PMs' },
					{ key: 'goal', label: 'Primary Goal', placeholder: 'e.g. sign-ups, purchases, downloads' },
					{ key: 'techStack', label: 'Tech Stack', placeholder: 'e.g. Svelte + Tailwind, Next.js' },
					{ key: 'tone', label: 'Brand Tone', placeholder: 'e.g. professional, playful, minimal' }
				]
			},
			{
				id: 'responsive-layout',
				name: 'Responsive Layout',
				description: 'Generate a complex responsive layout with proper breakpoints and grid system.',
				tags: ['#Layout', '#Grid'],
				template: `Build a responsive layout for {{layoutName}} using {{framework}}.

Layout requirements:
- Mobile: {{mobileLayout}}
- Tablet: {{tabletLayout}}
- Desktop: {{desktopLayout}}

Specifications:
- Use CSS Grid and/or Flexbox
- Breakpoints: 640px, 768px, 1024px, 1280px
- Sticky/fixed elements: {{stickyElements}}
- Include a navigation bar and footer
- Smooth transitions between breakpoints
- No horizontal overflow at any size
- Support for RTL languages

Content areas:
{{contentAreas}}`,
				fields: [
					{ key: 'layoutName', label: 'Layout Name', placeholder: 'e.g. Blog, Dashboard, Store' },
					{ key: 'framework', label: 'Framework', placeholder: 'e.g. Svelte, React, plain HTML/CSS' },
					{ key: 'mobileLayout', label: 'Mobile Layout', placeholder: 'e.g. single column, hamburger menu' },
					{ key: 'tabletLayout', label: 'Tablet Layout', placeholder: 'e.g. two columns, sidebar collapsed' },
					{ key: 'desktopLayout', label: 'Desktop Layout', placeholder: 'e.g. sidebar + main + aside' },
					{ key: 'stickyElements', label: 'Sticky Elements', placeholder: 'e.g. navbar, sidebar' },
					{ key: 'contentAreas', label: 'Content Areas', placeholder: 'Describe the main content sections' }
				]
			}
		]
	},
	{
		id: 'coding',
		name: 'Coding',
		icon: '🧑‍💻',
		description: 'Prompts for writing, refactoring, and debugging code',
		prompts: [
			{
				id: 'feature-implementation',
				name: 'Feature Implementation',
				description: 'Implement a complete feature with proper structure, tests, and documentation.',
				tags: ['#Feature', '#Fullstack'],
				template: `Implement the following feature in {{language}} for a {{projectType}} project.

Feature: {{featureDescription}}

Requirements:
- Follow the existing project patterns and conventions
- Include proper error handling
- Write unit tests with {{testFramework}}
- Add inline documentation for non-obvious logic
- Consider edge cases: {{edgeCases}}

Codebase context:
- Architecture: {{architecture}}
- Key files to modify: {{filesToModify}}
- Dependencies available: {{dependencies}}

Output the implementation in this order:
1. Core logic/functions
2. Integration with existing code
3. Unit tests
4. Brief explanation of design decisions`,
				fields: [
					{ key: 'language', label: 'Language', placeholder: 'e.g. TypeScript, Python, Go' },
					{ key: 'projectType', label: 'Project Type', placeholder: 'e.g. web app, CLI tool, API server' },
					{ key: 'featureDescription', label: 'Feature Description', placeholder: 'Describe the feature in detail' },
					{ key: 'testFramework', label: 'Test Framework', placeholder: 'e.g. Vitest, Jest, pytest' },
					{ key: 'edgeCases', label: 'Edge Cases', placeholder: 'e.g. empty input, concurrent access, large files' },
					{ key: 'architecture', label: 'Architecture', placeholder: 'e.g. MVC, clean architecture, microservices' },
					{ key: 'filesToModify', label: 'Files to Modify', placeholder: 'e.g. src/routes/api.ts, src/db/queries.ts' },
					{ key: 'dependencies', label: 'Available Dependencies', placeholder: 'e.g. Express, Zod, Prisma' }
				]
			},
			{
				id: 'bug-fix',
				name: 'Bug Fix',
				description: 'Systematically diagnose and fix a bug with root cause analysis.',
				tags: ['#Debug', '#Fix'],
				template: `Help me fix a bug in my {{language}} {{projectType}} application.

**Bug Description:**
{{bugDescription}}

**Steps to Reproduce:**
{{stepsToReproduce}}

**Expected Behavior:**
{{expectedBehavior}}

**Actual Behavior:**
{{actualBehavior}}

**Error Output / Logs:**
{{errorOutput}}

**Environment:**
- OS: {{os}}
- Runtime/Version: {{runtimeVersion}}

Please:
1. Analyze the root cause
2. Explain why the bug occurs
3. Provide the minimal fix
4. Suggest how to prevent similar bugs (tests, linting, etc.)`,
				fields: [
					{ key: 'language', label: 'Language', placeholder: 'e.g. TypeScript, Python' },
					{ key: 'projectType', label: 'Project Type', placeholder: 'e.g. web app, API, CLI' },
					{ key: 'bugDescription', label: 'Bug Description', placeholder: 'Brief summary of the bug' },
					{ key: 'stepsToReproduce', label: 'Steps to Reproduce', placeholder: '1. Go to...\n2. Click...\n3. See error...' },
					{ key: 'expectedBehavior', label: 'Expected Behavior', placeholder: 'What should happen' },
					{ key: 'actualBehavior', label: 'Actual Behavior', placeholder: 'What actually happens' },
					{ key: 'errorOutput', label: 'Error Output / Logs', placeholder: 'Paste error messages or stack traces' },
					{ key: 'os', label: 'OS', placeholder: 'e.g. macOS, Linux, Windows' },
					{ key: 'runtimeVersion', label: 'Runtime Version', placeholder: 'e.g. Node 20, Python 3.12' }
				]
			},
			{
				id: 'code-review',
				name: 'Code Review',
				description: 'Get a thorough code review with actionable, prioritized feedback.',
				tags: ['#Review', '#Quality'],
				template: `Review the following {{language}} code for a {{projectType}} project.

Focus areas: {{focusAreas}}

\`\`\`{{language}}
{{code}}
\`\`\`

Review criteria:
1. **Correctness** — Does the code do what it's supposed to? Any logic errors?
2. **Security** — Any vulnerabilities (injection, XSS, auth issues)?
3. **Performance** — Any unnecessary computations, memory leaks, or N+1 queries?
4. **Readability** — Is the code easy to understand? Good naming?
5. **Maintainability** — Is it easy to modify? Properly decoupled?
6. **Testing** — Are there enough tests? Are edge cases covered?
7. **Best Practices** — Does it follow language/framework conventions?

Format each finding as:
- 🔴 **Critical** / 🟡 **Warning** / 🟢 **Suggestion**
- Location: [line or section]
- Issue: [description]
- Fix: [suggested code change]`,
				fields: [
					{ key: 'language', label: 'Language', placeholder: 'e.g. TypeScript, Python' },
					{ key: 'projectType', label: 'Project Type', placeholder: 'e.g. web app, library, API' },
					{ key: 'focusAreas', label: 'Focus Areas', placeholder: 'e.g. security, performance, all' },
					{ key: 'code', label: 'Code to Review', placeholder: 'Paste the code here' }
				]
			},
			{
				id: 'refactor',
				name: 'Refactor Code',
				description: 'Refactor messy code into clean, idiomatic, well-structured code.',
				tags: ['#Refactor', '#Clean'],
				template: `Refactor the following {{language}} code.

Refactoring goals: {{goals}}

\`\`\`{{language}}
{{code}}
\`\`\`

Constraints:
- Do not change the external behavior/API
- Maintain compatibility with existing consumers
- Keep changes minimal and focused
- Target: {{targetPattern}}

Apply these principles:
1. SOLID where applicable
2. DRY — remove duplication
3. Meaningful names
4. Small, focused functions
5. Proper error handling
6. Remove dead code

Output:
1. The refactored code
2. A summary of changes made and why
3. Any follow-up refactoring recommendations`,
				fields: [
					{ key: 'language', label: 'Language', placeholder: 'e.g. TypeScript, Python, Go' },
					{ key: 'goals', label: 'Refactoring Goals', placeholder: 'e.g. readability, performance, testability' },
					{ key: 'code', label: 'Code to Refactor', placeholder: 'Paste the code here' },
					{ key: 'targetPattern', label: 'Target Pattern', placeholder: 'e.g. functional, OOP, module pattern' }
				]
			}
		]
	},
	{
		id: 'architecture',
		name: 'Architecture',
		icon: '🏗️',
		description: 'Prompts for system design, planning, and technical decisions',
		prompts: [
			{
				id: 'system-design',
				name: 'System Design',
				description: 'Design a scalable system from scratch with full documentation.',
				tags: ['#SystemDesign', '#Scale'],
				template: `Design a system for {{systemName}}.

**Problem Statement:**
{{problemStatement}}

**Requirements:**
- Expected users: {{userCount}}
- Requests per second (peak): {{rps}}
- Data volume: {{dataVolume}}
- Availability target: {{availability}}
- Latency target: {{latencyTarget}}

**Deliver:**
1. High-level architecture diagram (describe in text)
2. Component breakdown with responsibilities
3. Data flow (request lifecycle)
4. Database design (entities, relationships, indexes)
5. API design (key endpoints)
6. Caching strategy
7. Scaling strategy (horizontal/vertical)
8. Failure modes and mitigation
9. Technology stack recommendation with justification
10. Cost estimation approach

**Constraints:**
- Team size: {{teamSize}}
- Timeline: {{timeline}}
- Budget: {{budget}}
- Compliance: {{compliance}}`,
				fields: [
					{ key: 'systemName', label: 'System Name', placeholder: 'e.g. Real-time Chat Platform' },
					{ key: 'problemStatement', label: 'Problem Statement', placeholder: 'What problem does this system solve?' },
					{ key: 'userCount', label: 'Expected Users', placeholder: 'e.g. 100K, 10M' },
					{ key: 'rps', label: 'Peak RPS', placeholder: 'e.g. 1K, 100K' },
					{ key: 'dataVolume', label: 'Data Volume', placeholder: 'e.g. 1TB/day, 500GB total' },
					{ key: 'availability', label: 'Availability Target', placeholder: 'e.g. 99.9%, 99.99%' },
					{ key: 'latencyTarget', label: 'Latency Target', placeholder: 'e.g. p99 < 200ms' },
					{ key: 'teamSize', label: 'Team Size', placeholder: 'e.g. 3-5, 10+' },
					{ key: 'timeline', label: 'Timeline', placeholder: 'e.g. 3 months, 1 year' },
					{ key: 'budget', label: 'Budget', placeholder: 'e.g. bootstrapped, enterprise' },
					{ key: 'compliance', label: 'Compliance', placeholder: 'e.g. GDPR, HIPAA, SOC2, none' }
				]
			},
			{
				id: 'api-design',
				name: 'API Design',
				description: 'Design a clean, consistent, and well-documented API.',
				tags: ['#API', '#REST'],
				template: `Design a {{apiStyle}} API for {{apiName}}.

**Purpose:**
{{purpose}}

**Core Resources:**
{{resources}}

**Requirements:**
- Authentication: {{auth}}
- Rate limiting: {{rateLimit}}
- Versioning: {{versioning}}
- Response format: {{responseFormat}}

**Deliver:**
1. Resource naming and URL structure
2. Full endpoint list with methods, paths, request/response bodies
3. Error response format and error codes
4. Pagination strategy
5. Filtering, sorting, and field selection
6. Authentication/Authorization flow
7. OpenAPI 3.0 spec (YAML)
8. Changelog/deprecation policy

**Design Principles:**
- Consistent naming conventions
- Predictable error responses
- Idempotent where appropriate
- Follow REST/gRPC/GraphQL best practices`,
				fields: [
					{ key: 'apiStyle', label: 'API Style', placeholder: 'e.g. REST, GraphQL, gRPC' },
					{ key: 'apiName', label: 'API Name', placeholder: 'e.g. User Management API' },
					{ key: 'purpose', label: 'Purpose', placeholder: 'What does this API do?' },
					{ key: 'resources', label: 'Core Resources', placeholder: 'e.g. Users, Orders, Products' },
					{ key: 'auth', label: 'Authentication', placeholder: 'e.g. JWT, OAuth2, API keys' },
					{ key: 'rateLimit', label: 'Rate Limiting', placeholder: 'e.g. 100 req/min, tiered' },
					{ key: 'versioning', label: 'Versioning', placeholder: 'e.g. URL-based, header-based' },
					{ key: 'responseFormat', label: 'Response Format', placeholder: 'e.g. JSON:API, custom envelope' }
				]
			}
		]
	},
	{
		id: 'devops',
		name: 'DevOps',
		icon: '⚙️',
		description: 'Prompts for CI/CD, deployment, and infrastructure',
		prompts: [
			{
				id: 'cicd-pipeline',
				name: 'CI/CD Pipeline',
				description: 'Generate a production-ready CI/CD pipeline configuration.',
				tags: ['#CICD', '#Automation'],
				template: `Create a CI/CD pipeline for a {{projectType}} project using {{platform}}.

**Pipeline stages needed:**
{{stages}}

**Requirements:**
- Branch strategy: {{branchStrategy}}
- Environment(s): {{environments}}
- Deployment method: {{deployment}}
- Notification: {{notification}}

**Include:**
1. Build stage (with caching)
2. Test stage (unit + integration)
3. Lint/format check
4. Security scan
5. Staging deployment (auto on merge to main)
6. Production deployment (manual approval)
7. Rollback procedure
8. Slack/email notification on failure

**Constraints:**
- Pipeline should run in under {{maxDuration}} minutes
- Handle {{monorepo}} monorepo structure
- Cost optimization: {{costOptimization}}`,
				fields: [
					{ key: 'projectType', label: 'Project Type', placeholder: 'e.g. Node.js, Python, Docker' },
					{ key: 'platform', label: 'CI/CD Platform', placeholder: 'e.g. GitHub Actions, GitLab CI, Jenkins' },
					{ key: 'stages', label: 'Pipeline Stages', placeholder: 'e.g. lint, test, build, deploy' },
					{ key: 'branchStrategy', label: 'Branch Strategy', placeholder: 'e.g. trunk-based, GitFlow' },
					{ key: 'environments', label: 'Environments', placeholder: 'e.g. staging, production' },
					{ key: 'deployment', label: 'Deployment Method', placeholder: 'e.g. Docker, Kubernetes, Serverless' },
					{ key: 'notification', label: 'Notifications', placeholder: 'e.g. Slack, email, Discord' },
					{ key: 'maxDuration', label: 'Max Duration (min)', placeholder: 'e.g. 10, 15, 30' },
					{ key: 'monorepo', label: 'Monorepo', placeholder: 'yes or no' },
					{ key: 'costOptimization', label: 'Cost Optimization', placeholder: 'e.g. spot instances, caching, parallel jobs' }
				]
			},
			{
				id: 'docker-setup',
				name: 'Docker Setup',
				description: 'Generate optimized Docker configuration for production deployment.',
				tags: ['#Docker', '#Container'],
				template: `Create a production-ready Docker setup for a {{projectType}} application.

**Application details:**
- Language/Runtime: {{runtime}}
- Framework: {{framework}}
- Port: {{port}}
- Build tool: {{buildTool}}

**Generate:**
1. Multi-stage Dockerfile (build → production)
2. docker-compose.yml for local development
3. docker-compose.prod.yml for production
4. .dockerignore file

**Requirements:**
- Minimal image size (use Alpine or distroless where possible)
- Non-root user in production
- Health check endpoint
- Proper signal handling (graceful shutdown)
- Environment variable configuration
- Volume mounts for persistent data: {{volumes}}

**Services needed:**
{{services}}

**Include:**
- Redis cache
- Database initialization
- Reverse proxy (nginx/caddy)
- Log aggregation setup`,
				fields: [
					{ key: 'projectType', label: 'Project Type', placeholder: 'e.g. web app, API, worker' },
					{ key: 'runtime', label: 'Runtime', placeholder: 'e.g. Node.js 20, Python 3.12, Go 1.22' },
					{ key: 'framework', label: 'Framework', placeholder: 'e.g. Express, FastAPI, SvelteKit' },
					{ key: 'port', label: 'Port', placeholder: 'e.g. 3000, 8080' },
					{ key: 'buildTool', label: 'Build Tool', placeholder: 'e.g. Vite, Webpack, esbuild' },
					{ key: 'volumes', label: 'Volumes', placeholder: 'e.g. uploads, database data' },
					{ key: 'services', label: 'Additional Services', placeholder: 'e.g. PostgreSQL, Redis, MinIO' }
				]
			}
		]
	},
	{
		id: 'writing',
		name: 'Writing & Docs',
		icon: '✍️',
		description: 'Prompts for documentation, blog posts, and content creation',
		prompts: [
			{
				id: 'technical-docs',
				name: 'Technical Documentation',
				description: 'Generate clear, comprehensive technical documentation.',
				tags: ['#Docs', '#Technical'],
				template: `Write {{docType}} for {{projectName}}.

**Audience:** {{audience}}
**Tone:** {{tone}}

**Content to document:**
{{content}}

**Structure the documentation with:**
1. Overview / Introduction — What and why, in 2-3 sentences
2. Quick Start — Get running in under 5 minutes
3. Core Concepts — Key ideas explained with examples
4. API Reference — If applicable, with parameters and return types
5. Examples — Common use cases with code snippets
6. FAQ / Troubleshooting — Anticipate 3-5 common issues
7. Changelog — Recent changes if applicable

**Guidelines:**
- Use active voice and present tense
- Include code examples for every concept
- Keep paragraphs under 4 sentences
- Use tables for parameter references
- Add "info", "warning", and "tip" callouts where helpful`,
				fields: [
					{ key: 'docType', label: 'Document Type', placeholder: 'e.g. API docs, README, contributor guide' },
					{ key: 'projectName', label: 'Project Name', placeholder: 'e.g. PiPrompts Generator' },
					{ key: 'audience', label: 'Audience', placeholder: 'e.g. beginners, senior devs, PMs' },
					{ key: 'tone', label: 'Tone', placeholder: 'e.g. friendly, formal, concise' },
					{ key: 'content', label: 'Content to Document', placeholder: 'Describe what needs to be documented' }
				]
			},
			{
				id: 'blog-post',
				name: 'Blog Post',
				description: 'Write an engaging, well-structured technical blog post.',
				tags: ['#Blog', '#Content'],
				template: `Write a blog post about "{{topic}}" for {{audience}}.

**Angle/Hook:** {{angle}}
**Word count target:** {{wordCount}} words
**Tone:** {{tone}}

**Structure:**
1. Compelling headline (give 3 options)
2. Hook — Start with a relatable problem, surprising stat, or bold claim
3. Introduction — Context and what the reader will learn
4. Body — 3-5 sections with clear subheadings
5. Code examples — Practical, runnable snippets where relevant
6. Conclusion — Key takeaway + call to action

**Requirements:**
- Short sentences, varied paragraph length
- Include at least one diagram or table if applicable
- Add a "TL;DR" section at the top
- Reference real-world examples
- SEO: include keywords naturally

**Avoid:**
- Generic filler phrases
- Overused metaphors
- Unnecessary jargon`,
				fields: [
					{ key: 'topic', label: 'Topic', placeholder: 'e.g. Building real-time apps with WebSockets' },
					{ key: 'audience', label: 'Audience', placeholder: 'e.g. mid-level developers, tech leads' },
					{ key: 'angle', label: 'Angle / Hook', placeholder: 'e.g. why most implementations fail' },
					{ key: 'wordCount', label: 'Word Count', placeholder: 'e.g. 1500, 3000' },
					{ key: 'tone', label: 'Tone', placeholder: 'e.g. conversational, authoritative, tutorial' }
				]
			}
		]
	},
	{
		id: 'security',
		name: 'Security',
		icon: '🔒',
		description: 'Prompts for security auditing, secure coding, and threat analysis',
		prompts: [
			{
				id: 'security-audit',
				name: 'Security Audit',
				description: 'Perform a thorough security audit on code or architecture.',
				tags: ['#Security', '#Audit'],
				template: `Perform a security audit on the following {{language}} code/system.

**Context:** {{context}}

\`\`\`
{{codeOrConfig}}
\`\`\`

**Audit checklist:**
1. **Injection** — SQL injection, XSS, command injection, LDAP injection
2. **Authentication** — Weak passwords, session management, token handling
3. **Authorization** — Broken access control, privilege escalation
4. **Data Exposure** — Sensitive data in logs, URLs, error messages
5. **Cryptography** — Weak algorithms, hardcoded secrets, key management
6. **Configuration** — Default credentials, open ports, debug modes
7. **Dependencies** — Known vulnerabilities in third-party packages
8. **Input Validation** — Missing/insufficient validation and sanitization
9. **Error Handling** — Information leakage through error messages
10. **API Security** — Rate limiting, CORS, CSRF protection

**For each finding:**
- Severity: 🔴 Critical / 🟠 High / 🟡 Medium / 🟢 Low
- Category: [OWASP Top 10 category]
- Description: [what's wrong]
- Impact: [what could happen]
- Remediation: [how to fix, with code]`,
				fields: [
					{ key: 'language', label: 'Language', placeholder: 'e.g. TypeScript, Python, YAML config' },
					{ key: 'context', label: 'Context', placeholder: 'e.g. Express API, AWS infra, React frontend' },
					{ key: 'codeOrConfig', label: 'Code / Config', placeholder: 'Paste the code or configuration to audit' }
				]
			}
		]
	},
	{
		id: 'testing',
		name: 'Testing',
		icon: '🧪',
		description: 'Prompts for writing tests, test strategy, and QA',
		prompts: [
			{
				id: 'test-suite',
				name: 'Test Suite Generator',
				description: 'Generate a comprehensive test suite for any function or module.',
				tags: ['#Testing', '#QA'],
				template: `Write a comprehensive test suite for the following {{language}} code using {{testFramework}}.

\`\`\`{{language}}
{{code}}
\`\`\`

**Test categories to cover:**
1. **Happy path** — Normal inputs with expected outputs
2. **Edge cases** — Empty inputs, null/undefined, zero, max values
3. **Error cases** — Invalid inputs, error conditions, exceptions
4. **Boundary conditions** — Off-by-one, limits, thresholds
5. **Integration** — Interaction with dependencies (mocked)
6. **Concurrency** — Race conditions, async issues (if applicable)

**Requirements:**
- Use descriptive test names (it should...)
- Follow AAA pattern (Arrange, Act, Assert)
- Mock external dependencies
- Each test should be independent and idempotent
- Aim for >90% code coverage
- Include setup/teardown if needed

**Also provide:**
- A test strategy summary
- Any tests that are hard to write and why
- Suggested improvements to the code for better testability`,
				fields: [
					{ key: 'language', label: 'Language', placeholder: 'e.g. TypeScript, Python, Go' },
					{ key: 'testFramework', label: 'Test Framework', placeholder: 'e.g. Vitest, Jest, pytest, Go testing' },
					{ key: 'code', label: 'Code to Test', placeholder: 'Paste the function or module' }
				]
			}
		]
	}
];
