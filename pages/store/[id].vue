<script lang="ts" setup>
const { params } = useRoute();
useSeoMeta({
  title: `${params.id} - 門市據點`,
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
        <span class="sm:text-2xl">選擇分店</span>
        <select
          name="address"
          id="address"
          class="border border-solid border-[#CED4DA] max-w-[304px] flex-grow py-[6px] px-3"
        >
          <option value="" class="text-lg">-- 請選擇分店 --</option>
          <option value="台北中山旗艦店" class="text-lg" selected>
            台北中山旗艦店
          </option>
        </select>
      </div>
      <!-- store -->
      <div class="mt-6 sm:mt-10">
        <div class="flex flex-wrap -mx-3 gap-y-6 md:gap-y-12">
          <div class="px-3 sm:flex sm:gap-4 md:block md:gap-0 md:w-5/12">
            <img
              :src="`/images/store-1.png`"
              alt="台北中山旗艦店"
              class="object-cover sm:w-1/2 md:w-auto"
            />
            <div class="border border-solid divide-y sm:w-1/2 md:w-auto">
              <h2 class="px-6 py-2 text-2xl">台北中山旗艦店</h2>
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
          </div>
          <div class="w-full px-3 aspect-video md:w-7/12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.4585244906484!2d121.52653047687623!3d25.05244357780446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a966f6fc092d%3A0x9f740ea896779b57!2zMTA0OTHlj7DljJfluILkuK3lsbHljYDljZfkuqzmnbHot6_kuozmrrUyNeiZnw!5e0!3m2!1szh-TW!2stw!4v1722419260114!5m2!1szh-TW!2stw"
              width="100%"
              height="100%"
              style="border: 0"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            >
            </iframe>
          </div>
        </div>
        <a
          href="#"
          @click="$router.back()"
          class="text-[19px] py-2 px-4 bg-black hover:opacity-75 transition-opacity duration-300 block w-3/12 text-white text-center mt-6 mx-auto sm:mx-0 sm:inline-block sm:w-auto"
          aria-label="返回門市列表"
          >返回</a
        >
      </div>
    </main>
    <Footer />
  </div>
</template>
