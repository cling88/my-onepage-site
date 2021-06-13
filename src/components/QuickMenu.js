/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import { useEffect, useRef } from 'react'

const QuickMenu = () => {

    const quickMenuRef = useRef(null);

    return (
        <div css={QuickMenuStyle} ref={quickMenuRef}>
            <a href="https://wazacs.tistory.com/" rel="noreferrer" target="_blank">BLOG</a>
            <a href="https://github.com/cling88/my-onepage-site" rel="noreferrer" target="_blank">Git</a>
        </div>
    )
}

const QuickMenuStyle = css`
    width: 300px;
    position: absolute;
    top: -80px;
    // right: -150px;
    right: 0;
    z-index: 10;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    opacity: 1;
    a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        background: #585858;
        color: #fff;
        border-radius: 100%;
        margin-left: 15px;
        font-size: 14px;
        font-weight: bold;
        transition: all 0.2s ease-in 0s;
        &:hover {
            background: #30957a;
        }
    }
`

export default QuickMenu
