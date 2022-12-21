<script lang="ts">
	import { browser } from '$app/environment';
	import Format from '$lib/Format.svelte';
	import JobSearchResult from '$lib/JobSearchResult.svelte';
	import { markedJobsInfo, storeJobName } from '$lib/store/bookmark';

	// get a list of bookmarked job id
	if (browser) {
		const cachedData = localStorage.getItem(storeJobName);
		if (cachedData) {
			markedJobsInfo.set(JSON.parse(cachedData));
		}
	}

	const message = 'No job is saved yet. Bookmark your favorite jobs!';
</script>

<svelte:head>
	<title>Save your favorite jobs!</title>
	<meta name="description" content="AI recommends a perfect job for you." />
	<meta name="keywords" content="Jabot, Clone, UI/UX" />
</svelte:head>

<Format>
	<JobSearchResult jobList={$markedJobsInfo} {message} />
</Format>
