export type ValueOfObject<T> = {
    [P in keyof T]: T[P];
};
export type ValueOf<T> = T[keyof T];
