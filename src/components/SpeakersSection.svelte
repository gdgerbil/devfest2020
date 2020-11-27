<script>
  import HashIcon from "../components/HashIcon.svelte";
  import LinkedIn from "./icons/LinkedIn.svelte";
  import Globe from "./icons/Globe.svelte";
  import Twitter from "./icons/Twitter.svelte";
  import Instagram from "./icons/Instagram.svelte";
  import Facebook from "./icons/Facebook.svelte";
  import Link from "./icons/Link.svelte";

  const icons = {
    linkedIn: "icon-linkedin",
    facebook: "icon-facebook",
    instagram: "icon-instagram",
    twitter: "icon-twitter",
    website: "icon-globe",
  };

  const speakers = [
    {
      name: "Khadijah Abdulnabi",
      title: "Graphics Designer",
      avatar:
        "https://images.squarespace-cdn.com/content/v1/598c24f33e00beaec71cf321/1598014182359-GBDW68CUPCY7ZF6QPO2P/ke17ZwdGBToddI8pDm48kFyD7pzB8zoMIVY5aiUuFlp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0jG2lbcDYBOeMi4OFSYem8DMb5PTLoEDdB05UqhYu-xbnSznFxIRsaAU-3g5IaylIg/Khadijah_Brand_Strategy_Graphic_Design_MENA.jpg?format=500w",
      contact: {
        linkedIn: "https://linkedin.com/in/",
        website: "https://yakhadijah.com/",
        twitter: 'https://twitter.com',
        instagram: 'https://twitter.com',
        foo: 'https://twitter.com',
      },
    },
    {
      name: "Khadijah Abdulnabi",
      title: "Graphics Designer",
      avatar:
        "https://images.squarespace-cdn.com/content/v1/598c24f33e00beaec71cf321/1598014182359-GBDW68CUPCY7ZF6QPO2P/ke17ZwdGBToddI8pDm48kFyD7pzB8zoMIVY5aiUuFlp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0jG2lbcDYBOeMi4OFSYem8DMb5PTLoEDdB05UqhYu-xbnSznFxIRsaAU-3g5IaylIg/Khadijah_Brand_Strategy_Graphic_Design_MENA.jpg?format=500w",
      contact: {
        linkedIn: "https://linkedin.com/in/",
        website: "https://yakhadijah.com/",
        facebook: 'https://twitter.com',

      },
    },
  ];
</script>

<section id="speakers">
  <h2 class="text-center flex justify-center items-center">
    <HashIcon />
    Speakers
  </h2>

  <div class="flex justify-center items-center flex-wrap">
    {#each speakers as speaker (speaker.name)}
      <div class="px-8 py-4 text-center items-center flex flex-1 flex-col">
        <div
          class="rounded-full overflow-hidden flex items-center h-56 w-56 bg-gray-500 border-2 border-gdg-blue-500">
          <img
            src={speaker.avatar}
            class="object-cover h-56 w-56"
            alt="Avatar of {speaker.name}" />
        </div>
        <h4 class="text-gdg-blue-600">{speaker.name}</h4>
        <h6 class="font-light text-gray-600 text-base">{speaker.title}</h6>
        <div class="py-2 flex flex-1 flex-row justify-center">
          {#each Object.entries(speaker.contact) as [key, url]}
            <div class="px-1 text-xl">
              {#if icons[key]}
                <a href={url}>
                  <i class="icon {icons[key]}" />
                </a>
              {:else}
                <a href={url}>
                  <i class="icon icon-external-link" />
                </a>
              {/if}
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>
