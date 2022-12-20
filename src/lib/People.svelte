<script>
	function nextSlide() {
		let activeSlide = document.querySelector('.slide.translate-x-0');
		activeSlide?.classList.remove('translate-x-0');
		activeSlide?.classList.add('-translate-x-full');

		let nextSlide = activeSlide?.nextElementSibling;
		nextSlide?.classList.remove('translate-x-full');
		nextSlide?.classList.add('translate-x-0');
	}

	function previousSlide() {
		let activeSlide = document.querySelector('.slide.translate-x-0');
		activeSlide?.classList.remove('translate-x-0');
		activeSlide?.classList.add('translate-x-full');

		let previousSlide = activeSlide?.previousElementSibling;
		previousSlide?.classList.remove('-translate-x-full');
		previousSlide?.classList.add('translate-x-0');
	}
</script>

<div>
	<h3 class="text-4xl font-black text-center">Featured Jobot Pros</h3>
</div>
<div class="relative">
	{#each [0, 1, 2, 3, 4] as item}
		<div
			class="absolute inset-0 w-[40rem] h-screen bg-pink-500 text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform translate-x-0 slide"
		>
			Hello{item}
		</div>
	{/each}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		on:click={nextSlide}
		class="fixed bottom-0 right-0 bg-white w-16 h-16 flex items-center justify-center text-black"
	>
		&#x276F;
	</div>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		on:click={previousSlide}
		class="fixed bottom-0 right-0 bg-white w-16 h-16 mr-16 border-r border-gray-400 flex items-center justify-center text-black"
	>
		&#x276E;
	</div>
</div>
