import React from 'react';
import './LoadingScreen.css'

function LoadingScreen () {

    return(
    <div className='spinnerContainer'>
        <div className='spinner'></div>
        <div className='loader'>
         <p>Loading</p>
            <div className='words'>
                <span className='word'>cards</span>
                <span className='word'>images</span>
                <span className='word'>category</span>
                <span className='word'>price</span>
                <span className='word'>posts</span>
            </div>
        </div>
    </div>

    )

}

export default LoadingScreen; 