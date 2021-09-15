import { useCallback, useEffect, useState } from 'react';

const useFetch = (url, options = {}) => {
  const [fetchData, setFetchData] = useState([]);
  const [status, setStatus] = useState('none');

  const fetchDataCallback = useCallback(async (_url, _options = {}) => {
    const response = await fetch(_url, _options);
    const data = await response.json();
    setFetchData(data);
    setStatus('success');
  }, []);

  useEffect(() => {
    setStatus('fetching');
    fetchDataCallback(url, options);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [fetchData, status];
};

export default useFetch;
