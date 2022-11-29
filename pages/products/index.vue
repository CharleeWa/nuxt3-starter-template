<script setup>
definePageMeta({
  layout: 'products',
})

// fetch the products
const { data: products } = await useFetch(() => 'https://fakestoreapi.com/products')
</script>

<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p, index in products" :key="index">
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>
