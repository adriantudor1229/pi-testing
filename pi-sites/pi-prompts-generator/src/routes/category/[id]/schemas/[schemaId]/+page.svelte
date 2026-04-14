<script lang="ts">
	import { colorSchemas } from '$lib/schemas';

	let { data } = $props();
	const schema = data.schema;
	let copiedColor = $state<string | null>(null);

	function copyColor(name: string, hex: string) {
		navigator.clipboard.writeText(hex);
		copiedColor = name;
		setTimeout(() => (copiedColor = null), 1500);
	}

	function copyAll() {
		const text = Object.entries(schema.colors)
			.map(([k, v]) => `${k}: ${v}`)
			.join('\n');
		navigator.clipboard.writeText(text);
	}

	function contrastColor(hex: string): string {
		const r = parseInt(hex.slice(1, 3), 16);
		const g = parseInt(hex.slice(3, 5), 16);
		const b = parseInt(hex.slice(5, 7), 16);
		const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
		return lum > 0.5 ? '#0f0f0f' : '#ffffff';
	}

	const radiusMap: Record<string, string> = { sharp: '0px', subtle: '4px', rounded: '8px', pill: '16px' };
</script>

<svelte:head>
	<title>{schema.name} — Color Schemas — Pi Prompts</title>
</svelte:head>

<!-- Full workspace -->
<section class="flex-1 flex bg-surface overflow-hidden relative">
	<!-- Left: Schema list nav -->
	<div class="w-72 bg-surface-container-low flex flex-col border-r border-outline-variant/5">
		<div class="p-5 flex-1 overflow-y-auto">
			<a href="/category/frontend-design/schemas" class="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors mb-5">
				<span class="material-symbols-outlined text-sm">arrow_back</span>
				<span class="text-xs">All Schemas</span>
			</a>

			<p class="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-3">Schemas</p>
			<div class="space-y-1.5">
				{#each colorSchemas as s}
					<a
						href="/category/frontend-design/schemas/{s.id}"
						class="flex items-center gap-3 px-3 py-2.5 rounded-lg {s.id === schema.id ? 'bg-surface-variant border-l-2 border-primary' : 'hover:bg-surface-container-high border-l-2 border-transparent'} cursor-pointer transition-all group"
					>
						<!-- Mini swatches -->
						<div class="flex gap-0.5">
							<div class="w-2.5 h-5 rounded-sm" style="background: {s.colors.primary}"></div>
							<div class="w-2.5 h-5 rounded-sm" style="background: {s.colors.secondary}"></div>
							<div class="w-2.5 h-5 rounded-sm" style="background: {s.colors.accent}"></div>
						</div>
						<span class="text-[11px] {s.id === schema.id ? 'text-primary font-bold' : 'text-on-surface-variant group-hover:text-white'} transition-colors">{s.name}</span>
					</a>
				{/each}
			</div>
		</div>
	</div>

	<!-- Right: Schema Detail -->
	<div class="flex-1 overflow-y-auto p-8">
		<div class="max-w-3xl mx-auto">
			<!-- Header -->
			<div class="flex items-center justify-between mb-8">
				<div>
					<h2 class="headline-font text-2xl font-bold text-white mb-1">{schema.name}</h2>
					<p class="text-sm text-on-surface-variant">{schema.description}</p>
					<span class="text-[10px] text-on-surface-variant/60 mt-1 block">{schema.mood}</span>
				</div>
				<button
					class="px-4 py-2 bg-gradient-to-r from-primary to-primary-dim text-on-primary text-xs font-bold rounded-lg flex items-center gap-2 hover:opacity-90 active:scale-95 transition-all"
					onclick={copyAll}
				>
					<span class="material-symbols-outlined text-sm">content_copy</span>
					Copy All
				</button>
			</div>

			<!-- Color Palette Grid -->
			<p class="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-4 flex items-center gap-2">
				<span class="material-symbols-outlined text-xs text-primary">colors</span>
				Color Palette
			</p>
			<div class="grid grid-cols-4 gap-3 mb-8">
				{#each Object.entries(schema.colors) as [name, hex]}
					<button
						class="group relative rounded-xl overflow-hidden border border-outline-variant/10 hover:border-primary/30 transition-all cursor-pointer"
						onclick={() => copyColor(name, hex)}
						title="Click to copy {hex}"
					>
						<div class="h-20" style="background-color: {hex}"></div>
						<div class="p-3 bg-surface-container-high">
							<div class="flex items-center justify-between">
								<span class="text-[10px] font-bold text-white">{name}</span>
								{#if copiedColor === name}
									<span class="material-symbols-outlined text-primary text-[12px]" style="font-variation-settings: 'FILL' 1;">check</span>
								{/if}
							</div>
							<span class="text-[10px] mono-font text-on-surface-variant">{hex}</span>
						</div>
					</button>
				{/each}
			</div>

			<!-- Typography -->
			<p class="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-4 flex items-center gap-2">
				<span class="material-symbols-outlined text-xs text-primary">text_fields</span>
				Typography
			</p>
			<div class="grid grid-cols-3 gap-3 mb-8">
				<div class="bg-surface-container-high rounded-xl border border-outline-variant/10 p-5">
					<p class="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Heading</p>
					<p class="text-2xl font-bold text-white mb-1" style="font-family: {schema.fonts.heading}">{schema.fonts.heading}</p>
					<p class="text-[11px] text-on-surface-variant" style="font-family: {schema.fonts.heading}">The quick brown fox jumps</p>
				</div>
				<div class="bg-surface-container-high rounded-xl border border-outline-variant/10 p-5">
					<p class="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Body</p>
					<p class="text-2xl font-bold text-white mb-1" style="font-family: {schema.fonts.body}">{schema.fonts.body}</p>
					<p class="text-[11px] text-on-surface-variant" style="font-family: {schema.fonts.body}">The quick brown fox jumps</p>
				</div>
				<div class="bg-surface-container-high rounded-xl border border-outline-variant/10 p-5">
					<p class="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Monospace</p>
					<p class="text-2xl font-bold text-white mb-1 mono-font">{schema.fonts.mono}</p>
					<p class="text-[11px] text-on-surface-variant mono-font">const x = {'{'} foo: 'bar' {'}'}</p>
				</div>
			</div>

			<!-- Border Radius -->
			<p class="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-4 flex items-center gap-2">
				<span class="material-symbols-outlined text-xs text-primary">rounded_corner</span>
				Border Radius — {schema.radius}
			</p>
			<div class="bg-surface-container-high rounded-xl border border-outline-variant/10 p-5 mb-8">
				<div class="flex items-center gap-6">
					{#each ['sharp', 'subtle', 'rounded', 'pill'] as r}
						<div class="flex flex-col items-center gap-2">
							<div class="w-12 h-12 border-2 {r === schema.radius ? 'border-primary bg-primary/10' : 'border-outline-variant/30'}" style="border-radius: {radiusMap[r]}"></div>
							<span class="text-[9px] {r === schema.radius ? 'text-primary font-bold' : 'text-on-surface-variant/50'}">{r}</span>
						</div>
					{/each}
				</div>
			</div>

			<!-- CSS Variables Export -->
			<p class="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-4 flex items-center gap-2">
				<span class="material-symbols-outlined text-xs text-primary">code</span>
				CSS Variables
			</p>
			<div class="bg-surface-container-lowest rounded-xl border border-outline-variant/5 p-5 mono-font text-[11px] text-primary-fixed-dim/80 overflow-x-auto">
				<span class="text-tertiary">/* {schema.name} — Design Tokens */</span><br/>
				<span class="text-on-surface">:root</span> {'{'}<br/>
				{#each Object.entries(schema.colors) as [name, hex], i}
					&nbsp;&nbsp;<span class="text-secondary">--color-{name}</span>: <span class="text-tertiary">{hex}</span>;{#if i === 0} <span class="text-on-surface-variant/40">/* {name} */</span>{/if}<br/>
				{/each}
				&nbsp;&nbsp;<span class="text-secondary">--font-heading</span>: <span class="text-tertiary">'{schema.fonts.heading}'</span>;<br/>
				&nbsp;&nbsp;<span class="text-secondary">--font-body</span>: <span class="text-tertiary">'{schema.fonts.body}'</span>;<br/>
				&nbsp;&nbsp;<span class="text-secondary">--font-mono</span>: <span class="text-tertiary">'{schema.fonts.mono}'</span>;<br/>
				&nbsp;&nbsp;<span class="text-secondary">--radius</span>: <span class="text-tertiary">{radiusMap[schema.radius]}</span>;<br/>
				{'}'}
			</div>
		</div>
	</div>
</section>
