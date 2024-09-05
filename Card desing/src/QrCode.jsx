import React, { useState } from 'react'
import './QrCode.css';
// import image from './asserts/qr_code_PNG33.png';
// import image1 from './asserts/photo2.jpeg';

function QrCode() {
    const[img,setImg]=useState("");
    const[loading,setLoading]=useState(false);
    const[qrData,setQrData]=useState("https://youtube.com/");
    const[qrSize,setQrSize]=useState("150")
    
    async function QrCodeGenerate(){
       setLoading(true);
       try{
        const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
        setImg(url);
       }catch(error){
        console.error("Error generating QR code",error);
       }
       finally{
        setLoading(false);
       }
    }
    function DownloadQrCode(){
        fetch(img)
        .then((response)=> response.blob())
        .then((blob)=>{
            const link=document.createElement("a");
            link.href=URL.createObjectURL(blob);
            link.download="qrcode.png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }).catch((error)=>{
            console.error("Error downloading QR code", error);
        });
    }
  return (
    <div className='app-container'>
      <h3>QR CODE GENERATOR</h3>
      {loading && <p>Please Wait...!</p>}
      {img && <img src={img} alt="qrcode" className='qrcode-img'/>}
      <div>
        <label htmlFor="dataInput" className='input-label'>Data for QR Code : </label>
        <input type="text" id='dataInput'  placeholder='Enter data for QR code' value={qrData} onChange={(e)=>setQrData(e.target.value)}/>
        <label htmlFor="sizeInput" className='input-label'>Image Size (E.g., 150) : </label>
        <input type="text" id='sizeInput' placeholder='Enter image size' value={qrSize} onChange={(e)=>setQrSize(e.target.value)}/>
        <button className='generate' onClick={QrCodeGenerate} disabled={loading}>Generate QR Code</button>
        <button className='download' onClick={DownloadQrCode}>Download QR Code</button>
        <footer>Designed by <span>Thibash hacker</span></footer>
      </div>
    </div>
  )
}

export default QrCode
