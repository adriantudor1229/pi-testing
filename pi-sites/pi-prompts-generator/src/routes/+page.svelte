<script lang="ts">
	import { categories } from '$lib/data';

	function totalPrompts(): number {
		return categories.reduce((sum, c) => sum + c.prompts.length, 0);
	}
</script>

<svelte:head>
	<title>Pi Prompts Generator</title>
</svelte:head>

<!-- Full-width workspace -->
<section class="flex-1 flex flex-col bg-surface overflow-hidden relative">
	<!-- Content -->
	<div class="flex-1 overflow-y-auto p-8">
		<!-- Header -->
		<div class="mb-8">
			<h2 class="headline-font text-2xl font-bold text-white mb-1">Dashboard</h2>
			<p class="text-sm text-on-surface-variant">{categories.length} categories · {totalPrompts()} prompts</p>
		</div>

		<!-- Stats Cards -->
		<div class="grid grid-cols-3 gap-4 mb-8">
			<div class="bg-surface-container-high rounded-xl p-5 border border-outline-variant/5">
				<div class="flex items-center justify-between mb-3">
					<span class="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Categories</span>
					<span class="material-symbols-outlined text-primary text-lg">folder_special</span>
				</div>
				<p class="headline-font text-3xl font-bold text-white">{categories.length}</p>
				<div class="mt-3 h-1 bg-surface-variant rounded-full overflow-hidden">
					<div class="h-full w-full bg-gradient-to-r from-primary-dim to-primary rounded-full"></div>
				</div>
			</div>
			<div class="bg-surface-container-high rounded-xl p-5 border border-outline-variant/5">
				<div class="flex items-center justify-between mb-3">
					<span class="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Total Prompts</span>
					<span class="material-symbols-outlined text-tertiary text-lg">description</span>
				</div>
				<p class="headline-font text-3xl font-bold text-white">{totalPrompts()}</p>
				<div class="mt-3 h-1 bg-surface-variant rounded-full overflow-hidden">
					<div class="h-full w-full bg-gradient-to-r from-tertiary-dim to-tertiary rounded-full"></div>
				</div>
			</div>
			<div class="bg-surface-container-high rounded-xl p-5 border border-outline-variant/5">
				<div class="flex items-center justify-between mb-3">
					<span class="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Total Fields</span>
					<span class="material-symbols-outlined text-secondary text-lg">tune</span>
				</div>
				<p class="headline-font text-3xl font-bold text-white">{categories.reduce((s, c) => s + c.prompts.reduce((ps, p) => ps + p.fields.length, 0), 0)}</p>
				<div class="mt-3 h-1 bg-surface-variant rounded-full overflow-hidden">
					<div class="h-full w-full bg-gradient-to-r from-secondary-dim to-secondary rounded-full"></div>
				</div>
			</div>
		</div>

		<!-- Category Grid -->
		<p class="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-4">Prompt Categories</p>
		<div class="grid grid-cols-3 gap-4">
			{#each categories as category}
				<a href="/category/{category.id}" class="bg-surface-container-high rounded-xl border border-outline-variant/5 hover:border-primary/30 transition-all group cursor-pointer block overflow-hidden">
					<div class="p-5">
						<div class="flex items-center gap-3 mb-3">
							<span class="text-2xl">{category.icon}</span>
							<div>
								<h3 class="text-sm font-bold text-white group-hover:text-primary transition-colors">{category.name}</h3>
								<p class="text-[10px] text-on-surface-variant">{category.prompts.length} prompts</p>
							</div>
						</div>
						<p class="text-[11px] text-on-surface-variant leading-relaxed line-clamp-2">{category.description}</p>
					</div>
					<!-- Prompt list preview -->
					<div class="border-t border-outline-variant/5 px-5 py-3 space-y-1.5">
						{#each category.prompts.slice(0, 3) as prompt}
							<div class="flex items-center justify-between">
								<span class="text-[10px] text-on-surface-variant group-hover:text-on-surface transition-colors">{prompt.name}</span>
								<div class="flex gap-1">
									{#each prompt.tags.slice(0, 1) as tag}
										<span class="text-[8px] bg-secondary-container/20 text-secondary px-1 py-0.5 rounded-sm">{tag}</span>
									{/each}
								</div>
							</div>
						{/each}
						{#if category.prompts.length > 3}
							<span class="text-[9px] text-on-surface-variant/50">+{category.prompts.length - 3} more</span>
						{/if}
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>
