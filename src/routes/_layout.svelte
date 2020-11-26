<script>
	import Footer from '../components/Footer.svelte';
	import Nav from '../components/Nav.svelte';
	export let segment;
</script>

<Nav {segment}/>

<main>
	<slot></slot>
</main>

<Footer></Footer>