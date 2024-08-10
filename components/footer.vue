<template>
  <footer class="text-white bg-glass-red">
    <div class="container py-6 sm:py-12 lg:px-0">
      <div class="flex items-start justify-between">
        <div>
          <nav>
            <ul class="gap-12 py-[6px] hidden sm:flex">
              <li>
                <NuxtLink
                  to="/"
                  class="transition-opacity duration-300 hover:opacity-50"
                  >首頁</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/series"
                  class="transition-opacity duration-300 hover:opacity-50"
                  >系列鏡框</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/store"
                  class="transition-opacity duration-300 hover:opacity-50"
                  >門市據點</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/blog"
                  class="transition-opacity duration-300 hover:opacity-50"
                  >部落格</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/qa"
                  class="transition-opacity duration-300 hover:opacity-50"
                  >常見問題</NuxtLink
                >
              </li>
            </ul>
          </nav>
          <ul class="sm:mt-9">
            <li>
              <a
                href="tel:0800-000-000"
                class="flex items-center gap-2 break-all transition-opacity duration-300 hover:opacity-50 sm:gap-1 sm:text-4xl"
                aria-label="Glasses 門市電話"
              >
                <span class="material-symbols-outlined sm:text-4xl">call</span
                >0800-000-000
              </a>
            </li>
            <li class="mt-2">
              <a
                href="email:glasses@business.com"
                class="flex items-center gap-2 break-all transition-opacity duration-300 hover:opacity-50 sm:gap-1 sm:text-4xl"
                aria-label="Glasses 門市電子信箱"
              >
                <span class="material-symbols-outlined sm:text-4xl">mail</span
                >glasses@business.com
              </a>
            </li>
          </ul>
        </div>
        <ul class="flex gap-2 sm:gap-8 md:gap-4">
          <li>
            <a href="#" class="transition-opacity duration-300 hover:opacity-50"
              ><img
                class="max-w-6 sm:max-w-12 md:max-w-10"
                src="/images/ic_social_fb.png"
                alt="Glasses 官方臉書"
            /></a>
          </li>
          <li>
            <a href="#" class="transition-opacity duration-300 hover:opacity-50"
              ><img
                class="max-w-6 sm:max-w-12 md:max-w-10"
                src="/images/ic_social_ig.png"
                alt="Glasses 官方 Instagram"
            /></a>
          </li>
          <li>
            <a href="#" class="transition-opacity duration-300 hover:opacity-50"
              ><img
                class="max-w-6 sm:max-w-12 md:max-w-10"
                src="/images/ic_social_line.png"
                alt="Glasses 官方 Line"
            /></a>
          </li>
        </ul>
      </div>
      <hr class="mt-5 sm:mt-[31px]" />
      <div
        class="flex flex-col justify-between gap-2 mt-4 sm:flex-row sm:mt-8 sm:gap-0"
      >
        <p>Copyright © 2020 Glasses.All rights reserved.</p>
        <ul class="flex flex-col gap-2 sm:gap-12 sm:flex-row">
          <li>
            <a href="#" class="transition-opacity duration-300 hover:opacity-50"
              >隱私權政策</a
            >
          </li>
          <li>
            <a href="#" class="transition-opacity duration-300 hover:opacity-50"
              >服務條款</a
            >
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
