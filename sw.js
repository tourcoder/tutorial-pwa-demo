self.addEventListener("install", () => {
  // 安装回调
  console.log("安装")
})

self.addEventListener("activate", () => {
  // 激活回调
  console.log("激活")
})

self.addEventListener("fetch", event => {
  console.log("抓取" + event.request.url)
})