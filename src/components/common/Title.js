/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';

const Title = ({text}) => {
    return (
        <h3 css={TitleStyle}>{ text }</h3>
    )
}

const TitleStyle = css`
    margin-bottom: 30px;
    font-size: 42px;
    color: #30957a;
`

export default Title
