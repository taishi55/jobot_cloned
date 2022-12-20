<script lang="ts">
	import Card from './Card.svelte';
	import type { Job } from './store/types';

	export let popularJobs: Job[] = [];
</script>

<div class=" w-full mx-auto pb-48">
	<div class=" text-4xl font-black text-center py-10">Choose your occupation!</div>
	<Card {popularJobs} />
</div>
