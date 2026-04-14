<script lang="ts">
	import { colorSchemas, type ColorSchema } from '$lib/schemas';

	let { onApply = (schema: ColorSchema) => {} } = $props();
	let isOpen = $state(false);
	let selectedId = $state<string | null>(null);
	let searchQuery = $state('');

	let filtered = $derived(
		searchQuery.trim()
			? colorSchemas.filter(
					(s) =>
						s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
						s.mood.toLowerCase().includes(searchQuery.toLowerCase()) ||
						s.description.toLowerCase().includes(searchQuery.toLowerCase())
				)
			: colorSchemas
	);

	function toggle() {
		isOpen = !isOpen;
	}

	function select(id: string) {
		selectedId = id;
	}

	function applySchema() {
		const schema = colorSchemas.find((s) => s.id === selectedId);
		if (schema) {
			onApply(schema);
			isOpen = false;
		}
	}

	function radiusLabel(r: string): string {
		return { sharp: '0px', subtle: '4px', rounded: '8px', pill: '16px' }[r] ?? '8px';
	}
</script>

<!-- Trigger Button -->
<button
	class="flex items-center gap-2 px-4 py-2 bg-surface-container-high border border-outline-variant/10 rounded-xl text-on-surface-variant hover:text-primary hover:border-primary/30 transition-all text-xs font-bold"
	onclick={toggle}
>
	<span class="material-symbols-outlined text-sm">palette</span>
	Color Schemas
	<span class="material-symbols-outlined text-xs">{isOpen ? 'expand_less' : 'expand_more'}</span>
</button>

{#if isOpen}
	<!-- Overlay -->
	<div class="fixed inset-0 z-[100]" onclick={() => (isOpen = false)}></div>

	<!-- Panel -->
	<div class="fixed inset-0 z-[110] flex items-center justify-center pointer-events-none">
		<div class="bg-surface-container-low border border-outline-variant/10 rounded-2xl shadow-2xl w-[720px] max-h-[80vh] flex flex-col pointer-events-auto">
			<!-- Header -->
			<div class="flex items-center justify-between p-5 border-b border-outline-variant/5">
				<div class="flex items-center gap-3">
					<span class="material-symbols-outlined text-primary">palette</span>
					<div>
						<h3 class="text-sm font-bold text-white headline-font">Color Schemas</h3>
						<p class="text-[10px] text-on-surface-variant">Select a design system palette to auto-fill prompt fields</p>
					</div>
				</div>
				<button class="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:text-white transition-all" onclick={() => (isOpen = false)}>
					<span class="material-symbols-outlined text-sm">close</span>
				</button>
			</div>

			<!-- Search -->
			<div class="px-5 pt-4">
				<div class="relative group">
					<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors text-sm">search</span>
					<input
						class="w-full bg-surface-container-high pl-10 pr-4 py-2.5 rounded-xl focus:outline-none focus:ring-1 ring-outline-variant/20 text-on-surface text-xs placeholder:text-on-surface-variant/50 transition-all"
						placeholder="Search by name, mood, or style..."
						type="text"
						bind:value={searchQuery}
					/>
				</div>
			</div>

			<!-- Grid -->
			<div class="flex-1 overflow-y-auto p-5">
				<div class="grid grid-cols-2 gap-3">
					{#each filtered as schema}
						<button
							class="p-4 rounded-xl border {selectedId === schema.id ? 'border-primary bg-primary/5 ring-1 ring-primary/20' : 'border-outline-variant/10 bg-surface-container-high hover:border-primary/30'} transition-all text-left cursor-pointer group"
							onclick={() => select(schema.id)}
						>
							<!-- Name + Mood -->
							<div class="flex items-center justify-between mb-3">
								<h4 class="text-xs font-bold text-white group-hover:text-primary transition-colors">{schema.name}</h4>
								{#if selectedId === schema.id}
									<span class="material-symbols-outlined text-primary text-sm" style="font-variation-settings: 'FILL' 1;">check_circle</span>
								{/if}
							</div>

							<!-- Color Swatches -->
							<div class="flex gap-1 mb-3">
								{#each Object.values(schema.colors).slice(0, 8) as color}
									<div class="w-6 h-6 rounded-md border border-white/10" style="background-color: {color}" title={color}></div>
								{/each}
								<div class="w-6 h-6 rounded-md border border-outline-variant/20 bg-surface-container flex items-center justify-center text-[8px] text-on-surface-variant">
									+{Object.keys(schema.colors).length - 8}
								</div>
							</div>

							<!-- Fonts -->
							<div class="flex items-center gap-2 mb-2">
								<span class="text-[9px] bg-secondary-container/20 text-secondary px-1.5 py-0.5 rounded-sm">{schema.fonts.heading}</span>
								<span class="text-[9px] bg-tertiary-container/10 text-tertiary px-1.5 py-0.5 rounded-sm">{schema.fonts.body}</span>
								<span class="text-[9px] bg-primary/10 text-primary px-1.5 py-0.5 rounded-sm mono-font">{schema.fonts.mono}</span>
							</div>

							<!-- Mood + Radius -->
							<div class="flex items-center justify-between">
								<span class="text-[9px] text-on-surface-variant">{schema.mood}</span>
								<div class="flex items-center gap-1">
									<div class="w-3 h-3 border border-outline-variant/30" style="border-radius: {radiusLabel(schema.radius)}"></div>
									<span class="text-[8px] text-on-surface-variant/50">{schema.radius}</span>
								</div>
							</div>
						</button>
					{/each}
				</div>
			</div>

			<!-- Footer -->
			{#if selectedId}
				{@const selected = colorSchemas.find((s) => s.id === selectedId)}
				<div class="p-5 border-t border-outline-variant/5 bg-surface-container/30">
					<div class="flex items-center justify-between">
						<div class="flex items-center gap-3">
							<!-- Preview swatch row -->
							<div class="flex gap-0.5">
								<div class="w-4 h-8 rounded-l-md" style="background: {selected?.colors.primary}"></div>
								<div class="w-4 h-8" style="background: {selected?.colors.secondary}"></div>
								<div class="w-4 h-8" style="background: {selected?.colors.accent}"></div>
								<div class="w-4 h-8" style="background: {selected?.colors.background}"></div>
								<div class="w-4 h-8" style="background: {selected?.colors.surface}"></div>
								<div class="w-4 h-8" style="background: {selected?.colors.text}"></div>
								<div class="w-4 h-8 rounded-r-md" style="background: {selected?.colors.error}"></div>
							</div>
							<div>
								<p class="text-xs font-bold text-white">{selected?.name}</p>
								<p class="text-[9px] text-on-surface-variant">{selected?.fonts.heading} · {selected?.fonts.body} · {selected?.radius}</p>
							</div>
						</div>
						<button
							class="px-5 py-2 bg-gradient-to-r from-primary to-primary-dim text-on-primary text-xs font-bold rounded-lg flex items-center gap-2 hover:opacity-90 active:scale-95 transition-all"
							onclick={applySchema}
						>
							<span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">check</span>
							Apply Schema
						</button>
					</div>
				</div>
			{/if}
		</div>
	</div>
{/if}
