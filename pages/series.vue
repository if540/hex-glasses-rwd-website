<script lang="ts" setup>
useHead({
  titleTemplate: "%s - 系列鏡框 - Glasses"
})
definePageMeta({
  pageTransition: { name: "page", mode: 'out-in' }
})
</script>

<template>
  <div>
    <Header />
    <main>
      <nav class="container px-0">
        <ul class="flex">
          <li class="flex-1 border border-solid">
            <NuxtLink to="/series/optical" class="glasses-link block py-4 text-center uppercase font-medium font-roboto sm:text-2xl md:py-6 md:text-[2rem]">optical</NuxtLink>
          </li>
          <li class="flex-1 border border-solid">
            <NuxtLink to="/series/sunglasses" class="glasses-link block py-4 text-center uppercase font-medium font-roboto sm:text-2xl md:py-6 md:text-[2rem]">sunglasses</NuxtLink>
          </li>
          <li class="flex-1 border border-solid">
            <NuxtLink to="/series/functional" class="glasses-link block py-4 text-center uppercase font-medium font-roboto sm:text-2xl md:py-6 md:text-[2rem]">functional</NuxtLink>
          </li>
        </ul>
      </nav>
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<style lang="sass" scoped>
.glasses-link
  position: relative
  @apply after:h-2 after:bg-transparent after:block after:absolute after:bottom-0 after:w-full after:transition-all after:delay-75
.router-link-active, .glasses-link:hover
  @apply after:bg-glass-red
</style>
