<script>
	import Footer from '$lib/Footer.svelte';
	import Nav from '$lib/Nav.svelte';
	import '../app.css';
</script>

<svelte:head>
	<meta name="author" content="Taishi Nammoto" />
</svelte:head>

<Nav />
<main>
	<slot />
</main>
<Footer />
