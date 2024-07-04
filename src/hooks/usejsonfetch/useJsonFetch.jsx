import { useState, useEffect, useRef } from "react";

export default function useJsonFetch(url, opts = null) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      let jsonData = "";

      try {
        const response = await fetch(url, {});

        if (!response.ok) {
          if (response.status === 500) {
            jsonData = await response.json();
            throw new Error(jsonData.status);
          } else {
            throw new Error(`Error status: ${response.status}`);
          }
        }
        jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url])

  return { data, loading, error }
}
