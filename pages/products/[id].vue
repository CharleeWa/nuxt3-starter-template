<script setup>
definePageMeta({
  layout: 'products',
})
const { id } = useRoute().params
const uri = `https://fakestoreapi.com/products/${id}`

// fetch the product
const { data: product } = await useFetch(() => uri)
</script>

<template>
  <div>
    <ProductDetails :product="product" />
  </div>
</template>

