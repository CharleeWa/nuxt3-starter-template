<script setup lang="ts">
definePageMeta({
  layout: 'products',
})
const { id } = useRoute().params
</script>

<template>
  <div>
    <p>Product details for {{ id }}</p>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Consectetur sunt laboriosam, dignissimos quaerat error nemo velit,
      beatae doloribus officiis, libero sequi vero aut illo perferendis praesentium distinctio illum dicta asperiores.
    </p>
  </div>
</template>

