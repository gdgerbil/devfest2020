<script>
  import HashIcon from "../components/HashIcon.svelte";
  import LinkedIn from "./icons/LinkedIn.svelte";

  const icons = {
    linkedIn: LinkedIn
  }

  const speakers = [
    {name: 'Khadijah Abdulnabi', title: 'Graphics Designer', avatar: 'https://images.squarespace-cdn.com/content/v1/598c24f33e00beaec71cf321/1598014182359-GBDW68CUPCY7ZF6QPO2P/ke17ZwdGBToddI8pDm48kFyD7pzB8zoMIVY5aiUuFlp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0jG2lbcDYBOeMi4OFSYem8DMb5PTLoEDdB05UqhYu-xbnSznFxIRsaAU-3g5IaylIg/Khadijah_Brand_Strategy_Graphic_Design_MENA.jpg?format=500w', contact: {linkedIn: 'https://linkedin.com/in/'}},
    {name: 'Khadijah Abdulnabi', title: 'Graphics Designer', avatar: 'https://images.squarespace-cdn.com/content/v1/598c24f33e00beaec71cf321/1598014182359-GBDW68CUPCY7ZF6QPO2P/ke17ZwdGBToddI8pDm48kFyD7pzB8zoMIVY5aiUuFlp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0jG2lbcDYBOeMi4OFSYem8DMb5PTLoEDdB05UqhYu-xbnSznFxIRsaAU-3g5IaylIg/Khadijah_Brand_Strategy_Graphic_Design_MENA.jpg?format=500w', contact: {linkedIn: 'https://linkedin.com/in/'}}
  ]
</script>

<section id="about">
  <h2 class="text-center flex justify-center items-center">
    <HashIcon />
    Speakers
  </h2>
  
  <div class="h-32 flex flex-col justify-center items-center">
    <p class="text-xl">TBA</p>
  </div>

  <div class="flex justify-center items-center">
    {#each speakers as speaker (speaker.name)}
    <div>
      <div class="rounded-full overflow-hidden flex items-center h-64 w-64 bg-red-500">
        <img src="{speaker.avatar}" class="object-cover h-64 w-64" alt="Avatar of speaker">
      </div>
    </div>
  {/each}
  </div>
</section>
