<script lang="ts">
	import JobSearchResult from '$lib/JobSearchResult.svelte';
	import type { PageData } from './[jobLocation]/$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>Find a job!</title>
	<meta name="description" content="AI recommends a perfect job for you." />
	<meta name="keywords" content="Jabot, Clone, UI/UX" />
</svelte:head>

<JobSearchResult jobList={data.jobs} />
