<script lang="ts">
	import Popular from '$lib/Popular.svelte';
	import type { PageData } from './$types';
	import Landing from '$lib/Landing.svelte';
	import Form from '$lib/Form.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>Jabot cloned edition</title>
	<meta name="description" content="AI recommends a perfect job for you." />
	<meta name="keywords" content="Jabot, Clone, UI/UX" />
</svelte:head>

<Landing>
	<Form />
</Landing>

<Popular popularJobs={data.popularJobs} />
