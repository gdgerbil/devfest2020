<script>
  import Banner from "../components/Banner.svelte";
  import AboutSection from "../components/AboutSection.svelte";
  import SpeakersSection from "../components/SpeakersSection.svelte";
  import SponsorsSection from "../components/SponsorsSection.svelte";
  import ScheduleSection from "../components/ScheduleSection.svelte";
  import AttendanceSection from "../components/AttendanceSection.svelte";
</script>

<svelte:head>
  <title>DevFest Iraq 2020</title>
</svelte:head>

<div class="flex w-full justify-center space-y-10" style="background: #f8f9fa">
  <div class="flex flex-1 max-w-screen-xl">
    <Banner />
  </div>
</div>

<div class="flex justify-center px-4">
  <div class="max-w-screen-lg prose-lg">
    <AboutSection />
  </div>
</div>


<div class="flex justify-center px-4 bg-gdg-blue-100">
  <div class="max-w-screen-lg prose-lg">
    <AttendanceSection />
  </div>
</div>

<!-- <div class="flex justify-center py-2 text-4xl text-gray-500">
	<span class="px-6">.</span>
	<span class="px-6">.</span>
	<span class="px-6">.</span>
</div> -->

<div class="flex justify-center px-4 bg-gray-100">
  <div class="max-w-screen-lg prose-lg">
    <SpeakersSection />
  </div>
</div>

<div class="flex justify-center px-4 bg-gdg-red-100">
  <div class="max-w-screen-lg prose-lg">
    <SponsorsSection />
  </div>
</div>

<div class="flex justify-center px-4 bg-gdg-green-100">
  <div class="max-w-screen-xl prose-lg w-full">
    <ScheduleSection />
  </div>
</div>
