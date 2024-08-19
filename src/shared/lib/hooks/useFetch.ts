import { useCallback, useEffect, useState } from "react";

export const useFetch = <Data = unknown, Error = unknown>(url: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Data | undefined>();
  const [error, setError] = useState<Error | undefined>();

  const run = useCallback(() => {
    setIsLoading(true);
    fetch(
      `https://raw.githubusercontent.com/Phangster/Accredify-FE-Interview-Endpoint/main/${url}`
    )
      .then((response) => response.json())
      .then(setData)
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, [url]);

  useEffect(() => {
    run();
  }, [run]);

  return {
    isLoading,
    data,
    error,
    run,
  };
};
