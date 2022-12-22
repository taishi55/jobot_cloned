<script lang="ts">
	import { goto } from '$app/navigation';
	import Autocompletion from './Autocompletion.svelte';
	import {
		locationOptions,
		majorJobOptions,
		selectedLocation,
		selectedJob
	} from './store/filterOptions';

	let title = '';
	let location = '';
	let isLoading = false;
	let isWarning = false;

	$: if ($selectedJob) {
		title = $selectedJob;
	}
	$: if ($selectedLocation) {
		location = $selectedLocation;
	}

	const search = () => {
		if (!title.trim() || !location.trim()) {
			isWarning = true;
			setTimeout(() => {
				isWarning = false;
			}, 3500);
			return;
		}

		isLoading = true;
		setTimeout(() => {
			isLoading = false;
		}, 3800);

		goto(`/search/${title.trim().replaceAll(' ', '+')}&l=${location.trim().replaceAll(' ', '+')}`);
	};
</script>

<div class=" relative">
	<input
		autocomplete="organization-title"
		type="text"
		bind:value={title}
		placeholder="Job Title or Keywords"
	/>
	<i class="fas fa-briefcase input-icon" />
	<Autocompletion options={majorJobOptions} text={title} isLocation={false} />
</div>

<div class=" relative">
	<input
		autocomplete="address-level2"
		type="text"
		bind:value={location}
		placeholder="City, State, Zip, or Remote"
	/>

	<i class="fas fa-map-marker-alt input-icon" />
	<Autocompletion options={locationOptions} text={location} isLocation={true} />
</div>

<div>
	<button disabled={isLoading} on:click={search}>
		{#if isLoading}
			<i class="fal fa-spinner animate-spin" />
		{/if}
		<span>Search</span>
	</button>
</div>

<style lang="postcss" scoped>
	input {
		@apply border-b border-slate-300 w-full font-light block pl-8 lg:py-2;
	}

	.input-icon {
		@apply absolute top-1/2 left-0 -translate-y-1/2 text-slate-400;
	}

	button {
		@apply text-white bg-sky-500 py-1 flex justify-center items-center space-x-2 w-full font-light rounded-md;
	}
</style>
