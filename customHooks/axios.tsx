import {useState, useEffect} from 'react';
import axios, {AxiosResponse, AxiosError} from 'axios';

type ApiResponse<T> = AxiosResponse<T> | null;
type ApiError = AxiosError | null;

function useAxios<T>(url: string): [ApiResponse<T>, ApiError, boolean] {
  const [data, setData] = useState<ApiResponse<T>>(null);
  const [error, setError] = useState<ApiError>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<T>(url);
        setData(response);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return [data, error, loading];
}

export default useAxios;
