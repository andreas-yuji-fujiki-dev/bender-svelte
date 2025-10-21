<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.png';

	export const prerender = true;
	export const ssr = false;

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}
