<script>
	import Form from './Form.svelte';
</script>

<div
	class="p-4 lg:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-center lg:space-x-5 bg-gradient-to-b from-white to-sky-100"
>
	<img src="/new_icon.png" alt="" class="block lg:max-w-xl pb-7 lg:pb-0 w-2/3 mx-auto lg:mx-0" />

	<div
		class=" bg-white to-white shadow-xl shadow-slate-300 rounded-3xl p-5 lg:p-8 space-y-6 mx-auto w-full lg:w-[40rem]"
	>
		<div class="space-y-2">
			<h1 class="text-2xl lg:text-4xl font-black">Hire or Be Hired.</h1>
			<h2 class="lg:text-2xl font-light">AI powered job search starts here</h2>
		</div>

		<Form />
	</div>
</div>

<div class="p-4 lg:p-8 bg-gradient-to-t from-white via-white to-sky-100 h-36" />
