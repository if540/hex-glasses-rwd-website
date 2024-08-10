<script lang="ts" setup>
useSeoMeta({
  title: "門市據點",
});
</script>

<template>
  <div>
    <Header />
    <main class="container py-10 sm:py-20 lg:px-0">
      <h1
        class="text-2xl font-bold border-l-8 border-solid border-[#9F1213] pl-3 md:mt-4 sm:text-5xl"
      >
        門市據點
      </h1>
      <div class="flex items-center gap-2 mt-6 sm:gap-4 sm:mt-8">
        <span class="sm:text-2xl">選擇地區</span>
        <select
          name="address"
          id="address"
          class="border border-solid border-[#CED4DA] max-w-[304px] flex-grow py-[6px] px-3"
        >
          <option value="" class="text-lg">-- 請選擇地區 --</option>
          <option value="台北市" class="text-lg" selected>台北市</option>
        </select>
      </div>
      <!-- store list -->
      <div class="mt-6 sm:mt-10">
        <div class="flex flex-wrap -mx-3 gap-y-6 md:gap-y-12">
          <div class="px-3 sm:w-1/2 md:w-1/3" v-for="i in 5">
            <img
              :src="`${$config.app.baseURL}images/store-${i}.png`"
              alt="門市名稱"
            />
            <div class="border border-solid divide-y">
              <p class="px-6 py-2 text-2xl">台北中山旗艦店</p>
              <address>
                <ul class="px-6 py-4 space-y-2">
                  <li class="flex items-start text-xl not-italic">
                    <span
                      class="material-symbols-outlined text-xl mr-[10px]"
                      aria-hidden="true"
                      >call</span
                    >電話：<a href="tel:(02)000-1234">(02)000-1234</a>
                  </li>
                  <li class="flex items-start text-xl not-italic">
                    <span
                      class="material-symbols-outlined text-xl mr-[10px]"
                      aria-hidden="true"
                      >schedule</span
                    >營業時間：<time datetime="10:00-21:00">10:00-21:00</time>
                  </li>
                  <li class="flex items-start text-xl not-italic">
                    <span
                      class="material-symbols-outlined text-xl mr-[10px]"
                      aria-hidden="true"
                      >location_on</span
                    >地址：台北市中山區南京東路25巷2-1號
                  </li>
                </ul>
              </address>
            </div>
            <a
              href="/store/台北中山旗艦店?city=1"
              class="text-[19px] py-4 bg-black block text-white text-center hover:opacity-75 transition-opacity duration-300"
              aria-label="查看門市詳細資訊"
              >詳細資訊</a
            >
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>
