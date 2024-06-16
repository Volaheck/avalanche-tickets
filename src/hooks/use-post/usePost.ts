import { useState } from "react";
import { toast } from "react-toastify";

export function usePost<T, P>(
  resource: string,
): [(payload: P) => void, MaybeLoading<T>] {
  const [state, setState] = useState<MaybeLoading<T>>({
    data: null as Maybe<T>,
    isLoading: false,
  });

  const post = (payload: P) => {
    setState({ isLoading: true, data: null as Maybe<T> });

    fetch(`${process.env.REACT_APP_API_URL}/${resource}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        toast.error("Insufficient funds");
        setState({
          data: res,
          isLoading: false,
        });
      });
  };

  return [post, state];
}
