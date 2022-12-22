<script lang="ts">
	export let options: string[];
	export let text: string;
</script>

{#if options.some((name) => name
			.toLowerCase()
			.includes(text.toLowerCase()) && text && name !== text)}
	<div class="autocompletion">
		{#each options.filter((name) => name.toLowerCase().includes(text.toLowerCase())) as name}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				on:click={() => {
					text = name;
				}}
				class="suggestion"
			>
				{name}
			</div>
		{/each}
	</div>
{/if}

<style lang="postcss" scoped>
	.autocompletion {
		@apply z-10 absolute top-0 lg:top-3 translate-y-10 left-0 w-full max-h-40 border-2 border-sky-400 rounded-lg bg-white overflow-y-auto;
	}

	.suggestion {
		@apply py-2 px-3 hover:bg-slate-200 cursor-pointer font-semibold text-slate-600 text-sm;
	}
</style>
