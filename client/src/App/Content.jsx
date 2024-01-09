import React, { useState } from 'react'
import axios from 'axios';

import { IoQrCodeOutline } from "react-icons/io5";

function Content() {

    const [link, setLink] = useState('');
    const [qrCode, setQrCode] = useState('');

    const generateQRCode = async () => {
        try {
            const response = await axios.post('http://localhost:3001/generate-qr', { link });
            setQrCode(response.data.qrCode);
        } catch (error) {
            console.error('Error generating QR Code:', error.message);
        }
    };

  return (
    <div>
        <h1 className='text-center text-2xl pt-10 pb-5'>QR Code Generator</h1>
        <div className='flex justify-center text-4xl pb-2'>
            <IoQrCodeOutline />
        </div>
        <div>
            <div>
                <h1 className='text-center pb-5'>
                    Enter Link
                </h1>
            </div>
            <div className='flex justify-center'>
                <label>
                <input className='border border-black rounded-full pl-2' type="text" value={link} onChange={(e) => setLink(e.target.value)} />
                </label>
            </div>
        </div>
        <div className='flex justify-center p-10'>
            <button onClick={generateQRCode} className='border border-black rounded-full px-5 py-2 hover:bg-black hover:text-white transition'>Generate QR Code</button>
        </div>
        <div className='flex justify-center'>
            {qrCode && <img src={qrCode} alt="QR Code" />}
        </div>
    </div>
  )
}

export default Content