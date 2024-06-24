import React from 'react'
import { createPortal } from 'react-dom'
import Lottie from 'react-lottie'
import animationData from '../lotties/Loader.json'

const Loader = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };
    return createPortal(
        <div className="w-screen absolute top-0 left-0 h-screen bg-white opacity-75 flex items-center justify-center">
            <Lottie 
                options={defaultOptions}
                height={150}
                width={150}
            />
        </div>
    , document.body)
}

export default Loader