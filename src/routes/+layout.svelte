<script>
	import Footer from '$lib/Footer.svelte';
	import Nav from '$lib/Nav.svelte';
	import '../app.css';
</script>

<svelte:head>
	<meta name="author" content="Taishi Nammoto" />
	<meta property="og:image" content="%sveltekit.assets%/og.jpg" />
	<meta property="og:image:height" content="1257" />
	<meta property="og:image:width" content="2400" />
	<meta property="og:title" content="Jobot Clone Edition" />
	<meta property="og:description" content="This is a cloned app!" />
	<meta property="og:url" content="https://jobot-liart.vercel.app/" />
</svelte:head>

<Nav />
<main>
	<slot />
</main>
<Footer />
