<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex items-center justify-between">
        <NuxtLink to="/" class="font-bold no-underline">
          Nuxt3 Starter Template
        </NuxtLink>

        <ul class="flex gap-4">
          <li class="list-none">
            <NuxtLink to="/" class="no-underline">
              Home
            </NuxtLink>
          </li>
          <li class="list-none">
            <NuxtLink to="/about" class="no-underline">
              About
            </NuxtLink>
          </li>
          <li class="list-none">
            <NuxtLink to="/products" class="no-underline">
              Products
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </header>

    <!-- output the page content -->
    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>
