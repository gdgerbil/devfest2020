<script>
  import logo from '../images/logo.png'
  export let segment;

  const linkClasses = active => `border-b-2 border-transparent hover:border-gdg-red-400 ${active ? 'border-gdg-red-500' : ''}`;
</script>

<nav>
  <ul class="list-none flex px-1 sm:px-5 h-16 items-center justify-center sm:justify-between uppercase font-mono">
    <li class="sm:inline-block hidden">
      <img src="{logo}" alt="logo" class="h-8">
    </li>

    <li class="flex-1 sm:flex-none">
      <ul class="list-none flex flex-1 justify-around sm:justify-between">
        <li class="sm:mx-5">
          <a class="p-1  transition-colors duration-200 {linkClasses(segment===undefined)}" aria-current={segment===undefined ? 'page' : undefined} href=".">
            home
          </a>
        </li>
        <li class="sm:mx-5">
          <a class="p-1" aria-current={segment==='about' ? 'page' : undefined} href="about">
            agenda
          </a>
        </li>

        <li class="sm:mx-5">
          <a class="p-1" aria-current={segment==='about' ? 'page' : undefined} href="about">
            team
          </a>
        </li>
      </ul>
    </li>
  </ul>
</nav>

