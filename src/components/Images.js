import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Images = () => {
  const [docs, setDocs] = useState(null);
  useEffect(() => {
    const url = "http://localhost:5000/"
    const config = {
      headers: {
        "Content-Type": "image/jpeg",
      }
    }
    axios.get(url, config).then((response) => {
      setDocs(response.data);
    });
  }, [])
  return (
    <div>
      <div className='container'>
        <div className='row'>
          {
            docs ? docs.map((item) => {
              return (
                <div className='col-md-4' key={item._id}>
                  <div className="card" style={{ width: "30rem", marginTop: "10px" }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }} />
                    <img src={`http://localhost:5000/file/${item.filename}`} alt="img" />
                  </div>
                </div>
              )
            }) : "Nothing"
          }
        </div>
      </div>
    </div >
  )
}

export default Images


