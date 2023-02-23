import { useEffect, useState } from 'react';

function useFetchWithRefresh<T>(fetch: () => Promise<T>) {
  const [data, setData] = useState<T | undefined>();
  const [fetching, setFetching] = useState(false);

  const refresh = async () => {
    const fetched = await fetch();
    setData(fetched);
  };

  useEffect(() => {
    if (fetching) return;
    setFetching(true);
    fetch().then(fetched => setData(fetched));
  }, []);

  return { data, refresh, setData };
}

function useFetch<T>(fetch: () => Promise<T>) {
  const { data } = useFetchWithRefresh(fetch);
  return data;
}

export function useFetchWithState<T>(fetch: () => Promise<T>) {
  const { data, setData } = useFetchWithRefresh(fetch);
  return { data, setData };
}

export default useFetch;
