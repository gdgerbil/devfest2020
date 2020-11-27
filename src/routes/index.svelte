<script>
	import Banner from '../components/Banner.svelte';
	import AboutSection from '../components/AboutSection.svelte';
	import SpeakersSection from '../components/SpeakersSection.svelte';

</script>

<svelte:head>
	<title>DevFest Iraq 2020</title>
</svelte:head>

<div class="flex w-full justify-center" style="background: #f8f9fa">
	<div class="flex flex-1 max-w-screen-xl">
		<Banner></Banner>
	</div>
</div>

<div class="flex justify-center px-4">
	<div class="max-w-screen-lg prose-lg">
		<AboutSection></AboutSection>
	</div>
</div>

<!-- <div class="flex justify-center py-2 text-4xl text-gray-500">
	<span class="px-6">.</span>
	<span class="px-6">.</span>
	<span class="px-6">.</span>
</div> -->

<div class="flex justify-center px-4 bg-gray-100">
	<div class="max-w-screen-lg prose-lg">
		<SpeakersSection></SpeakersSection>
	</div>
</div>
