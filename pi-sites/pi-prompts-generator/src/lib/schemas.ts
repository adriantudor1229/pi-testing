export interface ColorSchema {
	id: string;
	name: string;
	description: string;
	mood: string;
	colors: {
		primary: string;
		secondary: string;
		accent: string;
		background: string;
		surface: string;
		surfaceAlt: string;
		text: string;
		textMuted: string;
		border: string;
		error: string;
		success: string;
		warning: string;
	};
	fonts: {
		heading: string;
		body: string;
		mono: string;
	};
	radius: 'sharp' | 'subtle' | 'rounded' | 'pill';
}

export const colorSchemas: ColorSchema[] = [
	{
		id: 'neon-architect',
		name: 'The Neon Architect',
		description: 'Ultra-dark with vibrant neon accents. Precision meets sophistication.',
		mood: 'Technical, futuristic, ML-inspired',
		colors: {
			primary: '#a3a6ff',
			secondary: '#a28efc',
			accent: '#ffa5d9',
			background: '#0e0e0e',
			surface: '#1a1a1a',
			surfaceAlt: '#262626',
			text: '#ffffff',
			textMuted: '#adaaaa',
			border: '#484847',
			error: '#ff6e84',
			success: '#4ade80',
			warning: '#fbbf24'
		},
		fonts: {
			heading: 'Space Grotesk',
			body: 'Inter',
			mono: 'JetBrains Mono'
		},
		radius: 'subtle'
	},
	{
		id: 'ocean-depths',
		name: 'Ocean Depths',
		description: 'Deep blues and teals creating a calm, professional atmosphere.',
		mood: 'Calm, trustworthy, corporate',
		colors: {
			primary: '#38bdf8',
			secondary: '#06b6d4',
			accent: '#22d3ee',
			background: '#0c1222',
			surface: '#1e293b',
			surfaceAlt: '#334155',
			text: '#f1f5f9',
			textMuted: '#94a3b8',
			border: '#475569',
			error: '#f87171',
			success: '#34d399',
			warning: '#fbbf24'
		},
		fonts: {
			heading: 'DM Sans',
			body: 'Inter',
			mono: 'Fira Code'
		},
		radius: 'rounded'
	},
	{
		id: 'ember-glow',
		name: 'Ember Glow',
		description: 'Warm oranges and ambers on deep charcoal. Energetic and bold.',
		mood: 'Energetic, warm, startup-vibe',
		colors: {
			primary: '#fb923c',
			secondary: '#f97316',
			accent: '#fbbf24',
			background: '#1c1917',
			surface: '#292524',
			surfaceAlt: '#44403c',
			text: '#fafaf9',
			textMuted: '#a8a29e',
			border: '#57534e',
			error: '#ef4444',
			success: '#22c55e',
			warning: '#eab308'
		},
		fonts: {
			heading: 'Outfit',
			body: 'DM Sans',
			mono: 'JetBrains Mono'
		},
		radius: 'rounded'
	},
	{
		id: 'mint-fresh',
		name: 'Mint Fresh',
		description: 'Clean greens on soft white. Modern SaaS aesthetic.',
		mood: 'Clean, fresh, minimal SaaS',
		colors: {
			primary: '#34d399',
			secondary: '#10b981',
			accent: '#6ee7b7',
			background: '#f8fafc',
			surface: '#ffffff',
			surfaceAlt: '#f1f5f9',
			text: '#0f172a',
			textMuted: '#64748b',
			border: '#e2e8f0',
			error: '#ef4444',
			success: '#22c55e',
			warning: '#f59e0b'
		},
		fonts: {
			heading: 'Plus Jakarta Sans',
			body: 'Inter',
			mono: 'IBM Plex Mono'
		},
		radius: 'rounded'
	},
	{
		id: 'cyberpunk',
		name: 'Cyberpunk',
		description: 'Hot pinks and electric blues on black. Bold and rebellious.',
		mood: 'Bold, rebellious, gaming-adjacent',
		colors: {
			primary: '#f472b6',
			secondary: '#c084fc',
			accent: '#22d3ee',
			background: '#0a0a0a',
			surface: '#171717',
			surfaceAlt: '#262626',
			text: '#fafafa',
			textMuted: '#a3a3a3',
			border: '#404040',
			error: '#fb7185',
			success: '#4ade80',
			warning: '#facc15'
		},
		fonts: {
			heading: 'Orbitron',
			body: 'Exo 2',
			mono: 'Share Tech Mono'
		},
		radius: 'sharp'
	},
	{
		id: 'cream-latte',
		name: 'Cream Latte',
		description: 'Warm beiges and soft browns. Elegant and inviting.',
		mood: 'Elegant, warm, editorial',
		colors: {
			primary: '#92400e',
			secondary: '#b45309',
			accent: '#d97706',
			background: '#fffbeb',
			surface: '#fef3c7',
			surfaceAlt: '#fde68a',
			text: '#1c1917',
			textMuted: '#78716c',
			border: '#d6d3d1',
			error: '#dc2626',
			success: '#16a34a',
			warning: '#ca8a04'
		},
		fonts: {
			heading: 'Playfair Display',
			body: 'Lora',
			mono: 'Source Code Pro'
		},
		radius: 'subtle'
	},
	{
		id: 'arctic-frost',
		name: 'Arctic Frost',
		description: 'Cool whites and icy blues. Pure and minimal.',
		mood: 'Minimal, pure, Scandinavian',
		colors: {
			primary: '#3b82f6',
			secondary: '#60a5fa',
			accent: '#93c5fd',
			background: '#ffffff',
			surface: '#f8fafc',
			surfaceAlt: '#f1f5f9',
			text: '#0f172a',
			textMuted: '#64748b',
			border: '#e2e8f0',
			error: '#ef4444',
			success: '#10b981',
			warning: '#f59e0b'
		},
		fonts: {
			heading: 'Geist',
			body: 'Inter',
			mono: 'Geist Mono'
		},
		radius: 'rounded'
	},
	{
		id: 'midnight-velvet',
		name: 'Midnight Velvet',
		description: 'Deep purples and golds. Luxurious and premium.',
		mood: 'Luxury, premium, exclusive',
		colors: {
			primary: '#c084fc',
			secondary: '#a855f7',
			accent: '#fbbf24',
			background: '#0f0a1a',
			surface: '#1a1128',
			surfaceAlt: '#2d1f42',
			text: '#faf5ff',
			textMuted: '#a78bfa',
			border: '#4c3080',
			error: '#fb7185',
			success: '#34d399',
			warning: '#fcd34d'
		},
		fonts: {
			heading: 'Cormorant Garamond',
			body: 'Outfit',
			mono: 'Fira Code'
		},
		radius: 'pill'
	},
	{
		id: 'forest-moss',
		name: 'Forest Moss',
		description: 'Rich greens and earthy tones. Natural and grounded.',
		mood: 'Natural, grounded, eco-friendly',
		colors: {
			primary: '#22c55e',
			secondary: '#16a34a',
			accent: '#a3e635',
			background: '#0a1a0a',
			surface: '#142814',
			surfaceAlt: '#1f3a1f',
			text: '#ecfccb',
			textMuted: '#86efac',
			border: '#365336',
			error: '#f87171',
			success: '#4ade80',
			warning: '#fde047'
		},
		fonts: {
			heading: 'Fraunces',
			body: 'Source Sans 3',
			mono: 'IBM Plex Mono'
		},
		radius: 'rounded'
	},
	{
		id: 'sunset-drift',
		name: 'Sunset Drift',
		description: 'Warm corals and soft purples. Creative and approachable.',
		mood: 'Creative, playful, friendly',
		colors: {
			primary: '#fb7185',
			secondary: '#f472b6',
			accent: '#c084fc',
			background: '#fef2f2',
			surface: '#ffffff',
			surfaceAlt: '#fce7f3',
			text: '#1e1b4b',
			textMuted: '#6b7280',
			border: '#e5e7eb',
			error: '#dc2626',
			success: '#059669',
			warning: '#d97706'
		},
		fonts: {
			heading: 'Nunito',
			body: 'Nunito Sans',
			mono: 'Victor Mono'
		},
		radius: 'pill'
	}
];
