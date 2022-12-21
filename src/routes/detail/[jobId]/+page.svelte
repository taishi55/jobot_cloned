<script lang="ts">
	import Format from '$lib/Format.svelte';
	import Pill from '$lib/Pill.svelte';
	import { fade, fly, scale } from 'svelte/transition';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content={data.description} />
</svelte:head>

<Format>
	<article class="space-y-3 block">
		<div class="card">
			<div>
				<button on:click={() => history.back()}>
					<i class="fas fa-long-arrow-left text-slate-600 text-xl" />
				</button>
			</div>
			<h1>
				{data.title}
			</h1>
			<h2 class=" font-light text-lg">{data.description}</h2>

			<div class="mt-3 flex flex-wrap">
				<Pill text={data.isRemote ? 'REMOTE' : 'ONSITE'} icon="fas fa-laptop-house" />
				<Pill text={data.location} icon="fas fa-map-marker-alt" />
				<Pill text={data.salary} icon="fas fa-sack-dollar" />
			</div>

			<div class=" flex items-start space-x-2">
				<img
					src="/new_icon.png"
					class=" w-16 aspect-square object-cover mt-2"
					alt="Jabot new icon maybe"
				/>
				<div class="space-y-3">
					<div
						class="text-lg font-semibold text-sky-600 px-3 py-2 rounded-md bg-sky-100 leading-normal"
					>
						Click below to apply!
					</div>
					<div>
						<a
							class="py-2 px-4 bg-gradient-to-br hover:bg-gradient-to-b from-sky-500 via-purple-500 to-pink-500 hover:bg-sky-400 rounded text-white w-fit"
							href="https://jobot.com{data.jobApplyUrl}"
							target="_blank"
							rel="noopener noreferrer">APPLY</a
						>
					</div>
				</div>
			</div>

			<div class=" flex items-start justify-end space-x-2">
				<div class="space-y-3">
					<div
						class="text-lg font-semibold text-sky-600 px-3 py-2 rounded-md bg-sky-100 leading-normal"
					>
						Do you need help? <br />Reach out to our professionals!
					</div>
					<div>
						<a
							class="py-1 px-3 bg-sky-500 hover:bg-sky-400 rounded text-white flex items-center space-x-2 w-fit"
							href="https://jobot.com{data.managerUrl}"
							target="_blank"
							rel="noopener noreferrer"
							><i class="fas fa-user-headset" /><span>{data.manager}</span></a
						>
					</div>
				</div>
				<img
					src="/new_icon.png"
					class=" w-16 aspect-square object-cover mt-2"
					alt="Jabot new icon maybe"
				/>
			</div>
		</div>
		<div class="card">
			<h3>About us</h3>
			<p>
				{@html data.about}
			</p>
		</div>
		<div class="card">
			<h3>Benefits</h3>
			<p>
				{@html data.benefit}
			</p>
		</div>
		<div class="card">
			<h3>Detail</h3>
			<p>{@html data.detail}</p>
		</div>
	</article>
</Format>

<style lang="postcss" scoped>
	h1 {
		@apply lg:text-4xl text-2xl font-black pl-3 border-l-4 lg:border-l-8 border-sky-400 text-slate-800;
	}

	h3 {
		@apply text-xl font-semibold border-b border-slate-200 pb-2;
	}

	p {
		@apply font-normal text-slate-600 text-lg whitespace-pre-line;
	}

	.card {
		@apply p-5 shadow-lg shadow-slate-300 rounded-lg bg-white space-y-3 lg:space-y-4;
	}
</style>
