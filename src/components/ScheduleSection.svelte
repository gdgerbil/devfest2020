<script>
  import HashIcon from "./HashIcon.svelte";

  const days = [
    [
      { title: "Opening Keynote", runtime: "7:45pm – 8:00pm" },
      {
        title: "Diving into user experience design",
        runtime: "8:00pm – 9:00pm",
        speaker: "Ahmed Al-Kheerow",
      },
      {
        title: "HTTP: The underlying protocol of the Web",
        runtime: "9:00pm – 10:00pm",
        speaker: "Mohammed Abdulkareem",
      },
    ],
    [
      {
        title: "Tavi Kids - Hour of Code",
        runtime: "7:00pm – 8:00pm",
        speaker: "Banu Ali",
      },
      {
        title: "Web Scraping in Python",
        runtime: "8:00pm – 9:00pm",
        speaker: "Mercer Schuchardt",
      },
    ],
    [
      {
        title: "Painfully Common UX Myths",
        runtime: "7:00pm – 7:45pm",
        speaker: "Khadijah Abdulnabi",
      },
      {
        title: "An Introduction to Amazon Web Services",
        runtime: "7:45pm – 8:30pm",
        speaker: "Tom Lynch",
      },
      {
        title: "Level Up: tech mentoring for Iraq, Iran and Syria",
        runtime: "8:30pm – 9:15pm",
        speaker: "Mevan Babakr",
      },
      {
        title: "Crush Your Coding Interview",
        runtime: "9:30pm – 11:00pm",
        speaker: "Murtadha Al-Tameemi",
      },
    ],
  ];
</script>

<section
  id="schedule"
  class="flex flex-col items-stretch px-0 md:px-16 lg:items-center pb-4">
  <h2 class="text-center flex justify-center items-center">
    <HashIcon />
    The Agenda
  </h2>
  <div class="flex flex-wrap justify-center">
    {#each days as day, i}
      <div class="lg:col-1/3">
        <div class="px-4 flex flex-col py-4" style="width: 24rem">
          <h5 class="py-2 uppercase">Day {i + 1}</h5>
          <div class="bg-gray-100 rounded">
            {#each day as session}
              <div class="p-2">
                <div class="p-4 bg-white rounded">
                  <div>
                    <h6 class="py-1 text-gdg-blue-700">{session.title}</h6>
                    <div class="text-sm font-light">{session.runtime}</div>
                    {#if session.speaker}
                      <div class="text-base py-1 text-gray-700">— {session.speaker}</div>
                    {/if}
                  </div>
                </div>
              </div>
            {/each}
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>
