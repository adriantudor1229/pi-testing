<script lang="ts">
	let { children } = $props();
</script>

<!-- SideNavBar -->
<aside class="fixed left-0 top-0 h-screen w-64 flex flex-col py-8 px-4 bg-surface-container-low z-50 font-['Space_Grotesk'] tracking-tight">
	<div class="mb-10 px-2 flex items-center gap-3">
		<div class="w-8 h-8 bg-gradient-to-br from-primary to-primary-dim rounded-lg flex items-center justify-center">
			<span class="material-symbols-outlined text-on-primary text-xl" style="font-variation-settings: 'FILL' 1;">bolt</span>
		</div>
		<div>
			<h1 class="text-2xl font-bold tracking-tighter text-primary">Pi</h1>
			<p class="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant leading-none">Prompts Generator</p>
		</div>
	</div>

	<button class="mb-8 w-full py-3 bg-gradient-to-r from-primary to-primary-dim text-on-primary font-bold rounded-xl flex items-center justify-center gap-2 hover:scale-[0.98] transition-transform">
		<span class="material-symbols-outlined text-sm">add</span>
		New Prompt
	</button>

	<nav class="flex-1 space-y-2">
		<a href="/" class="flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:bg-surface-container transition-colors rounded-xl group">
			<span class="material-symbols-outlined group-hover:text-primary transition-colors">dashboard</span>
			<span class="text-sm font-medium">Dashboard</span>
		</a>
		<a href="/" class="flex items-center gap-4 px-4 py-3 text-primary font-bold bg-surface-container rounded-xl group">
			<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">folder_special</span>
			<span class="text-sm font-medium">Library</span>
		</a>
	</nav>

	<div class="mt-auto border-t border-outline-variant/10 pt-4">
		<a href="/" class="flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:bg-surface-container transition-colors rounded-xl group">
			<span class="material-symbols-outlined group-hover:text-primary transition-colors">help_outline</span>
			<span class="text-sm font-medium">About</span>
		</a>
	</div>
</aside>

<!-- Main Content Wrapper -->
<div class="ml-64 h-screen flex flex-col">
	<!-- TopNavBar -->
	<header class="h-16 flex justify-between items-center px-8 sticky top-0 z-40 bg-surface/80 backdrop-blur-xl shadow-[0_0_40px_rgba(163,166,255,0.06)] font-['Inter'] text-sm">
		<div class="flex items-center gap-6 flex-1">
			<div class="relative w-full max-w-md group">
				<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors text-sm">search</span>
				<input class="bg-surface-container-high w-full pl-10 pr-4 py-2 rounded-xl focus:outline-none focus:ring-1 ring-outline-variant/20 text-on-surface text-xs placeholder:text-on-surface-variant/50 transition-all" placeholder="Search prompts, templates, or categories..." type="text" />
			</div>
		</div>
		<div class="flex items-center gap-4">
			<button class="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:text-white transition-all">
				<span class="material-symbols-outlined">notifications</span>
			</button>
			<button class="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:text-white transition-all">
				<span class="material-symbols-outlined">history</span>
			</button>
			<div class="h-8 w-px bg-outline-variant/30 mx-2"></div>
			<div class="flex items-center gap-3 pl-2">
				<div class="text-right hidden lg:block">
					<p class="text-[11px] font-bold text-white leading-tight">Pi Prompts</p>
					<p class="text-[9px] text-primary uppercase tracking-widest">v1.0</p>
				</div>
				<div class="w-9 h-9 rounded-full ring-1 ring-primary/20 bg-gradient-to-br from-primary to-primary-dim flex items-center justify-center">
					<span class="material-symbols-outlined text-on-primary text-sm" style="font-variation-settings: 'FILL' 1;">bolt</span>
				</div>
			</div>
		</div>
	</header>

	<!-- Content Workspace -->
	<main class="flex-1 flex overflow-hidden">
		{@render children()}
	</main>
</div>

<!-- Ambient Glow -->
<div class="fixed top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] pointer-events-none rounded-full"></div>
<div class="fixed bottom-[-5%] left-[-5%] w-[30%] h-[30%] bg-secondary/5 blur-[100px] pointer-events-none rounded-full"></div>
