<script setup lang="ts">
useHead({
  title: "首頁"
})
</script>

<template>
  <div>
    <Header />
    <main>
      <!-- banner -->
      <section class="banner bg-index-header bg-cover bg-center min-[1920px]:bg-contain">
        <div class="container flex items-center justify-end  h-[392px] sm:h-[787px]">
          <div class="text-right banner__info text-glass-red-dark">
            <p class="sm:text-4xl">Promise-Desert 2020 早春系列</p>
            <h1 class="text-2xl font-bold sm:text-[4rem]">看得清，才能看得遠</h1>
            <a href="#" class="inline-block text-xl py-[6px] px-[12px] bg-glass-red text-white mt-2 sm:mt-1">立即購買</a>
          </div>
        </div>
      </section>
      <!-- about -->
      <section class="bg-glass-pink">
        <div class="container py-10 text-glass-red-dark sm:py-20">
          <h2 class="text-2xl font-bold text-center sm:text-5xl">用專業的心，做專業的事</h2>
          <ul class="flex flex-col gap-8 mt-8 sm:gap-6 sm:flex-row sm:flex-wrap">
            <li class="text-center sm:w-50-offset lg:flex-1">
              <span class="material-symbols-outlined text-[5.25rem]">paid</span>
              <h3 class="mt-6 text-2xl font-bold">單一價格</h3>
              <p class="mt-2 text-left text-black">無論任何度數皆不需追加費用即可擁有適合自己的薄型球面鏡片。</p>
            </li>
            <li class="text-center sm:w-50-offset lg:flex-1">
              <span class="material-symbols-outlined text-[5.25rem]">schedule</span>
              <h3 class="mt-6 text-2xl font-bold">20 分鐘即可取件</h3>
              <p class="mt-2 text-left text-black">為了您的寶貴時間著想，以豐富專業知識與技術將結帳到交件的時間縮減至最快 20 分鐘即可完成。</p>
            </li>
            <li class="text-center sm:w-50-offset lg:flex-1">
              <span class="material-symbols-outlined text-[5.25rem]">favorite</span>
              <h3 class="mt-6 text-2xl font-bold">安心售後服務</h3>
              <p class="mt-2 text-left text-black">我們提供長達 120 天的保固售後服務，不限會員資格皆享有免費深層保養及專業維修服務。</p>
            </li>
            <li class="text-center sm:w-50-offset lg:flex-1">
              <span class="material-symbols-outlined text-[5.25rem]">voicemail</span>
              <h3 class="mt-6 text-2xl font-bold">關於鏡片</h3>
              <p class="mt-2 text-left text-black">使用世界知名頂級品牌，抗UV、防汙鍍膜薄型非球面鏡片。</p>
            </li>
          </ul>
        </div>
      </section>
      <!-- classic -->
      <section class="container py-10 text-center sm:py-20">
        <h2 class="text-2xl font-bold text-glass-red-dark sm:text-5xl ">經典系列鏡框</h2>
        <ul class="flex flex-col gap-6 mt-6 sm:mt-12 md:flex-row">
          <li class="flex-1 break-all">
            <img src="/images/home-section3-1.png" alt="" class="mx-auto sm:max-w-[336px] sm:w-full lg:max-w-full">
            <h3 class="text-5xl font-roboto text-glass-red italic font-[900] mt-2">OPTICAL</h3>
          </li>
          <li class="flex-1 break-all">
            <img src="/images/home-section3-2.png" alt="" class="mx-auto sm:max-w-[336px] sm:w-full lg:max-w-full">
            <h3 class="text-5xl font-roboto text-glass-red italic font-[900] mt-2">SUNGLASSES</h3>
          </li>
          <li class="flex-1 break-all">
            <img src="/images/home-section3-3.png" alt="" class="mx-auto sm:max-w-[336px] sm:w-full lg:max-w-full">
            <h3 class="text-5xl font-roboto text-glass-red italic font-[900] mt-2">FUNCTIONAL</h3>
          </li>
        </ul>
      </section>
      <!-- cross -->
      <section class="bg-black bg-cover bg-index-cross">
        <div class="container py-10 text-center sm:py-20">
          <h2 class="text-2xl font-bold text-white sm:text-5xl">聯名設計鏡框</h2>
          <ul class="flex flex-col gap-6 mt-6 sm:mt-12 sm:gap-0 lg:flex-row">
            <li class="flex-1">
              <picture>
                <source srcset="/images/home-section4-1.png" media="(min-width: 640px)" />
                <img src="/images/home-section4-1-sm.png" alt="" />
              </picture>
              <h3 class="font-roboto italic text-5xl text-glass-red bg-white font-[900] py-2">DOUBLE A+</h3>
            </li>
            <li class="flex-1">
              <picture>
                <source srcset="/images/home-section4-2.png" media="(min-width: 640px)" />
                <img src="/images/home-section4-2-sm.png" alt="" />
              </picture>
              <h3 class="font-roboto italic text-5xl text-glass-red bg-white font-[900] py-2">YOUTH</h3>
            </li>
          </ul>
        </div>
      </section>
      <!-- recommend -->
      <section class="container py-10 sm:py-20">
        <h2 class="text-2xl font-bold text-center text-glass-red-dark sm:text-5xl">顧客推薦</h2>
        <ul class="flex flex-col gap-6 mt-6 sm:flex-row sm:flex-wrap lg:flex-nowrap">
          <li class="flex flex-col rounded-[4px] shadow-glass-boxShadow min-h-[511px] sm:w-50-offset lg:w-1/4">
            <img src="/images/home-section5-1.png" alt="" class="object-cover w-full h-[306px]">
            <div class="flex flex-col flex-1 gap-2 p-4">
              <p class="font-medium">Jessy</p>
              <p>眼鏡品質優良，下次還會想來這邊購買！</p>
              <time datetime="2021/06/20" class="mt-auto">2021/06/20</time>
            </div>
          </li>
          <li class="flex flex-col rounded-[4px] shadow-glass-boxShadow min-h-[511px] sm:w-50-offset lg:w-1/4">
            <img src="/images/home-section5-2.png" alt="" class="object-cover w-full h-[306px]">
            <div class="flex flex-col flex-1 gap-2 p-4">
              <p class="font-medium">凱倫</p>
              <p>做工細緻、鏡架很輕盈，待久也不會覺得有負擔，推薦給大家！</p>
              <time datetime="2021/04/18" class="mt-auto">2021/04/18</time>
            </div>
          </li>
          <li class="flex flex-col rounded-[4px] shadow-glass-boxShadow min-h-[511px] sm:w-50-offset lg:w-1/4">
            <img src="/images/home-section5-3.png" alt="" class="object-cover w-full h-[306px]">
            <div class="flex flex-col flex-1 gap-2 p-4">
              <p class="font-medium">悠悠</p>
              <p>謝謝客服人員的詳細回答，成功買到了喜歡的眼鏡，下次會再回購！</p>
              <time datetime="2020/12/25" class="mt-auto">2020/12/25</time>
            </div>
          </li>
          <li class="flex flex-col rounded-[4px] shadow-glass-boxShadow min-h-[511px] sm:w-50-offset lg:w-1/4">
            <img src="/images/home-section5-4.png" alt="" class="object-cover w-full h-[306px]">
            <div class="flex flex-col flex-1 gap-2 p-4">
              <p class="font-medium">Kyuan</p>
              <p>服務很好，品質沒有任何問題，非常喜歡。</p>
              <time datetime="2020/10/31" class="mt-auto">2020/10/31</time>
            </div>
          </li>
        </ul>
      </section>
      <!-- contact -->
      <section class="bg-glass-pink">
        <div class="container py-10 sm:py-20">
          <h2 class="text-2xl font-bold text-center sm:text-5xl text-glass-red-dark">聯絡我們</h2>
          <div class="sm:mt-12 mt-6 max-w-[636px] mx-auto">
            <p class="sm:text-xl">
              我們相當重視您的意見，若您有任何疑問，可先參考「常見問題」，若仍有任何問題，請填妥以下資料，我們會在近期與您聯繫。
            </p>
            <form action="" class="mt-6">
              <div class="form-group">
                <label for="name">姓名</label>
                <input class="block w-full border border-solid border-black px-3 py-[6px] mt-2" type="text" id="name" placeholder="陳小明">
              </div>
              <div class="mt-4 form-group">
                <label for="tel">聯絡電話</label>
                <input class="block w-full border border-solid border-black px-3 py-[6px] mt-2" type="tel" id="tel" placeholder="0912-345-678" pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}">
              </div>
              <div class="mt-4 form-group">
                <label for="email">電子郵件</label>
                <input class="block w-full border border-solid border-black px-3 py-[6px] mt-2" type="email" id="email" placeholder="example@email.com" pattern="/.+@[A-Za-z0-9]*\.[A-Za-z].+[A-Za-z]/g">
              </div>
              <div class="mt-4 form-group">
                <label for="message">意見反應</label>
                <textarea id="message" class="block w-full border border-solid border-black px-3 py-[6px] mt-2" placeholder="請輸入您的意見" rows="5"></textarea>
              </div>
              <div class="flex items-start gap-1 mt-4 form-group sm:items-center">
                <input type="checkbox" name="agree" id="agree">
                <span class="material-symbols-outlined">check_box_outline_blank</span>
                <span class="material-symbols-outlined icon-checked">check_box</span>
                <label for="agree">我同意隱私權政策，並同意依隱私權政策中所述的方式處理自己的資料。</label>
              </div>
              <div class="mt-6 text-center form-group sm:mt-12">
                <button type="submit" class="w-full max-w-[416px] bg-glass-red hover:bg-glass-red-dark text-white py-4 font-bold">確認送出</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<style lang="sass" scoped>
// -------------------------------------
//   Page
// -------------------------------------
.bg-index-header
  background-image: url(/images/home-header-sm.png)
  @screen lg
    background-image: url(/images/home-header.png)

.bg-index-cross
  background-image: url(/images/index-bg-sm.png)
  @screen md
    background-image: url(/images/index-md.png)
  @screen sm
    background-image: url(/images/index-bg.png)

// ----- Checkbox UI ----- //
[type="checkbox"]
  display: none
  ~ span
    &.icon-checked
      display: none
  &:checked
    ~ span
      display: none
      &.icon-checked
        display: block
</style>
