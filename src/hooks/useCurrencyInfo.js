import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/b110fb8c495c48681aadfb38/latest/${currency}`);
        const result = await response.json();
        if (response.ok) {
          setData(result.conversion_rates);
        } else {
          setError(result);
        }
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [currency]);

  return { data, error };
}

export default useCurrencyInfo;
