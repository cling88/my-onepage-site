/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';

const Definition = ({ dt, dd }) => {
    return (
        <dl css={DefinitionStyle}>
            <dt>{ dt }</dt>
            <dd>{ dd }</dd>
        </dl>
    )
}

const DefinitionStyle = css`
    display: flex; 
    font-size: inherit;
    dt {
        margin-right: 10px; 
        opacity: 0.6;
    }
`

export default Definition
