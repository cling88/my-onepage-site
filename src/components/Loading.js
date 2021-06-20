/** @jsxImportSource @emotion/react */
import {css, keyframes } from '@emotion/react';

function Loading() {
    return (
        <div css={LoadingStyle}>
            <div className="circle"></div>
            <span>Loading</span>
        </div>
    )
}

const LoadingAnimation = keyframes`
    0% {
        ransform: translate(-50%, -50%) rotate(0deg);
        border-radius: 20px;
    }
    25% {
        transform: translate(-50%, -50%) rotate(359deg);
        border-radius: 50%;
    }
    50% {
        transform: translate(-50%, -50%) rotate(0deg);
        border-radius: 100%;
    }
    100% {
        transform: translate(-50%, -50%) rotate(359deg);
        border-radius: 50%;
    }
`

const LoadingStyle = css`
    position: fixed; 
    top: 0; 
    left: 0; 
    z-index: 10; 
    width: 100%; 
    height: 100%;
    display: flex; 
    justify-content: center; 
    align-items: center;
    .circle {
        position: absolute;
        top: 50%; 
        left: 50%;
        transform: translate(-50%, -50%); 
        z-index: 1;
        width: 135px;
        height: 135px;
        display: flex; 
        justify-content: center; 
        align-items: center;
        background: #30957a;
        border-radius: 20px;
        animation: ${LoadingAnimation} 3s linear infinite;
    }
    span {
        position: absolute; 
        top: 50%; 
        left: 50%; 
        z-index: 5;
        transform: translate(-50%, -50%); 
        color: #d7f7ee;
    }
`



export default Loading
