const files = require.context('.', true, /\.js$/)
const moudles = []

files.keys().forEach((key) => {
  if (key === './index.js') return
  moudles.push(files(key).default)
})
console.log(moudles)
export const $Routers = moudles