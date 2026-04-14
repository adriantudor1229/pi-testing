<script lang="ts">
	let { data } = $props();
	const isFE = data.category.id === 'frontend-design';
</script>

<svelte:head>
	<title>{data.category.name} — Pi Prompts</title>
</svelte:head>

<!-- Left Pane: Prompt List -->
<section class="w-80 bg-surface-container-low flex flex-col border-r border-outline-variant/5">
	<div class="p-6 flex-1 overflow-y-auto">
		<a href="/" class="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors mb-5">
			<span class="material-symbols-outlined text-sm">arrow_back</span>
			<span class="text-xs">Back to Dashboard</span>
		</a>

		<div class="flex items-center gap-3 mb-2">
			<span class="text-3xl">{data.category.icon}</span>
			<div>
				<h2 class="headline-font text-lg font-bold text-white">{data.category.name}</h2>
				<p class="text-[10px] text-on-surface-variant">{data.category.prompts.length} prompts</p>
			</div>
		</div>
		<p class="text-[11px] text-on-surface-variant leading-relaxed mb-6">{data.category.description}</p>

		<p class="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-3">Prompts</p>
		<div class="space-y-2">
			{#each data.category.prompts as prompt, i}
				<a
					href="/category/{data.category.id}/{prompt.id}"
					class="p-3 rounded-xl bg-surface-container-high hover:bg-surface-variant cursor-pointer transition-all group block border-l-2 {i === 0 ? 'border-primary' : 'border-transparent hover:border-primary/50'}"
				>
					<h3 class="text-xs font-bold text-white mb-1 group-hover:text-primary transition-colors">{prompt.name}</h3>
					<p class="text-[10px] text-on-surface-variant line-clamp-2 mb-2">{prompt.description}</p>
					<div class="flex items-center gap-2">
						{#each prompt.tags as tag}
							<span class="text-[8px] bg-secondary-container/20 text-secondary px-1.5 py-0.5 rounded-sm">{tag}</span>
						{/each}
						<span class="text-[9px] text-on-surface-variant/50 ml-auto">{prompt.fields.length} fields</span>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- Right Pane: Category Overview -->
<section class="flex-1 flex flex-col bg-surface overflow-hidden relative">
	<div class="flex-1 overflow-y-auto p-8">
		<div class="flex items-center gap-4 mb-6">
			<span class="text-5xl">{data.category.icon}</span>
			<div>
				<h2 class="headline-font text-2xl font-bold text-white">{data.category.name}</h2>
				<p class="text-sm text-on-surface-variant">{data.category.description}</p>
			</div>
		</div>

		<!-- FE-only: Schema Suggestion Banner -->
		{#if isFE}
			<div class="mb-8 bg-surface-container-high rounded-2xl border border-outline-variant/5 p-6">
				<div class="flex items-center justify-between mb-4">
					<div class="flex items-center gap-3">
						<div class="w-10 h-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center">
							<span class="material-symbols-outlined text-primary">palette</span>
						</div>
						<div>
							<h3 class="text-sm font-bold text-white">Design System Schemas</h3>
							<p class="text-[10px] text-on-surface-variant">Pre-built color palettes & font combos to auto-fill your prompts</p>
						</div>
					</div>
					<a href="/category/{data.category.id}/schemas" class="px-4 py-2 bg-gradient-to-r from-primary to-primary-dim text-on-primary text-[11px] font-bold rounded-lg flex items-center gap-2 hover:opacity-90 active:scale-95 transition-all">
						<span class="material-symbols-outlined text-sm">grid_view</span>
						Browse Schemas
					</a>
				</div>
				<!-- Mini preview of first 5 schemas -->
				<div class="flex gap-3 overflow-x-auto pb-1">
					{#each ['#a3a6ff,#a28efc,#ffa5d9,#0e0e0e,#1a1a1a', '#38bdf8,#06b6d4,#22d3ee,#0c1222,#1e293b', '#fb923c,#f97316,#fbbf24,#1c1917,#292524', '#34d399,#10b981,#6ee7b7,#f8fafc,#ffffff', '#f472b6,#c084fc,#22d3ee,#0a0a0a,#171717'] as row, i}
						{@const colors = row.split(',')}
						<div class="flex-shrink-0 flex gap-0.5 cursor-pointer group">
							{#each colors as color, j}
								<div class="w-5 h-8 {j === 0 ? 'rounded-l-md' : ''} {j === colors.length - 1 ? 'rounded-r-md' : ''} border border-white/5 group-hover:border-primary/30 transition-all" style="background: {color}"></div>
							{/each}
						</div>
					{/each}
				</div>
			</div>
		{/if}

		<div class="grid grid-cols-2 gap-4">
			{#each data.category.prompts as prompt}
				<a
					href="/category/{data.category.id}/{prompt.id}"
					class="bg-surface-container-high rounded-xl border border-outline-variant/5 hover:border-primary/30 transition-all group cursor-pointer block"
				>
					<div class="p-5">
						<div class="flex items-center justify-between mb-2">
							<h3 class="text-sm font-bold text-white group-hover:text-primary transition-colors">{prompt.name}</h3>
							<span class="material-symbols-outlined text-sm text-on-surface-variant group-hover:text-primary transition-all">arrow_forward</span>
						</div>
						<p class="text-[11px] text-on-surface-variant leading-relaxed line-clamp-2 mb-3">{prompt.description}</p>
						<div class="flex items-center gap-2 flex-wrap">
							{#each prompt.tags as tag}
								<span class="text-[8px] bg-secondary-container/20 text-secondary px-1.5 py-0.5 rounded-sm">{tag}</span>
							{/each}
							<span class="text-[9px] text-on-surface-variant/50 ml-auto">{prompt.fields.length} fields</span>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>
