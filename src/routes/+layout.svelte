<script>
	import Footer from '$lib/Footer.svelte';
	import Nav from '$lib/Nav.svelte';
	import '../app.css';
</script>

<svelte:head>
	<meta name="author" content="Taishi Nammoto" />

	<!-- Facebook Meta Tags -->
	<meta property="og:url" content="https://jobot-liart.vercel.app/" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Jobot Cloned Edition" />
	<meta property="og:description" content="This is a cloned app" />
	<meta property="og:image" content="/card.png" />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="jobot.com" />
	<meta property="twitter:url" content="https://jobot-liart.vercel.app/" />
	<meta name="twitter:title" content="Jobot Cloned Edition" />
	<meta name="twitter:description" content="This is a cloned app" />
	<meta name="twitter:image" content="/card.png" />
</svelte:head>

<Nav />
<main>
	<slot />
</main>
<Footer />
