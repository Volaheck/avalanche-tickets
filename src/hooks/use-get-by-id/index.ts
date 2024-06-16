import { useEffect, useState } from "react";

export function useGetById<T>(resource: string, id: string): MaybeLoading<T> {
  const [state, setState] = useState<MaybeLoading<T>>({
    data: null as Maybe<T>,
    isLoading: true,
  });

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/${resource}/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setState({
          data: res,
          isLoading: false,
        });
      });
  }, [resource, id]);

  return state;
}
