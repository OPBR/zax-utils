/*
 * @Author: zhangy
 * @Date: 2023-07-24 10:27:07
 */
export default (jsonstr: any) => {
  if (typeof jsonstr == 'string') {
    try {
      JSON.parse(jsonstr)
      return true
    } catch (e) {
      return false
    }
  }
  return false
}
