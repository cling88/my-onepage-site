/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const QuickMenu = () => {
    const quickMenuRef = useRef(null);
    return (
        <div css={QuickMenuStyle} ref={quickMenuRef}>
            <Link className="link" to="/aboutSite">사이트 정보</Link>
            <a className="roundLink" href="https://wazacs.tistory.com/" rel="noreferrer" target="_blank">BLOG</a>
            <a className="roundLink" href="https://github.com/cling88/my-onepage-site" rel="noreferrer" target="_blank">Git</a>
        </div>
    )
}

const QuickMenuStyle = css`
    width: 300px;
    position: absolute;
    top: -80px;
    right: 0;
    z-index: 10;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    opacity: 1;
    .link {
        text-decoration: underline;
        opacity: 0.7;
        &:hover {
            opacity: 1;
        }
    }
    .roundLink {
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
