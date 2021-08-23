import { useState } from "react";

const defaultOptions = {};

export const useFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fetchErrors, setFetchErrors] = useState(null);

  const fetchData = async (url, options) => {
    const controller = new AbortController();
    const signal = controller.signal;
    try {
      setLoading(true);

      setTimeout(() => {
        controller.abort();
      }, 6000);

      let op = options ? options : { ...defaultOptions, signal: signal };

      const response = await fetch(url, op);

      if (!response.ok) {
        let err = new Error("Error en la petición Fetch");
        err.status = response.status || "00";
        err.statusText = response.statusText || "Búsqueda sin resultados";
        throw err;
      }

      const data = await response.json();

      if (!signal.aborted) {
        setFetchErrors(null);
        setData(data);
      }
    } catch (error) {
      setData(null);
      setFetchErrors(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    fetchErrors,
    loading,
    fetchData,
  };
};
