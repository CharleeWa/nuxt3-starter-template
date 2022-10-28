<script setup lang="ts">
useHead({ title: 'home' })
const foo = useFoo()
</script>

<template>
  <div>
    <div class="i-simple-icons:facebook" />
    <div class="i-openmoji:1st-place-medal" />
    <h1>
      Home page
    </h1>
    <NuxtLink to="/about">
      About page
    </NuxtLink>
    <div>{{ foo }}</div>
  </div>
</template>
