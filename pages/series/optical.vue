<script lang="ts" setup>
useHead({
  title: "光學眼鏡",
});
</script>

<template>
  <div>
    <section class="flex" role="img" aria-label="書本上的精密光學眼鏡顯得學習更有幫助">
      <picture class="w-1/2" aria-hidden="true">
        <source srcset="/images/product-header-1.png" media="(min-width: 769px)" />
        <img src="/images/product-header-sm-1.png" alt="精密光學眼鏡形象照 1" class="object-cover w-full h-full" />
      </picture>
      <picture class="w-1/2" aria-hidden="true">
        <source srcset="/images/product-header-2.png" media="(min-width: 769px)" />
        <img src="/images/product-header-sm-2.png" alt="精密光學眼鏡形象照 2" class="object-cover w-full h-full" />
      </picture>
    </section>
    <section class="container py-10 sm:py-20">
      <h2 class="text-center text-2xl font-roboto font-medium sm:text-[42px]">
        Celluloid Combi
      </h2>
      <h3 class="text-center text-2xl sm:text-[32px]">賽璐珞鈦金屬混合鏡框</h3>
      <!-- product list -->
      <div class="mt-6 sm:mt-8">
        <div class="flex flex-wrap -mx-3 gap-y-6 sm:gap-y-10 md:gap-y-20">
          <div class="px-3 sm:w-1/2 md:w-4/12 lg:w-1/4" v-for="i in 12">
            <img :src="`${$config.app.baseURL}images/product-${i % 6 ? i % 6 : 6
              }.png`" alt="" />
            <div class="flex justify-between">
              <h4 class="text-2xl font-roboto">BJ41600S</h4>
              <p class="text-2xl font-medium font-roboto text-glass-red">
                NTD3,490
              </p>
            </div>
            <ul class="flex gap-2">
              <li class="w-6 h-6 rounded bg-[#5F3E2D]"></li>
              <li class="w-6 h-6 rounded bg-[#B75929]"></li>
            </ul>
          </div>
        </div>
      </div>
      <Pagination />
    </section>
  </div>
</template>
