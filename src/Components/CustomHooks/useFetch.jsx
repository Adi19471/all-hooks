import React, { useEffect, useState } from 'react'

const useFetch = (url) => {

  const [data,setData] = useState(null);

  useEffect(() =>{
    fetch(url)
    .then(res =>res.json())
    .then(response =>setData(response))
    .catch((err) =>{
      console.log(err)
    })
  },[url])
  return (

[data]
  )
}

export default useFetch