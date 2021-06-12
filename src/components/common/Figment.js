/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';

const Figment = ({type, text}) => {
    return (
        <span className="figment" css={FigmentStyle(type)}>
            { text }
        </span>
    )
}

const FigmentStyle = type => css`
    background: ${type === 'device' ? '#93efb3' : '#c4e4ff'};
    display: inline-block; 
    min-width: 55px;
    text-align: center; 
    padding: 3px 11px;
    border-radius: 45px;
    font-size: 13px;
    color: #333;
`

export default Figment
