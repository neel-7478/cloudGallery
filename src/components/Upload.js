
import axios from 'axios';
import React, { useState } from 'react'

const Upload = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const types = ['image/jpg', 'image/png', 'image/jpeg'];
    const handleChange = (e) => {
        let selected = e.target.files[0];
        e.preventDefault();
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        }
        else {
            setFile(null);
            setError("please select a jpg, png or jpeg file");
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = 'http://localhost:5000/file/upload';
        const formData = new FormData();
        formData.append('file', file);
        formData.append('filename', file.name);
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        };
        axios.post(url, formData, config).then((response) => {
            console.log(response.data)
        });
    
    }
    return (
        <div>
            <form>
                <input type="file" name='file' onChange={handleChange} />
                <button className=" my-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer" onClick={handleSubmit} disabled={file === null}>
                    submit
                </button>
                {error && <div className='error'>{error}</div>}
                {file && <div>{file.filename}</div>}
                <div>
                </div>
            </form>
        </div>
    )
}

export default Upload
