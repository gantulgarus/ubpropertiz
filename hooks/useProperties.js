import { useState } from "react";
import useSWR from "swr";

const PAGE_LIMIT = 3;

export const useProperties = (properties) => {
  const [pageIndex, setPageIndex] = useState(0);
  const { data, error } = useSWR(
    `/api/properties?page=${pageIndex}&limit=${PAGE_LIMIT}`,
    {
      fallbackData: properties,
      onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        console.log("error try....");
        // Never retry on 404.
        if (error.status === 404) return;

        // Never retry for a specific key.
        if (key === "/api/properties") return;

        // Only retry up to 10 times.
        if (retryCount >= 10) return;

        // Retry after 5 seconds.
        setTimeout(() => revalidate({ retryCount: retryCount + 1 }), 1000);
      },
      //refreshInterval: 1,
    }
  );

  return {
    data,
    isLoading: !error && !data,
    error,
  };
};