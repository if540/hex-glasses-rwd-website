<script lang="ts" setup>
const { params } = useRoute();
useHead({
  title: `${params.id} - 部落格`,
});
</script>

<template>
  <div>
    <Header />
    <nav class="bg-glass-red-dark">
      <div class="container flex items-center justify-between lg:px-0">
        <ul class="flex grow sm:grow-0 sm:space-x-12">
          <li class="text-center grow sm:grow-0">
            <a href="#"
              class="font-bold text-white py-[13px] block hover:opacity-50 duration-300 transition-opacity sm:text-xl">最新消息</a>
          </li>
          <li class="text-center grow sm:grow-0">
            <a href="#"
              class="font-bold text-white py-[13px] block hover:opacity-50 duration-300 transition-opacity sm:text-xl">特別企劃</a>
          </li>
          <li class="text-center grow sm:grow-0">
            <a href="#"
              class="font-bold text-white py-[13px] block hover:opacity-50 duration-300 transition-opacity sm:text-xl">新品上市</a>
          </li>
          <li class="text-center grow sm:grow-0">
            <a href="#"
              class="font-bold text-white py-[13px] block hover:opacity-50 duration-300 transition-opacity sm:text-xl">鏡框小知識</a>
          </li>
        </ul>
        <span class="material-symbols-outlined text-[40px] text-white hidden cursor-pointer sm:block">search</span>
      </div>
    </nav>
    <div class="container pt-4 pb-20 sm:pt-6 lg:px-0">
      <nav aria-label="breadcrumb">
        <ol class="flex breadcrumb">
          <li class="last:text-glass-red"><a href="/">首頁</a></li>
          <li class="last:text-glass-red">
            <a :href="`${$config.app.baseURL}blog`">部落格</a>
          </li>
          <li class="last:text-glass-red">特別企劃</li>
          <li class="last:text-glass-red">情人特別企劃</li>
        </ol>
        <ul class="flex mt-2 space-x-4">
          <li class="font-bold font-roboto text-glass-red md:text-2xl">
            #special
          </li>
          <li class="font-bold font-roboto text-glass-red md:text-2xl">
            #event
          </li>
        </ul>
      </nav>
      <article class="flex gap-6 mt-2">
        <main class="sm:w-9/12 md:w-8/12">
          <h1 class="text-2xl sm:text-5xl">情人特別企劃</h1>
          <h2 class="font-medium font-roboto sm:text-2xl">
            2020 Valentine’s Special
          </h2>
          <!-- content -->
          <div class="mt-4 sm:mt-6 md:mt-4">
            <img src="/images/blogpage-1.png" alt="" />
            <p class="mt-2 sm:mt-4 md:mt-2">
              一年一度西洋情人節即將到來，我們推出最強「情人節企劃」，為這個甜蜜的節日加溫。
              本次拍攝的鏡框款式與 NEEDS CLASSIC
              聯名設計款，偶爾跟另一半來個低調情侶單品，結合彼此喜好、找出合適框型款式，在這個春夏輕鬆搭出屬於你們的甜蜜默契！
            </p>
            <img src="/images/blogpage-2.png" alt="" class="mt-4 sm:mt-6 md:mt-10" />
            <p class="mt-2 sm:mt-4 md:mt-2">
              一年一度西洋情人節即將到來，我們推出最強「情人節企劃」，為這個甜蜜的節日加溫。
              本次拍攝的鏡框款式與 NEEDS CLASSIC
              聯名設計款，偶爾跟另一半來個低調情侶單品，結合彼此喜好、找出合適框型款式，在這個春夏輕鬆搭出屬於你們的甜蜜默契！
            </p>
            <img src="/images/blogpage-3.png" alt="" class="mt-4 sm:mt-6 md:mt-10" />
            <p class="mt-2 sm:mt-4 md:mt-2">
              一年一度西洋情人節即將到來，我們推出最強「情人節企劃」，為這個甜蜜的節日加溫。
              本次拍攝的鏡框款式與 NEEDS CLASSIC
              聯名設計款，偶爾跟另一半來個低調情侶單品，結合彼此喜好、找出合適框型款式，在這個春夏輕鬆搭出屬於你們的甜蜜默契！
            </p>
            <img src="/images/blogpage-4.png" alt="" class="mt-4 sm:mt-6 md:mt-10" />
            <p class="mt-2 sm:mt-4 md:mt-2">
              2/14(五)-2/20(日)<br />>至本店單筆消費滿2980元,<br />就送情人節限定眼鏡盒1個<br />期間優惠還有~~持他牌鏡框更換鏡片<br />薄型非球面鏡片折300元<br />濾藍光鏡片折500元
              快快帶上另一半<br />讓彼此每一次睜開眼，都被愛的視線包圍!
            </p>
          </div>
        </main>
        <aside class="hidden sm:w-3/12 md:w-4/12 sm:block">
          <p class="font-roboto font-bold text-glass-red flex items-center md:gap-2 md:text-[32px]">
            <span class="text-2xl leading-none material-symbols-outlined md:leading-none md:text-5xl">label</span>TAGS
          </p>
          <div class="flex-wrap mt-2 md:space-y-1">
            <span class="font-bold font-roboto text-glass-red md:text-2xl">#special</span>
            <span class="ml-4 font-bold font-roboto text-glass-red md:ml-6 md:text-2xl">#sale</span><br />
            <span class="font-bold font-roboto text-glass-red md:text-2xl">#new_item</span>
            <span class="ml-4 font-bold font-roboto text-glass-red md:ml-6 md:text-2xl">#interview</span><br />
            <span class="font-bold font-roboto text-glass-red md:text-2xl">#trivia</span>
            <span class="ml-4 font-bold font-roboto text-glass-red md:ml-6 md:text-2xl">#news</span><br />
            <span class="font-bold font-roboto text-glass-red md:text-2xl">#event</span>
          </div>
        </aside>
      </article>
      <div class="hidden mt-10 sm:block lg:w-8/12">
        <div class="pb-4 border-b border-solid border-[#707070]">
          <span class="font-bold font-roboto">Share</span>
          <ul class="inline-flex gap-4 ml-4 align-middle">
            <li>
              <a href="#" class="block w-6 transition-opacity duration-300 hover:opacity-50"
                aria-label="Glasses's Facebook"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512">
                  <path fill="#000000"
                    d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
                </svg></a>
            </li>
            <li>
              <a href="#" class="block w-6 transition-opacity duration-300 hover:opacity-50"
                aria-label="Glasses's Instagram"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512">
                  <path fill="#000000"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg></a>
            </li>
          </ul>
        </div>
        <div class="flex justify-between mt-6">
          <a href="#" class="flex items-center gap-3 transition-all duration-300 hover:gap-1"><span
              class="material-symbols-outlined" aria-hidden="true">arrow_back</span>上一篇：街頭潮人訪問 1</a>
          <a href="#" class="flex items-center gap-3 transition-all duration-300 hover:gap-1">下一篇：街頭潮人訪問 2<span
              class="material-symbols-outlined" aria-hidden="true">arrow_forward</span></a>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
