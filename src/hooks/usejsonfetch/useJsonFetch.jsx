import { useState, useEffect, useRef } from "react";

export default function useJsonFetch(url, opts) {
  const [data, setData] = useState(opts.initialData);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(null);
  const timestampRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      const timestamp = Date.now();
      timestampRef.current = timestamp;
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) { throw new Error(response.statusText); }
        const jsonData = await response.json();
        if (timestamp.current === timestamp) { setData(jsonData); }
        setError(null);
      } catch (e) {
        setError(e);
      } finally { setLoading(false); }
    };
    fetchData();
  }, []);

  return [{ data, isLoading, hasError }];
}