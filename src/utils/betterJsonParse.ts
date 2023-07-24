/*
 * @Author: zhangy
 * @Date: 2023-07-24 10:30:38
 */
export default <T>(str: T) => {
  let targetData = str
  if (typeof str === 'string') {
    const regx = /^\d+$/g
    if (regx.test(str)) {
      return targetData
    }
    try {
      targetData = JSON.parse(str)
    } catch (e) {
      targetData = str
    }
  }
  return targetData
}
