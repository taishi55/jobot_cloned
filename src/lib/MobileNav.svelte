<script lang="ts">
	export let isOpenNavbar = false;
	const closeTab = () => (isOpenNavbar = false);
</script>

<div class={isOpenNavbar ? 'open' : 'not-open'}>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div on:click={closeTab} class="left-space" />
	<div class="menu">
		<a on:click={closeTab} class="link border-b border-slate-300" href="/">Find a job</a>
		<a on:click={closeTab} class="link border-b border-slate-300" href="/saved">Saved</a>
		<a
			on:click={closeTab}
			class="link border-2 border-blue-500 text-blue-600 rounded"
			href="https://jobot.com/login">Sign In</a
		>
		<a
			on:click={closeTab}
			class="link bg-blue-500 text-white rounded"
			href="https://jobot.com/login/sign-up">Sign Up</a
		>
	</div>
</div>

<style lang="postcss" scoped>
	.open {
		@apply lg:hidden fixed inset-0 w-full h-full transition-all duration-500 ease-in-out z-50 text-lg grid grid-cols-5;
	}

	.not-open {
		@apply open translate-x-full;
	}

	.link {
		@apply px-3 py-1 w-full text-center;
	}

	.menu {
		@apply col-span-4 bg-slate-100 text-slate-600 flex flex-col items-start space-y-3 px-4 h-full overflow-y-auto pt-6 pb-20;
	}

	.left-space {
		@apply bg-black opacity-50 col-span-1;
	}
</style>
