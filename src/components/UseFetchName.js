import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function UseFetchName() {
    const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setData(res.data))
      .catch((er) => console.log(er));
  }, []);

  return {data}
}
