<script lang="ts">
	import Card from './Card.svelte';
	import type { Job } from './store/types';

	export let popularJobs: Job[] = [];
	let isLoading = false;
</script>

<ul
	class="flex w-full snap-x snap-mandatory space-x-6 lg:space-x-10 overflow-x-auto pb-6 before:w-[30vw] before:shrink-0 after:w-[30vw] after:shrink-0"
>
	{#each popularJobs as job, index}
		<Card {job} />
	{/each}
</ul>
