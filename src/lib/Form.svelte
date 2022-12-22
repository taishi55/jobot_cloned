<script lang="ts">
	import { goto } from '$app/navigation';
	import { majorJobOptions } from './store/filterOptions';

	let title = '';
	let location = '';
	let isLoading = false;

	const search = () => {
		if (!title.trim() || !location.trim()) {
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
	<!-- suggestion -->
	{#if majorJobOptions.some((name) => name
				.toLowerCase()
				.includes(title.toLowerCase()) && title && name !== title)}
		<div class="autocompletion">
			{#each majorJobOptions.filter((name) => name
					.toLowerCase()
					.includes(title.toLowerCase())) as name}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div
					on:click={() => {
						title = name;
					}}
					class="suggestion"
				>
					{name}
				</div>
			{/each}
		</div>
	{/if}
</div>

<div class=" relative">
	<input
		autocomplete="address-level2"
		type="text"
		bind:value={location}
		placeholder="City, State, Zip, or Remote"
	/>

	<i class="fas fa-map-marker-alt input-icon" />
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

	.autocompletion {
		@apply z-10 absolute top-3 translate-y-10 left-0 w-full max-h-40 border-2 border-sky-400 rounded-lg bg-white overflow-y-auto;
	}

	.suggestion {
		@apply py-2 px-3 hover:bg-slate-200 cursor-pointer font-semibold text-slate-600 text-sm;
	}
</style>
