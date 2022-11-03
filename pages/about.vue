<script setup lang="ts">
useHead({ title: 'about' })
definePageMeta({
  middleware: ['auth'],
})
</script>

<template>
  <div>
    <h1>About page</h1>
    <NuxtLink to="/">
      Home page
    </NuxtLink>
  </div>
</template>
