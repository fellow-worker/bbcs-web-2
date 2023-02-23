import useConfig from 'hooks/useConfig';
import useFetch from 'hooks/useFetch';

function useFetchJson<T>(url: string) {
  const config = useConfig();
  const fetchJson = async () => {
    const response = await fetch(`${config.api}/${url}`);
    return await response.json() as T;
  };

  return useFetch(fetchJson);
}

export default useFetchJson;
