<script lang="ts">
	import Form from '$lib/Form.svelte';
	import Popular from '$lib/Popular.svelte';
	import People from '$lib/People.svelte';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Form />

<Popular popularJobs={data.popularJobs} />

<People />
