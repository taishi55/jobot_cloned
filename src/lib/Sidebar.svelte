<script lang="ts">
	import FilterSearch from './FilterSearch.svelte';
	import Form from './Form.svelte';
	import { remoteOptions, sortOptions, typeOptions } from './store/filterOptions';
</script>

<div class=" bg-white sticky top-[6.8rem] rounded-lg p-5 space-y-6 shadow-xl shadow-slate-300 mb-7">
	<div class="flex items-center space-x-2">
		<img src="/new_icon.png" class=" aspect-square object-cover w-14" alt="" />
		<h1 class="text-lg font-bold text-sky-600 rounded-md bg-sky-100 py-1 px-3">
			I'll find a perfect job for you!
		</h1>
	</div>
	<Form />

	<div>
		<FilterSearch description={"What's important for you?"} options={sortOptions} />
		<FilterSearch description={'Work from home?'} options={remoteOptions} />
		<FilterSearch description={'Choose employment type'} options={typeOptions} />
	</div>
</div>
