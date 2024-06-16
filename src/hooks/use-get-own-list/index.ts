import { useEffect, useState } from "react";

export function useGetOwnList<T>(resource: string): Data<T> {
  const [state, setState] = useState<Data<T>>({
    total: 0,
    data: [] as T[],
    isLoading: true,
  });

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/${resource}`)
      .then((res) => res.json())
      .then((res) => {
        setState({
          total: res.total,
          data: res.data,
          isLoading: false,
        });
      });
  }, [resource]);

  return state;
}
