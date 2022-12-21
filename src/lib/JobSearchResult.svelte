<script lang="ts">
	import Job from '$lib/Job.svelte';
	import Sidebar from '$lib/Sidebar.svelte';
	import type { SavedJob } from './store/types';
	import Warning from './Warning.svelte';
	import { flip } from 'svelte/animate';

	export let jobList: SavedJob[];
	export let message = 'No job is found';
</script>

<div class="bg-slate-100 py-10 px-4 lg:px-8 flex flex-col lg:flex-row">
	<div class="w-1/3 lg:pr-8 lg:h-screen">
		<Sidebar />
	</div>
	<div class="w-2/3 space-y-8">
		{#if jobList.length > 0}
			{#each jobList as job (job.url)}
				<div animate:flip={{ duration: 400 }}>
					<Job thisJob={job} />
				</div>
			{/each}
		{:else}
			<Warning {message} />
		{/if}
	</div>
</div>
