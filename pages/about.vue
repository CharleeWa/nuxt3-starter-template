<script setup lang="ts">
useHead({ title: 'about' })
definePageMeta({
  middleware: ['auth'],
})
</script>

<template>
  <div>
    <h2>About</h2>

    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Consectetur sunt laboriosam, dignissimos quaerat error nemo velit,
      beatae doloribus officiis, libero sequi vero aut illo perferendis praesentium distinctio illum dicta asperiores.
    </p>

    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Consectetur sunt laboriosam, dignissimos quaerat error nemo velit,
      beatae doloribus officiis, libero sequi vero aut illo perferendis praesentium distinctio illum dicta asperiores.
    </p>
  </div>
</template>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}

p {
  margin: 20px 0;
}
</style>
