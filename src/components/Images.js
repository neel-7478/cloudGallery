import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Images = () => {
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/"
    const config = {
      headers: {
        "Content-Type": "image/jpeg",
      }
    }
    axios.get(url, config).then((response) => {
      setDocs(response.data)
      console.log(response.data)
    });
  }, [])
  return (
    <div>
      {
       !docs ? "":docs.map((item) => {
          return (
            <div className='container' key={item._id}>
            <div className='card'>
            <img src={`http://localhost:5000/file/${item.filename}`} alt="" />
            </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Images


