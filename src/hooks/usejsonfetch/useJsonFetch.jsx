import { useState, useEffect, useRef } from "react";

export default function useJsonFetch(url, opts) {
  const [data, setData] = useState(opts.initialData);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) { throw new Error(response.statusText); }
        const jsonData = await response.json();
        setData(jsonData);
        setError(null);
      } catch (e) {
        setError(e);
      } finally { setLoading(false); }
    };
    fetchData();
  }, []);

  return [{ data, isLoading, hasError }];
}
