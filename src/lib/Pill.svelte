<script lang="ts">
	export let text = '';
	export let icon = '';
</script>

<div
	class="mr-3 mb-3 flex items-center space-x-2 text-sm rounded-full px-4 py-1 bg-sky-200 text-slate-700 font-semibold w-fit"
>
	<i class={icon} />
	<span>{text}</span>
</div>
