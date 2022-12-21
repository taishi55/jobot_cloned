<script lang="ts">
	import Job from '$lib/Job.svelte';
	import type { SavedJob } from './store/types';
	import Warning from './Warning.svelte';
	import { flip } from 'svelte/animate';

	export let jobList: SavedJob[];
	export let message = 'No job is found';
</script>

{#if jobList.length > 0}
	{#each jobList as job (job.url)}
		<div animate:flip={{ duration: 400 }}>
			<Job thisJob={job} />
		</div>
	{/each}
{:else}
	<Warning {message} />
{/if}
