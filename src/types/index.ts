/*
 * @Author: zhangy
 * @Date: 2023-07-24 15:49:36
 */
export type ValueOfObject<T> = {
  [P in keyof T]: T[P]
}

export type ValueOf<T> = T[keyof T]
