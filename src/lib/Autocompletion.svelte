<script lang="ts">
	import { selectedJob, selectedLocation } from './store/filterOptions';

	export let options: string[];
	export let text: string;
	export let isLocation = false;
	let isVisible = false;
	$: if (text) {
		isVisible = true;
	}

	const eventHandlar = (name: string) => {
		if (isLocation) {
			selectedLocation.set(name);
		} else {
			selectedJob.set(name);
		}
	};
</script>

{#if isVisible && options.some((name) => name
				.toLowerCase()
				.includes(text.toLowerCase()) && text && text !== name)}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		on:click={() => {
			isVisible = false;
		}}
		class=" fixed top-0 left-0 w-full h-full z-10"
	/>
	<div class="autocompletion">
		{#each options.filter((name) => name.toLowerCase().includes(text.toLowerCase())) as name}
			<button on:click={() => eventHandlar(name)} class="suggestion">
				{name}
			</button>
		{/each}
	</div>
{/if}

<style lang="postcss" scoped>
	.autocompletion {
		@apply z-10 absolute top-0 lg:top-3 translate-y-10 left-0 w-full max-h-40 border-2 border-sky-400 rounded-lg bg-white overflow-y-auto;
	}

	.suggestion {
		@apply w-full block text-left py-2 px-3 hover:bg-slate-200 cursor-pointer font-semibold text-slate-600 text-sm;
	}
</style>
