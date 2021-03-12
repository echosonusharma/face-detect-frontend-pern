import React from 'react';
import './ImageLinkFrom.css';

const ImageLinkForm = ({ setSearchInput, buttonDetect }) => {
    return (
        <>
            <p className='f3 center' >Face Detection</p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 w-70  pv2 center'
                        type='text'
                        onChange={e => { setSearchInput(e.target.value) }}></input>
                    <button className='w-30 ph3 pv2 grow link dib white bg-green'
                        onClick={buttonDetect} >Detect</button>
                </div>
            </div>
        </>

    )
}

export default ImageLinkForm;
