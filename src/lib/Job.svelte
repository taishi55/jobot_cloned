<script lang="ts">
	import Bookmark from './Bookmark.svelte';
	import type { SavedJob } from './store/types';

	export let thisJob: SavedJob;
</script>

<div
	class=" rounded-lg shadow-xl shadow-slate-300 space-y-3 px-6 pt-6 pb-4 bg-white block relative"
>
	<span class="flex items-start justify-between space-x-3 lg:space-x-5">
		<a href="/detail/{thisJob.url.split('/').at(-1)}" class="text-xl font-semibold text-sky-600">
			<span class="hover:underline">{thisJob.title}</span>
		</a>
		<Bookmark {thisJob} />
	</span>
	<p class="font-light">{thisJob.description}</p>
	<div class="flex flex-wrap">
		<div class="pill">
			{#if thisJob.isRemote}
				<i class="fas fa-laptop-house" />
			{:else}
				<i class="fas fa-car-building" />
			{/if}
			<span>{thisJob.isRemote ? 'REMOTE' : 'ONSITE'}</span>
		</div>
		<div class="pill">
			<i class="fas fa-map-marker-alt" />
			<span>{thisJob.location}</span>
		</div>
		<div class="pill">
			<i class="fas fa-sack-dollar" />
			<span>{thisJob.salary}</span>
		</div>
	</div>
</div>

<style lang="postcss" scoped>
	.pill {
		@apply mr-2 mb-2 px-4 py-1 text-sm font-semibold bg-slate-200 rounded-full text-slate-700 w-fit flex items-center space-x-3;
	}
</style>
