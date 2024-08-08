/**
 * 重導向中間件
 */
export default defineNuxtRouteMiddleware((to, from) => {
  // 系列鏡框
  if (to.name == 'series') {
    return navigateTo('/series/optical')
  }
})
