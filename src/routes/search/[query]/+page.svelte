<script lang="ts">
	import Format from '$lib/Format.svelte';
	import JobSearchResult from '$lib/JobSearchResult.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>Find a job!</title>
	<meta name="description" content="AI recommends a perfect job for you." />
	<meta name="keywords" content="Jabot, Clone, UI/UX" />
</svelte:head>

<Format>
	<JobSearchResult jobList={data.jobs} />
</Format>
