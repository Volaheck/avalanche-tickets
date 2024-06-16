declare type Maybe<T> = T | null | undefined;

declare type MaybeLoading<T> = { isLoading: boolean; data: Maybe<T> };
