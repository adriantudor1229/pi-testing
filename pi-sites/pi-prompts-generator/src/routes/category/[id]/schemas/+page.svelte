<script lang="ts">
	import { colorSchemas, type ColorSchema } from '$lib/schemas';
</script>

<svelte:head>
	<title>Color Schemas — Pi Prompts</title>
</svelte:head>

<!-- Full workspace -->
<section class="flex-1 flex flex-col bg-surface overflow-hidden relative">
	<div class="flex-1 overflow-y-auto p-8">
		<!-- Header -->
		<div class="flex items-center justify-between mb-8">
			<div>
				<a href="/category/frontend-design" class="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors mb-3">
					<span class="material-symbols-outlined text-sm">arrow_back</span>
					<span class="text-xs">Back to Frontend Design</span>
				</a>
				<div class="flex items-center gap-4">
					<div class="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
						<span class="material-symbols-outlined text-primary text-2xl">palette</span>
					</div>
					<div>
						<h2 class="headline-font text-2xl font-bold text-white">Color Schemas</h2>
						<p class="text-sm text-on-surface-variant">Pre-built design system palettes to jumpstart your prompts</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Schema Cards -->
		<div class="grid grid-cols-2 gap-5">
			{#each colorSchemas as schema}
				<a
					href="/category/frontend-design/schemas/{schema.id}"
					class="bg-surface-container-high rounded-2xl border border-outline-variant/5 hover:border-primary/30 transition-all group cursor-pointer block overflow-hidden"
				>
					<!-- Color strip -->
					<div class="flex h-16">
						{#each [schema.colors.primary, schema.colors.secondary, schema.colors.accent, schema.colors.background, schema.colors.surface, schema.colors.surfaceAlt, schema.colors.text, schema.colors.error] as color, i}
							<div class="flex-1 {i === 0 ? 'group-hover:first:rounded-tl-xl' : ''}" style="background: {color}"></div>
						{/each}
					</div>

					<!-- Content -->
					<div class="p-5">
						<div class="flex items-center justify-between mb-2">
							<h3 class="text-sm font-bold text-white group-hover:text-primary transition-colors">{schema.name}</h3>
							<span class="material-symbols-outlined text-sm text-on-surface-variant group-hover:text-primary transition-all">arrow_forward</span>
						</div>
						<p class="text-[11px] text-on-surface-variant leading-relaxed mb-4">{schema.description}</p>

						<!-- All Colors -->
						<p class="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Colors</p>
						<div class="flex flex-wrap gap-1.5 mb-4">
							{#each Object.entries(schema.colors) as [name, hex]}
								<div class="flex items-center gap-1.5 bg-surface-container-lowest/50 rounded-lg px-2 py-1">
									<div class="w-3 h-3 rounded-sm border border-white/10" style="background: {hex}"></div>
									<span class="text-[8px] mono-font text-on-surface-variant">{name}</span>
								</div>
							{/each}
						</div>

						<!-- Fonts + Radius -->
						<div class="flex items-center gap-2 flex-wrap">
							<span class="text-[9px] bg-secondary-container/20 text-secondary px-2 py-1 rounded-lg">Aa {schema.fonts.heading}</span>
							<span class="text-[9px] bg-tertiary-container/10 text-tertiary px-2 py-1 rounded-lg">Aa {schema.fonts.body}</span>
							<span class="text-[9px] bg-primary/10 text-primary px-2 py-1 rounded-lg mono-font">{schema.fonts.mono}</span>
							<div class="ml-auto flex items-center gap-1.5">
								<div class="w-4 h-4 border border-outline-variant/30" style="border-radius: {({'sharp':'0px','subtle':'4px','rounded':'8px','pill':'16px'})[schema.radius]}"></div>
								<span class="text-[9px] text-on-surface-variant/50">{schema.radius}</span>
							</div>
						</div>

						<!-- Mood -->
						<div class="mt-3 pt-3 border-t border-outline-variant/5">
							<span class="text-[9px] text-on-surface-variant">{schema.mood}</span>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>
