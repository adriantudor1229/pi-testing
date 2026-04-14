<script lang="ts">
	import SchemaSelector from '$lib/components/SchemaSelector.svelte';
	import { type ColorSchema } from '$lib/schemas';

	let { data } = $props();

	let fieldValues: Record<string, string> = $state({});
	let copied = $state(false);
	let showPreview = $state(true);

	const isFE = data.category.id === 'frontend-design';

	// Initialize field values
	for (const field of data.prompt.fields) {
		fieldValues[field.key] = '';
	}

	function getGeneratedPrompt(): string {
		let result = data.prompt.template;
		for (const field of data.prompt.fields) {
			const value = fieldValues[field.key] || `{{${field.key}}}`;
			result = result.replaceAll(`{{${field.key}}}`, value);
		}
		return result;
	}

	function copyPrompt() {
		const text = getGeneratedPrompt();
		navigator.clipboard.writeText(text).then(() => {
			copied = true;
			setTimeout(() => (copied = false), 2000);
		});
	}

	function resetFields() {
		for (const field of data.prompt.fields) {
			fieldValues[field.key] = '';
		}
	}

	function filledCount(): number {
		return data.prompt.fields.filter((f) => fieldValues[f.key]?.trim()).length;
	}

	function applySchema(schema: ColorSchema) {
		// Map schema colors/fonts to matching field keys
		const mappings: Record<string, Record<string, string>> = {
			bg_color: { 'background': schema.colors.background },
			primary_accent: { 'primary': schema.colors.primary },
			accent_colors: { 'primary': schema.colors.primary, 'secondary': schema.colors.secondary },
			typeface: { 'heading': schema.fonts.heading },
			aesthetic_style: {},
			brand_mood: {},
		};

		// Try to auto-fill matching fields
		for (const field of data.prompt.fields) {
			const key = field.key;
			if (key === 'bg_color') fieldValues[key] = schema.colors.background;
			else if (key === 'primary_accent') fieldValues[key] = schema.colors.primary;
			else if (key === 'accent_colors') fieldValues[key] = `${schema.colors.primary} and ${schema.colors.secondary}`;
			else if (key === 'typeface') fieldValues[key] = schema.fonts.heading;
			else if (key === 'aesthetic_style') fieldValues[key] = schema.name;
			else if (key === 'brand_mood') fieldValues[key] = schema.mood;
			else if (key === 'primary_color') fieldValues[key] = schema.colors.primary;
			else if (key === 'variable_style') fieldValues[key] = `${schema.colors.primary} pill badges`;
			else if (key === 'variable_delimiter') fieldValues[key] = '{{variable}}';
			else if (key === 'designSystem') fieldValues[key] = schema.name;
			else if (key === 'target_platform') fieldValues[key] = 'web app';
			else if (key === 'left_width') fieldValues[key] = '320';
			else if (key === 'right_width') fieldValues[key] = '280';
			else if (key === 'output_height') fieldValues[key] = '256';
			else if (key === 'primary_color') fieldValues[key] = schema.colors.primary;
			else if (key === 'mono_font') fieldValues[key] = schema.fonts.mono;
			else if (key === 'heading_font') fieldValues[key] = schema.fonts.heading;
			else if (key === 'techStack') fieldValues[key] = `${schema.fonts.heading} + Tailwind`;
		}
	}

	function isFilled(key: string): boolean {
		return !!fieldValues[key]?.trim();
	}

	function lineCount(): number {
		return getGeneratedPrompt().split('\n').length;
	}

	const promptLines = $derived(getGeneratedPrompt().split('\n'));
</script>

<svelte:head>
	<title>{data.prompt.name} — {data.category.name} — Pi Prompts</title>
</svelte:head>

<!-- Left Pane: Prompt Navigation -->
<section class="w-80 bg-surface-container-low flex flex-col border-r border-outline-variant/5">
	<div class="p-6 flex-1 overflow-y-auto">
		<a href="/category/{data.category.id}" class="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors mb-5">
			<span class="material-symbols-outlined text-sm">arrow_back</span>
			<span class="text-xs">Back to {data.category.name}</span>
		</a>

		<div class="flex items-center gap-3 mb-6">
			<span class="text-2xl">{data.category.icon}</span>
			<div>
				<h2 class="headline-font text-sm font-bold text-white">{data.category.name}</h2>
				<p class="text-[10px] text-on-surface-variant">{data.category.prompts.length} prompts</p>
			</div>
		</div>

		<p class="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-3">All Prompts</p>
		<div class="space-y-2">
			{#each data.category.prompts as prompt}
				<a
					href="/category/{data.category.id}/{prompt.id}"
					class="p-3 rounded-xl {prompt.id === data.prompt.id ? 'bg-surface-variant border-l-2 border-primary' : 'bg-surface-container-high hover:bg-surface-variant border-l-2 border-transparent hover:border-primary/50'} cursor-pointer transition-all group block"
				>
					<h3 class="text-xs font-bold {prompt.id === data.prompt.id ? 'text-primary' : 'text-white group-hover:text-primary transition-colors'} mb-1">{prompt.name}</h3>
					<p class="text-[10px] text-on-surface-variant line-clamp-1">{prompt.description}</p>
					{#if prompt.id === data.prompt.id}
						<div class="flex items-center gap-2 mt-2">
							{#each prompt.tags.slice(0, 2) as tag}
								<span class="text-[8px] bg-primary/10 text-primary px-1.5 py-0.5 rounded-sm">{tag}</span>
							{/each}
						</div>
					{/if}
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- Right Pane: Robust Editor Split -->
<section class="flex-1 flex flex-col bg-surface overflow-hidden relative">
	<!-- Editor Header -->
	<div class="h-14 flex items-center justify-between px-6 border-b border-outline-variant/5 bg-surface-container-lowest/30">
		<div class="flex items-center gap-4">
			<span class="material-symbols-outlined text-primary">edit_note</span>
			<div class="flex items-baseline gap-2">
				<h2 class="text-sm font-bold text-white">{data.prompt.name}</h2>
				<span class="text-[10px] text-on-surface-variant">{filledCount() > 0 ? 'Editing' : 'Ready'}</span>
			</div>
		</div>
		<div class="flex items-center gap-3">
			{#if isFE}
				<SchemaSelector onApply={applySchema} />
			{/if}
			<button
				class="px-3 py-1.5 text-[11px] font-bold text-on-surface-variant hover:text-white flex items-center gap-2 transition-all"
				onclick={resetFields}
			>
				<span class="material-symbols-outlined text-sm">refresh</span> Reset
			</button>
			<button
				class="px-4 py-1.5 bg-gradient-to-r from-primary to-primary-dim text-on-primary text-[11px] font-bold rounded-lg flex items-center gap-2 hover:opacity-90 active:scale-95 transition-all"
				onclick={copyPrompt}
			>
				<span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">{copied ? 'check' : 'content_copy'}</span>
				{copied ? 'Copied!' : 'Copy Prompt'}
			</button>
		</div>
	</div>

	<!-- Main Editor Body (Split Horizontal) -->
	<div class="flex-1 flex">
		<!-- Code Editor Side -->
		<div class="flex-[3] flex flex-col border-r border-outline-variant/5">
			<div class="flex-1 relative overflow-hidden bg-surface-container-lowest">
				{#if showPreview}
					<!-- Line Numbers -->
					<div class="absolute left-0 top-0 h-full w-10 flex flex-col items-center py-4 bg-surface-container-low text-[10px] text-on-surface-variant/30 mono-font select-none overflow-hidden">
						{#each promptLines as _, i}
							<span>{(i + 1).toString().padStart(2, '0')}</span>
						{/each}
					</div>
					<!-- Code Content -->
					<div class="absolute inset-0 ml-10 p-4 mono-font text-xs leading-relaxed overflow-y-auto">
						{#each promptLines as line}
							{#if line.startsWith('# ')}
								<span class="text-tertiary">{line.slice(0, 2)}</span><span class="text-tertiary font-bold">{line.slice(2)}</span><br/>
							{:else if line.startsWith('## ')}
								<span class="text-tertiary">{line.slice(0, 3)}</span><span class="text-tertiary font-bold">{line.slice(3)}</span><br/>
							{:else if line.startsWith('**') && line.endsWith('**')}
								<span class="text-white font-bold">{line}</span><br/>
							{:else if line.startsWith('- ')}
								<span class="text-on-surface-variant">{line}</span><br/>
							{:else if line.startsWith('```')}
								<span class="text-primary/60">{line}</span><br/>
							{:else if line.trim() === ''}
								<br/>
							{:else}
								{@html line.replace(/\{\{(\w+)\}\}/g, '<span class="text-secondary bg-secondary-container/30 px-1 rounded-sm">{{$1}}</span>')}<br/>
							{/if}
						{/each}
						<span class="text-primary-fixed-dim animate-pulse">|</span>
					</div>
					<!-- Ghost border visual -->
					<div class="absolute bottom-0 left-10 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
				{:else}
					<div class="absolute inset-0 flex items-center justify-center">
						<p class="text-on-surface-variant/30 text-xs">Preview hidden</p>
					</div>
				{/if}
			</div>

			<!-- Output/Results Panel -->
			<div class="h-56 bg-surface-container-low flex flex-col p-4">
				<div class="flex items-center justify-between mb-3">
					<div class="flex items-center gap-2">
						<span class="material-symbols-outlined text-xs text-on-surface-variant">terminal</span>
						<span class="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Execution Output</span>
					</div>
					<div class="flex gap-4">
						<span class="text-[10px] text-on-surface-variant">Fields: <span class="text-primary">{filledCount()}/{data.prompt.fields.length}</span></span>
						<span class="text-[10px] text-on-surface-variant">Chars: <span class="text-tertiary">{getGeneratedPrompt().length.toLocaleString()}</span></span>
						<span class="text-[10px] text-on-surface-variant">Lines: <span class="text-tertiary">{lineCount()}</span></span>
					</div>
				</div>
				<div class="flex-1 bg-surface-container-lowest rounded-xl p-4 mono-font text-[11px] text-primary-fixed-dim/80 overflow-y-auto border border-outline-variant/5">
					<span class="text-on-surface-variant/40">// Generated prompt ready for clipboard</span><br/>
					<span class="text-on-surface-variant/40">// Category: </span><span class="text-tertiary">{data.category.name}</span><br/>
					<span class="text-on-surface-variant/40">// Template: </span><span class="text-tertiary">{data.prompt.name}</span><br/><br/>
					{#if filledCount() === data.prompt.fields.length}
						<span class="text-primary">&#10003;</span> <span class="text-primary">All {data.prompt.fields.length} fields filled — prompt is complete</span><br/>
						<span class="text-primary">&#10003;</span> <span class="text-primary">Ready to copy ({getGeneratedPrompt().length.toLocaleString()} chars)</span>
					{:else}
						<span class="text-tertiary">&#9679;</span> <span class="text-on-surface-variant">{filledCount()}/{data.prompt.fields.length} fields filled</span><br/>
						<span class="text-tertiary">&#9679;</span> <span class="text-on-surface-variant">Fill all fields for best results</span>
					{/if}
				</div>
			</div>
		</div>

		<!-- Configuration Controls Side -->
		<div class="flex-1 bg-surface-container-low/50 p-6 space-y-6 overflow-y-auto">
			<h3 class="headline-font text-xs font-bold text-white uppercase tracking-widest border-b border-outline-variant/10 pb-3 flex items-center gap-2">
				<span class="material-symbols-outlined text-sm text-primary">tune</span>
				Prompt Fields
			</h3>

			<div class="space-y-5">
				{#each data.prompt.fields as field}
					<div class="space-y-2">
						<div class="flex justify-between items-center">
							<label class="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest" for={field.key}>{field.label}</label>
							{#if isFilled(field.key)}
								<span class="text-[9px] text-primary flex items-center gap-1">
									<span class="material-symbols-outlined text-[10px]" style="font-variation-settings: 'FILL' 1;">check_circle</span>
									set
								</span>
							{/if}
						</div>
						{#if field.placeholder.length > 60}
							<textarea
								id={field.key}
								class="w-full bg-surface-container-lowest border border-outline-variant/10 rounded-xl p-3 text-on-surface text-xs placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/30 transition-all resize-vertical mono-font min-h-[60px]"
								placeholder={field.placeholder}
								bind:value={fieldValues[field.key]}
								rows="3"
							></textarea>
						{:else}
							<input
								id={field.key}
								class="w-full bg-surface-container-lowest border border-outline-variant/10 rounded-xl p-3 text-on-surface text-xs placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/30 transition-all mono-font"
								type="text"
								placeholder={field.placeholder}
								bind:value={fieldValues[field.key]}
							/>
						{/if}
					</div>
				{/each}
			</div>

			<!-- Progress -->
			<div class="space-y-3">
				<div class="flex justify-between items-center">
					<span class="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Completion</span>
					<span class="text-xs mono-font text-primary">{Math.round((filledCount() / data.prompt.fields.length) * 100)}%</span>
				</div>
				<div class="relative h-1.5 w-full bg-surface-variant rounded-full">
					<div class="absolute h-full bg-gradient-to-r from-primary-dim to-primary rounded-full transition-all duration-300" style="width: {(filledCount() / data.prompt.fields.length) * 100}%"></div>
				</div>
				<p class="text-[9px] text-on-surface-variant/60 leading-relaxed italic">Fill in all fields for the best prompt quality.</p>
			</div>

			<!-- Detected Variables -->
			<div class="pt-2 space-y-3">
				<label class="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest flex items-center gap-2">
					<span class="material-symbols-outlined text-xs">code</span>
					Template Variables
				</label>
				<div class="space-y-1.5">
					{#each data.prompt.fields as field}
						<div class="flex items-center justify-between p-2 bg-surface-container-lowest border border-outline-variant/10 rounded-lg">
							<span class="text-[10px] font-mono text-secondary">{'{{'}{field.key}{'}}'}</span>
							<span class="text-[9px] {isFilled(field.key) ? 'text-primary' : 'text-on-surface-variant/40'}">
								{isFilled(field.key) ? '✓ Set' : 'Empty'}
							</span>
						</div>
					{/each}
				</div>
			</div>

			<!-- Copy Action -->
			<div class="pt-2">
				<button
					class="w-full py-3 bg-gradient-to-r from-primary to-primary-dim text-on-primary text-xs font-bold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all"
					onclick={copyPrompt}
				>
					<span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">{copied ? 'check' : 'content_copy'}</span>
					{copied ? 'Copied to Clipboard!' : 'Copy Generated Prompt'}
				</button>
			</div>

			<!-- Version History -->
			<div class="mt-6 bg-surface-variant/30 rounded-2xl p-4 border border-outline-variant/5">
				<div class="flex items-center gap-3 mb-3">
					<span class="material-symbols-outlined text-xs text-primary">info</span>
					<span class="text-[10px] font-bold text-white uppercase tracking-widest">Details</span>
				</div>
				<ul class="space-y-2">
					<li class="text-[10px] flex justify-between">
						<span class="text-on-surface-variant">Category</span>
						<span class="text-primary">{data.category.icon} {data.category.name}</span>
					</li>
					<li class="text-[10px] flex justify-between">
						<span class="text-on-surface-variant">Fields</span>
						<span class="text-primary">{data.prompt.fields.length}</span>
					</li>
					<li class="text-[10px] flex justify-between">
						<span class="text-on-surface-variant">Template Size</span>
						<span class="text-primary-fixed-dim">{data.prompt.template.length} chars</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>
