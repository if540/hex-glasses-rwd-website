<script lang="ts" setup>
const menuList = [
  { title: "系列鏡框", path: "/series" },
  { title: "門市據點", path: "/store" },
  { title: "部落格", path: "/blog" },
  { title: "常見問題", path: "/qa" },
];
</script>

<template>
  <header class="bg-glass-red">
    <div class="container flex flex-col max-[640px]:px-0 sm:flex-row sm:justify-between sm:items-center">
      <NuxtLink to="/" class="transition-opacity duration-300 hover:opacity-75"><img
          class="max-w-[80px] mt-[16px] mb-[15.43px] ml-[15px]" src="/images/logo-white.png"
          alt="Glass Rwd Website logo" /></NuxtLink>
      <nav>
        <ul class="flex flex-wrap sm:gap-8 md:gap-16">
          <li class="w-1/2 border border-white border-solid sm:border-none sm:w-auto" v-for="item in menuList">
            <NuxtLink :to="item.path"
              class="hover:opacity-50 transition-opacity duration-300 text-center text-white block py-[12px] sm:text-xl sm:py-[25px]">
              {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
