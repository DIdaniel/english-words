import { useState, useEffect} from 'react';

export default function useFetch(url: string) {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(res => {
        return res.json()
      })
      .then(data => {
        setdata(data);
      })
  }, [url]);

  return data;
}