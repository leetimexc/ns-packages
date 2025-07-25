export const useAuthStore = defineStore('auth', () => {
  const token = ref('')
  const timeout = ref(0)
  const hasToken = computed(
    () =>
      // 布尔值 判断 token 非空
      !!token.value,
  )
  const isTokenTimeout = computed(
    () =>
      // 布尔值 判断 token 是否过期
      timeout.value < Date.now(),
  )

  function login(token: string, timeout: number) {
    // 调用api
    // 计算过期时间
    // token timeout 存储
  }
  function logout() {
    // 操作确认 （可选倒计时）
    // 刷新 token timeout
  }

  return { token, timeout, login, logout }
})
