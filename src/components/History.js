/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import { Link } from 'react-router-dom'
// component
import Title from './common/Title'

const History = () => {
    return (
        <div css={HistoryStyle}>
            <div className="historyTop">
                <Title text={"WORK HISTORY"} />
                <Link to="/history">포트폴리오 상세페이지 →</Link>
            </div>
        </div>
    )
}

const HistoryStyle= css`

`

export default History
