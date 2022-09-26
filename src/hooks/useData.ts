import { useEffect, useState } from "react";

interface UseDataResult<T> {
  data?: T;
  loading: boolean;
  error: boolean;
}

function useData<T>(url: string): UseDataResult<T> {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      setError(false);
      try {
        const response = await fetch(url);
        setData(await response.json());
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    }
    loadData();
  }, [url]);

  return { data, loading, error };
}

export default useData;
