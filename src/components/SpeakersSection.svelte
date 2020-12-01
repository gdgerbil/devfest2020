<script>
  import HashIcon from "../components/HashIcon.svelte";
  import mo from "../images/mo.jpg"
  import tom from "../images/tom.jpg"
  import mercer from "../images/mercer.jpg"
  import ahmed from "../images/ahmed.jpg"
  import mevan from "../images/mevan.jpg"
  import murt from "../images/murt.jpg"
  import khadijah from "../images/khadijah.jpg"
  import banu from "../images/banu.jpg"

  const icons = {
    linkedIn: "icon-linkedin",
    facebook: "icon-facebook",
    instagram: "icon-instagram",
    twitter: "icon-twitter",
    website: "icon-globe",
  };

  const speakers = [
    {
      name: "Ahmed Al-Kheerow",
      title: "UI/UX Designer",
      avatar: ahmed,
      contact: {
        website: "https://alkheerow.com/",
        instagram: "https://www.instagram.com/ahmed.alkheerow/",
        facebook: "https://www.facebook.com/ahmed.a.alkheerow/",
        twitter: "https://twitter.com/alkheerow",
        linkedIn: "https://www.linkedin.com/in/ahmed-al-kheerow-9095191a3/"
      },
    },
    {
      name: "Khadijah Abdulnabi",
      title: "Graphics Designer",
      avatar: khadijah,
      contact: {
        linkedIn: "https://www.linkedin.com/in/khadijahabdulnabi/",
        website: "https://yakhadijah.com/",
        instagram: "https://www.instagram.com/yakhadijah/",
        behance: "https://www.behance.net/khadijahab03f2"
      },
    },
    {
      name: "Mercer Schuchardt",
      title: "Data Engineering at Chatham Financial",
      avatar: mercer,
      contact: {
        instagram: "https://www.instagram.com/em.and.merce/",
      },
    },
    {
      name: "Banu Ali",
      title: "Chevening Scholar - MSc Management at Queen Mary",
      avatar: banu,
      contact: {
        instagram: "https://www.instagram.com/_banuali_/",
      },
    },
    {
      name: "Mevan Babakar",
      title: "Deputy CEO at Full Fact",
      avatar: mevan,
      contact: {
        instagram: "https://www.instagram.com/em.and.merce/",
        linkedIn: "https://www.linkedin.com/in/mevanbabakar/",
      },
    },
    {
      name: "Tom Lynch",
      title: "Data Engineer",
      avatar: tom,
      contact: {
        instagram: "https://www.instagram.com/tompiler/",
        website: "https://tompiler.net/",
        twitter: "https://twitter.com/tompiler",
        linkedIn: "https://www.linkedin.com/in/thomas-lynch-88700354/",
      },
    },
    {
      name: "Murtadha Al-Tameemi",
      title: "Software Engineer at Facebook",
      avatar: murt,
      contact: {
        instagram: "https://www.instagram.com/the.murt/",
        facebook: "https://www.facebook.com/murt",
      },
    },
    {
      name: "Mohammed Abdulkareem",
      title: "Full Stack Engineer at VeeLoop",
      avatar: mo,
      contact: {
        linkedIn: "https://linkedin.com/in/mohd-ai/",
        website: "https://mohd.dev/",
        twitter: 'https://twitter.com/MoAbdulkereem',
      },
    },
  ].sort((a, b) => a.name.localeCompare(b.name));
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
          {#each Object.entries(speaker.contact).sort(([key1], [key2]) => key1.localeCompare(key2)) as [key, url]}
            <div class="px-1 text-xl">
              {#if icons[key]}
                <a href={url}>
                  <i class="icon {icons[key]}" />
                </a>
              {:else}
                <a href={url} title="{key}">
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
