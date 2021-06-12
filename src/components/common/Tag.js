/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';

const Tag = ({ text }) => {
    return (
        <span css={TagStyle}>#{ text }</span>
    )
}

const TagStyle = css`
    font-size: inherit; 
    color: #30957a;
    opacity: .6;
    margin-right: 15px;
`

export default Tag
