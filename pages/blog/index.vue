<script lang="ts" setup>
useHead({
  title: "部落格",
});
</script>

<template>
  <div>
    <Header />
    <main class="container py-10 sm:py-20 lg:px-0">
      <h1 class="text-2xl font-bold border-l-8 border-solid border-[#9F1213] pl-3 sm:text-5xl md:mt-4">
        部落格
      </h1>
      <ul class="mt-6 space-y-6 sm:mt-8 lg:space-y-[60px]">
        <li class="flex flex-col gap-2 sm:gap-6 sm:flex-row">
          <img src="/images/blog-1.png" alt="" class="object-cover sm:w-1/2" />
          <div class="flex flex-col">
            <p class="text-2xl lg:text-[32px] text-glass-red-dark">
              情人特別企劃
            </p>
            <p class="flex justify-between">
              <span class="font-medium font-roboto">2020 Valentine’s Special</span><time datetime="2020/02/14"
                class="font-medium opacity-70">2020/02/14</time>
            </p>
            <p
              class="relative text-[#555555] mt-1 line-clamp-6 hidden sm:block lg:text-xl lg:mt-4 lg:line-clamp-none lg:flex lg:flex-col lg:h-full">
              一年一度西洋情人節即將到來，我們推出最強「情人節企劃」，為這個甜蜜的節日加溫。偶爾跟另一半來個低調情侶單品，結合彼此喜好、找出合適框型款式，在這個春夏輕鬆搭出屬於你們的甜蜜默契！
              即日起至2/16為止，不論是熱戀情侶、自由自在一個人或是老夫老妻，只要從未來過本店的新朋友，綁定官方LINE好友，都可享專屬優惠⋯⋯<NuxtLink to="/blog/情人特別企劃"
                class="transition-opacity duration-300 hackMoreLink font-roboto hover:opacity-75 lg:uppercase lg:text-glass-red-dark lg:font-black lg:block lg:text-right lg:mt-auto lg:text-4xl">
                more</NuxtLink>
            </p>
          </div>
        </li>
        <li class="flex flex-col gap-2 sm:gap-6 sm:flex-row">
          <img src="/images/blog-2.png" alt="" class="object-cover sm:w-1/2" />
          <div class="flex flex-col">
            <p class="text-2xl lg:text-[32px] text-glass-red-dark">
              街頭潮人訪問
            </p>
            <p class="flex justify-between">
              <span class="font-medium font-roboto">Street Interview</span><time datetime="2020/02/02"
                class="font-medium opacity-70">2020/02/02</time>
            </p>
            <p
              class="relative text-[#555555] mt-1 line-clamp-6 hidden sm:block lg:text-xl lg:mt-4 lg:line-clamp-none lg:flex lg:flex-col lg:h-full">
              炎熱的夏季裡，衣著選擇經常希望以簡潔的風格為主，但有時單純只穿搭 T
              恤或短袖開襟襯衫，又覺得整體造型度有點不足嗎？那麼不妨可以透過「配件」，為穿搭點綴出與眾不同的視覺層次，而本季有哪些必備的配件系列呢？一起從以下推薦的
              3 款單品，讓你瞬間帥氣爆棚散發型男品味⋯⋯<a :href="`${$config.app.baseURL}blog/街頭潮人訪問`"
                class="transition-opacity duration-300 hackMoreLink font-roboto hover:opacity-75 lg:uppercase lg:text-glass-red-dark lg:font-black lg:block lg:text-right lg:mt-auto lg:text-4xl">more</a>
            </p>
          </div>
        </li>
        <li class="flex flex-col gap-2 sm:gap-6 sm:flex-row">
          <img src="/images/blog-3.png" alt="" class="object-cover sm:w-1/2" />
          <div class="flex flex-col">
            <p class="text-2xl lg:text-[32px] text-glass-red-dark">
              春季新品上市
            </p>
            <p class="flex justify-between">
              <span class="font-medium font-roboto">New Selection</span><time datetime="2020/02/02"
                class="font-medium opacity-70">2020/02/02</time>
            </p>
            <p
              class="relative text-[#555555] mt-1 line-clamp-6 hidden sm:block lg:text-xl lg:mt-4 lg:line-clamp-none lg:flex lg:flex-col lg:h-full">
              2020
              年春季的光學眼鏡跳脫前幾季流行的復古框型，比起圓框與小方框等文青風格，偏向個性款式的眉框眼鏡成為這一季的耀眼之星。除了經典款式如黑色眉框落在長方形鏡面上，眉宇之間露出專業莊重的特殊氣質，包覆在圓形鏡框上的貓眼型眉框則是強調出特殊設計感，俐落時髦的造型搭配一件簡單的白襯衫就相當有型，是喜愛時尚質感人士絕不能錯過的必備款式⋯⋯<a
                :href="`${$config.app.baseURL}blog/春季新品上市`"
                class="transition-opacity duration-300 hackMoreLink font-roboto hover:opacity-75 lg:uppercase lg:text-glass-red-dark lg:font-black lg:block lg:text-right lg:mt-auto lg:text-4xl">more</a>
            </p>
          </div>
        </li>
        <li class="flex flex-col gap-2 sm:gap-6 sm:flex-row">
          <img src="/images/blog-4.png" alt="" class="object-cover sm:w-1/2" />
          <div class="flex flex-col">
            <p class="text-2xl lg:text-[32px] text-glass-red-dark">
              設計師獨享鏡框優惠
            </p>
            <p class="flex justify-between">
              <span class="font-medium font-roboto">Sales for Designer</span><time datetime="2020/01/18"
                class="font-medium opacity-70">2020/01/18</time>
            </p>
            <p
              class="relative text-[#555555] mt-1 line-clamp-6 hidden sm:block lg:text-xl lg:mt-4 lg:line-clamp-none lg:flex lg:flex-col lg:h-full">
              2020
              年春季的光學眼鏡跳脫前幾季流行的復古框型，比起圓框與小方框等文青風格，偏向個性款式的眉框眼鏡成為這一季的耀眼之星。除了經典款式如黑色眉框落在長方形鏡面上，眉宇之間露出專業莊重的特殊氣質，包覆在圓形鏡框上的貓眼型眉框則是強調出特殊設計感，俐落時髦的造型搭配一件簡單的白襯衫就相當有型，是喜愛時尚質感人士絕不能錯過的必備款式⋯⋯<a
                :href="`${$config.app.baseURL}blog/設計師獨享鏡框優惠`"
                class="transition-opacity duration-300 hackMoreLink font-roboto hover:opacity-75 lg:uppercase lg:text-glass-red-dark lg:font-black lg:block lg:text-right lg:mt-auto lg:text-4xl">more</a>
            </p>
          </div>
        </li>
        <li class="flex flex-col gap-2 sm:gap-6 sm:flex-row">
          <img src="/images/blog-5.png" alt="" class="object-cover sm:w-1/2" />
          <div class="flex flex-col">
            <p class="text-2xl lg:text-[32px] text-glass-red-dark">
              抵抗夏日大作戰
            </p>
            <p class="flex justify-between">
              <span class="font-medium font-roboto">Summer Special</span><time datetime="2020/01/18"
                class="font-medium opacity-70">2020/01/18</time>
            </p>
            <p
              class="relative text-[#555555] mt-1 line-clamp-6 hidden sm:block lg:text-xl lg:mt-4 lg:line-clamp-none lg:flex lg:flex-col lg:h-full">
              2020
              年春季的光學眼鏡跳脫前幾季流行的復古框型，比起圓框與小方框等文青風格，偏向個性款式的眉框眼鏡成為這一季的耀眼之星。除了經典款式如黑色眉框落在長方形鏡面上，眉宇之間露出專業莊重的特殊氣質，包覆在圓形鏡框上的貓眼型眉框則是強調出特殊設計感，俐落時髦的造型搭配一件簡單的白襯衫就相當有型，是喜愛時尚質感人士絕不能錯過的必備款式⋯⋯<a
                :href="`${$config.app.baseURL}blog/抵抗夏日大作戰`"
                class="transition-opacity duration-300 hackMoreLink font-roboto hover:opacity-75 lg:uppercase lg:text-glass-red-dark lg:font-black lg:block lg:text-right lg:mt-auto lg:text-4xl">more</a>
            </p>
          </div>
        </li>
      </ul>
      <Pagination />
    </main>
    <Footer />
  </div>
</template>

<style lang="sass" scoped>
.hackMoreLink
  @media (min-width: 768px) and (max-width: 1023px)
    position: absolute
    bottom: 0
    right: 0
    display: block
    background: rgb(255,255,255)
    background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 100%)
    width: 4em
    text-align: right
    &::before
      content: '...'
</style>
