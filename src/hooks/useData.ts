import { useEffect, useState } from "react";

export interface UseDataResult<T> {
  data?: T;
  loading: boolean;
  error: boolean;
}

function useData<T>(loadDataFn: () => Promise<T>): UseDataResult<T> {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(false);
      try {
        const response = await loadDataFn();
        setData(response);
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    }
    fetchData();
  }, [loadDataFn]);

  return { data, loading, error };
}

export default useData;
