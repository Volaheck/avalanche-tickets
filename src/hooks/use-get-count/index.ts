import { useEffect, useState } from "react";

interface Count {
  count: number;
}

export function useGetCount(resource: string): MaybeLoading<Count> {
  const [state, setState] = useState<MaybeLoading<Count>>({
    data: null as Maybe<Count>,
    isLoading: true,
  });

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/${resource}/count`)
      .then((res) => res.json())
      .then((res) => {
        setState({
          data: res,
          isLoading: false,
        });
      });
  }, [resource]);

  return state;
}
