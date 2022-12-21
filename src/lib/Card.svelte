<script lang="ts">
	import type { Job } from './store/types';

	export let job: Job;
	let isLoading = false;
</script>

<li class="relative shrink-0 snap-center shadow-lg max-w-xs md:max-w-md lg:max-w-xl rounded-3xl">
	<img src={job.imgUrl} alt={job.title} class=" aspect-video object-cover rounded-3xl" />
	<div class=" absolute inset-0 w-full h-full bg-gradient-to-br from-black/25 rounded-3xl" />
	<div class="absolute top-0 left-0 p-5">
		<h3 class=" font-semibold text-white text-2xl">{job.title}</h3>
	</div>
	<div class="absolute bottom-0 right-0 p-5">
		<a
			on:click={() => {
				isLoading = true;
			}}
			href="/search/{job.title.trim().replaceAll(' ', '+')}"
			class="px-3 py-1 bg-sky-500 text-white rounded space-x-2"
		>
			{#if isLoading}
				<i class="fad fa-spinner animate-spin" />
			{:else}
				<i class="far fa-external-link" />
			{/if}<span>See more</span></a
		>
	</div>
</li>
