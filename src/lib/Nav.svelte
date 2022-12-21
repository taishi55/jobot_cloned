<nav>
	<!-- logo -->
	<div class="w-60 pb-2">
		<a href="/" class="w-fit relative">
			<img src="/logo.svg" class="h-10" alt="" />
			<div class=" text-red-600 font-semibold absolute -top-4 left-2 text-xs font-mono">
				Cloned Edition
			</div>
		</a>
	</div>

	<!-- desktop menu -->
	<div class="menu">
		<a href="/" class="menu-btn">Find a job</a>
		<a href="/saved" class="menu-btn">Saved</a>
	</div>

	<!-- desktop siginin -->
	<div class="signin">
		<a href="https://jobot.com/login" class="blue-outline-btn">
			<i class="fal fa-sign-in text-xl" />
			<span>Sign In</span>
		</a>
		<a href="https://jobot.com/login/sign-up" class="blue-btn">
			<i class="fal fa-sign-in text-xl" />
			<span>Sign Up</span>
		</a>
	</div>

	<!-- mobile bar icon -->
	<div class="lg:hidden">
		<button><i class="fal fa-bars text-3xl" /></button>
	</div>
</nav>

<style lang="postcss" scoped>
	nav {
		@apply z-50 flex pb-2 pt-2 lg:pb-0 lg:pt-5 px-5 lg:px-8 justify-between items-center lg:items-end w-full sticky top-0 bg-white;
	}

	.menu {
		@apply hidden lg:flex items-end;
	}

	.menu-btn {
		@apply px-4 pb-2 border-b-2 border-transparent hover:border-sky-500 block text-xl font-light;
	}

	.signin {
		@apply hidden lg:flex justify-end items-stretch space-x-3 w-60 pb-2;
	}

	.blue-btn {
		@apply flex space-x-2 items-center font-light px-2 py-1 bg-sky-500 hover:bg-sky-300 text-white rounded;
	}

	.blue-outline-btn {
		@apply flex space-x-2 items-center font-light px-2 py-1 text-sky-500 hover:text-sky-300 border-2 border-sky-500 hover:border-sky-300 rounded;
	}
</style>
