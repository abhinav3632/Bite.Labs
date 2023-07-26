import React from 'react';
import Lottie from 'react-lottie';
import * as loading from '../loading.json';
import * as done from '../done.json';
import './styles/loading.css'

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading.default,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
}

const defaultOptions2 = {
    loop: false,
    autoplay: true,
    animationData: done.default,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

const Loading = () => {
    return (
        <div className='loading-container'>
            {!loading ? (
                <Lottie options={defaultOptions} height={120} width={120} />
            ) : (
                <Lottie options={defaultOptions2} height={120} width={120} />
            )}
        </div>
    )
}

export default Loading