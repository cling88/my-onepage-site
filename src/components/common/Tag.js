/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';

const Tag = ({ text, handleFilter }) => {
    if(handleFilter) {
        return (
            <span css={TagStyle(true)} onClick={handleFilter}>#{ text }</span>
        )
    } else {
        return (
            <span css={TagStyle(false)}>#{ text }</span>
        )
    }
    
}

const TagStyle = (clickable) => css`
    font-size: inherit; 
    color: #30957a;
    opacity: .8;
    margin-right: 15px;
    cursor: ${clickable ? "pointer" : "default"};
    transition: .3s;
    &:hover {
        opacity: 1;
    }
`

export default Tag
