import React from 'react';
import './ImageLinkFrom.css';

const ImageLinkForm = ({ setSearchInput, buttonDetect }) => {
    return (
        <>
            <p className=' f5 b center  @media(max-width: 400px) {
            f3-ns  b-ns  }' >Face Detection</p>
            <div className='center pl3 pr3'>
                <div className='form center pa4 br3 shadow-5  @media(max-width: 400px) {
            pa5-ns   }'>
                    <input className='f6 w-75  pv2 center @media(max-width: 400px) {
            f5-ns   }'
                        type='text'
                        onChange={e => { setSearchInput(e.target.value) }}></input>
                    <button className='w-25 ph3 pv2 grow link dib white bg-green f7  @media(max-width: 400px) {
            f5-ns   }'
                        onClick={buttonDetect} >Detect</button>
                </div>
            </div>
        </>

    )
}

export default ImageLinkForm;
