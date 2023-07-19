'use client'
import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const FileInput = () => {


const [dragging, setDragging] = useState(false);
const [fileDrop, setFileDrop] = useState(false);
const [fileName, setFileName] = useState('');

const fileInputRef = useRef(null);
const [mediaPopup, setMediaPopup] = useState();

const handleAddButtonClick = () => {
    fileInputRef.current.click();
};

const handleFileSelected = (e) => {
    const selectedFile = e.target.files[0];
    const file = e.target.files[0]
    console.log(file.name)
    setFileName(file.name)
    setFileDrop(true);
    };

useEffect(() => {
    const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
    };

    const handleDragOver = (e) => {
    e.preventDefault();
    };

    const handleDrop = (e) => {
    e.preventDefault();
    setFileDrop(true);
    setDragging(false);
    const dataFiles = Array.from(e.dataTransfer.files);
    console.log('Dropped files:', dataFiles);
    console.log(dataFiles.name)
    // Perform your logic with the dropped image files here
    };

    document.addEventListener('dragenter', handleDragEnter);
    document.addEventListener('dragover', handleDragOver);
    document.addEventListener('drop', handleDrop);

    return () => {
    document.removeEventListener('dragenter', handleDragEnter);
    document.removeEventListener('dragover', handleDragOver);
    document.removeEventListener('drop', handleDrop);
    };
}, []);

return (
    
    <>
    {/* this is the file upload popup that appears onclicking the add data button */}
    { !fileDrop && <div id='popup' className={`p-8 ${mediaPopup ? 'opacity-100 translate-y-0 scale-y-100' : 'opacity-0 translate-y-full scale-y-0'} top-0 left-0 fixed anim w-screen h-screen flex toppp justify-center items-center backdrop-blur-2xl `}>
        <div className={`w-11/12 relative md:w-1/2 topppp border-2 ${dragging ? 'border-blue-500 border-dashed' : 'border-blue-500/0 '} py-16 bg-white anim -mt-12 rounded-xl  p-8 text-center shadow-xl`}>
        <p>{ !fileDrop ? `${dragging ? 'Drop the file here' : 'Drag and drop a CSV, JSON, XLSX file'}` : `${fileName}` }</p>
        <input
            type="file"
            className='mt-8 bg-white p-4 px-8'
            style={{ display: 'none' }}
            id='img'
            ref={fileInputRef}
            accept=".csv, .json, .xlsx"
            onChange={handleFileSelected}
        />
        <button className= {`mt-8 flex items-center justify-center gap-2 mx-auto rounded-full bg-white ${fileDrop ? 'border-red-500' : 'border-blue-500'} border p-3 px-6`}
            onClick={!fileDrop ? handleAddButtonClick : ()=> setMediaPopup(false)}>
            { fileDrop ? 'Remove' : 'Add' }
            { !fileDrop ?
            <div><AiOutlinePlus className='text-blue-500' size='22px'/></div> 
            : 
            <div><AiOutlineMinus className='text-red-500' size='22px'/></div> 
            }
        </button>
        { !dragging && <button onClick={()=>{setMediaPopup(false)}} className='mt-6 text-xs p-2 px-3 rounded-full absolute topppp -top-10 centerh text-white bg-red-500/50 backdrop-blur-lg border-2 border-red-500' >X</button>}
        </div>
        <div onClick={()=> setMediaPopup(false)} className='w-screen h-screen toppp absolute' ></div>
    </div>}

    <button className='flex mx-auto gap-2 items-center bg-white rounded-full px-6 py-3' onClick={()=>{setMediaPopup(true); setFileDrop(false) }}>
        { !fileDrop ?
            <div><AiOutlinePlus className='text-blue-500' size='22px'/></div> 
            : 
            <div><AiOutlineMinus className='text-red-500' size='22px'/></div> 
        }
        <p>{fileDrop ? fileName : 'Add Data'}</p>
    </button>

    </>
);
};

export default FileInput;