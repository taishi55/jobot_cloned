<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import type { optionType } from './store/types';

	const search = (q: string) => {
		let nextUrl = $page.url.pathname;
		let isTurnedOff = false;
		if (nextUrl.includes(q)) {
			isTurnedOff = true;
		}

		options.forEach((option: optionType) => {
			nextUrl = nextUrl.replace(option.query, '');
		});

		if (!isTurnedOff) {
			nextUrl += q;
		}

		goto(nextUrl);
	};

	export let description: string;
	export let options: optionType[];
</script>

{#if $page.url.pathname !== '/saved'}
	<div>
		<h4>{description}</h4>
		<div>
			{#each options as option}
				<button
					on:click={() => search(option.query)}
					class={$page.url.pathname.includes(option.query) ? 'highlight' : ''}
				>
					{option.name}
				</button>
			{/each}
		</div>
	</div>
{/if}

<style lang="postcss" scoped>
	h4 {
		@apply font-semibold text-slate-600 my-2 pb-1 border-b border-slate-200;
	}

	.highlight {
		@apply bg-sky-500 text-white;
	}

	button {
		@apply px-3 py-1 text-xs rounded-full inline-block font-semibold text-sky-600 bg-sky-100 mr-3 mb-2;
	}
</style>
