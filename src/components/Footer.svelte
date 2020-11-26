<script>
      import logo from '../images/logo.png'
</script>

<footer class="bg-gray-800 flex justify-center px-4" style="min-height: 10rem">
    <div class="max-w-screen-lg flex flex-1 flex-col md:flex-row items-center md:justify-between py-8 text-white">
        {#each [1,2] as x}
        <div class="py-2 md:py-0">
            <h3 class="uppercase text-lg leading-10">About</h3>
            <nav class="list-none font-light text-gray-100">
                <li>
                    <a href="https://devfest.withgoogle.com/">DevFest</a>
                </li>
                <li>
                    <a href="https://developers.google.com/community/gdg">GDG and WTM</a>
                </li>
                <li>
                    <a href="/#">GDG Erbil</a>
                </li>
                <li>
                    <a href="/#">GDG Najaf</a>
                </li>
                <li>
                    <a href="/#">GDG Basra</a>
                </li>
            </nav>
        </div>
        {/each}
        <div class="py-2 md:py-0 flex items-center flex-col">
            <div class="py-2">
                <img src="{logo}" class="h-8" alt="gdg_logo">
            </div>
        </div>
    </div>
</footer>