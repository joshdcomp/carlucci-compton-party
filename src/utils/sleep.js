function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
export default async function sleep(time, fn, ...args) {
  await timeout(time)
  return fn(...args)
}
