<script lang="ts">
	import { browser } from '$app/environment';
	import { markedJobsInfo, storeJobName } from '$lib/store/bookmark';
	import { scale } from 'svelte/transition';
	import type { SavedJob } from './store/types';

	export let thisJob: SavedJob;

	let isBookmarked = false;

	const getJobId = (job: SavedJob) => {
		return job.url.split('/').at(-1);
	};

	// get a list of bookmarked job id
	if (browser) {
		const cachedData = localStorage.getItem(storeJobName);
		if (cachedData) {
			markedJobsInfo.set(JSON.parse(cachedData));
			isBookmarked = $markedJobsInfo?.some((job: SavedJob) => getJobId(job) === getJobId(thisJob));
		}
	}

	const markJob = () => {
		isBookmarked = true;
		markedJobsInfo.set([...$markedJobsInfo, thisJob]);
		localStorage.setItem(storeJobName, JSON.stringify($markedJobsInfo));
	};

	const unmarkJob = () => {
		isBookmarked = false;
		markedJobsInfo.set(
			$markedJobsInfo.filter((job: SavedJob) => getJobId(job) !== getJobId(thisJob))
		);
		localStorage.setItem(storeJobName, JSON.stringify($markedJobsInfo));
	};
</script>

{#if isBookmarked}
	<button in:scale on:click={unmarkJob}>
		<i class="fas fa-bookmark" />
	</button>
{:else}
	<button in:scale on:click={markJob}>
		<i class="far fa-bookmark" />
	</button>
{/if}

<style lang="postcss" scoped>
	button {
		@apply text-2xl text-yellow-500;
	}
</style>
