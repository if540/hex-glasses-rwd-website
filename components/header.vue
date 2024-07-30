<script lang="ts" setup>
const menuList = [
  {title: '系列鏡框'},
  {title: '門市據點'},
  {title: '部落格'},
  {title: '常見問題'},
]
</script>

<template>
  <header class="bg-glass-red">
    <div class="container flex flex-col max-[640px]:px-0 sm:flex-row sm:justify-between sm:items-center lg:px-0">
      <img class="max-w-[80px] my-[16px] ml-[15px]" src="/images/logo-white.png" alt="Glass Rwd Website logo">
      <nav>
        <ul class="flex flex-wrap sm:gap-16">
          <li class="w-1/2 border border-white border-solid sm:border-none sm:w-auto" v-for="item in menuList">
            <a href="#" class="text-center text-white block py-[12px] sm:py-[25px]">{{item.title}}</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
