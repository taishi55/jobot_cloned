<script lang="ts">
	import type { Job } from './store/types';

	export let popularJobs: Job[] = [];
</script>

<ul
	class="flex w-full snap-x snap-mandatory space-x-6 lg:space-x-10 overflow-x-auto pb-6 before:w-[30vw] before:shrink-0 after:w-[30vw] after:shrink-0"
>
	{#each popularJobs as job, index}
		<li
			class="relative shrink-0 snap-center shadow-lg max-w-xs md:max-w-md lg:max-w-xl rounded-3xl"
		>
			<img src={job.imgUrl} alt={job.title} class=" aspect-video object-cover rounded-3xl" />
			<div class=" absolute inset-0 w-full h-full bg-gradient-to-br from-black/25 rounded-3xl" />
			<div class="absolute top-0 left-0 p-5">
				<h3 class=" font-semibold text-white text-2xl">{job.title}</h3>
			</div>
			<div class="absolute bottom-0 right-0 p-5">
				<a
					href="/search/{job.title.trim().replaceAll(' ', '+')}"
					class="px-3 py-1 bg-sky-500 text-white rounded space-x-2"
					><i class="far fa-external-link" /><span>See more</span></a
				>
			</div>
		</li>
	{/each}
</ul>
