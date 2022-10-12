import useSWR from "swr";

export const usePosts = (posts, pageIndex, limit) => {
  const { data, error, isValidating } = useSWR(
    `/api/posts?page=${pageIndex}&limit=${limit}`,
    {
      fallbackData: posts,
      revalidateOnFocus: false,
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
    isValidating,
    error,
  };
};
