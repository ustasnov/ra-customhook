import { useState, useEffect, useRef } from "react";

export default function useJsonFetch(url, opts = null) {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, opts);
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
