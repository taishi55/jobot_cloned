<script lang="ts">
	import Sidebar from '$lib/Sidebar.svelte';
</script>

<div class="bg-slate-100 py-10 px-4 lg:px-8 flex flex-col lg:flex-row">
	<div class="lg:w-1/3 lg:pr-8 lg:h-screen lg:sticky lg:top-[6.8rem]">
		<Sidebar />
	</div>
	<div class="lg:w-2/3 space-y-8">
		<slot />
	</div>
</div>
