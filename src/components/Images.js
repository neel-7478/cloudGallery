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
      <div className='container'>
        <div className='row'>
          {
            !docs ? "" : docs.map((item) => {
              return (
                <div className='col-md-4'>
                  <div className="card" style={{ width: "30rem",marginTop:"10px"}}>
                    <img src={`http://localhost:5000/file/${item.filename}`} className="card-img-top" alt="..." />
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div >
  )
}

export default Images


