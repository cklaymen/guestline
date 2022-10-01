import { useEffect, useState } from "react";

export interface UseDataResult<T> {
  data?: T;
  loading: boolean;
  error: boolean;
}

function useData<P, T>(url: string, mapFn?: (data: P) => T): UseDataResult<T> {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      setError(false);
      try {
        const response = await fetch(url);
        setData(mapFn ? mapFn(await response.json()) : await response.json());
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    }
    loadData();
  }, [url, mapFn]);

  return { data, loading, error };
}

export default useData;
