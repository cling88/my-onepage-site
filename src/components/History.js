/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

// component
import Title from './common/Title'
import HistoryBlock from './HistoryBlock';
// data
import { historyData } from '../static/historyData' 

const History = () => {

    const [HistoryData, setHistoryData] = useState(null);
    const handleSetHistory = () => {
        setHistoryData([...historyData['2020']])
    }

    useEffect(() => {
        handleSetHistory();
    }, [])

    return (
        <div css={HistoryStyle}>
            <div className="historyTop">
                <Title text={"WORK HISTORY"} />
            </div>
            <div className="cont">
                <ul className="historyList">
                    {
                        HistoryData &&
                        HistoryData.map(data => (
                            <li className="historyItem" key={data.id}>
                                <HistoryBlock data={data} type="main" />
                            </li>
                        ))
                    }
                    <li className="historyMore"><Link to="/history">+</Link></li>
                </ul>
            </div>
            <span className="round">&nbsp;</span>
            <span className="round">&nbsp;</span>
            <span className="round">&nbsp;</span>
            <span className="round">&nbsp;</span>
            <span className="round">&nbsp;</span>
            <span className="round">&nbsp;</span>
        </div>
    )
}

const HistoryStyle= css`
    position: relative;
    margin-bottom: 100px;
    &:after {
        content: '';
        display: block; 
        clear: both;
    }
    .historyTop {
        display: flex;
        align-items: flex-end;
        margin-bottom: 50px;
        h3 {
            margin-bottom: 0;
            margin-right: 40px;
        }
        a {
            text-decoration: underline;
        }
    }
    .historyList {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        border-radius: 20px 0 0 20px;
        padding: 40px 30px 0 0;
        .historyItem {
            position: relative;
            z-index: 3;
            margin-right: 0;
        }
        .historyMore {
            width: 100px; 
            height: 100px;
            margin-left: 25px;
            a {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100%;
                font-size: 50px;
                background: #30957a;
                color: #fff;
                border-radius: 100%;
                opacity: .6;
                transition: .3s;
                &:hover {
                    opacity: 1; 
                }
            }
        }
    }
    .historyBlock {
        background: rgba();
        margin-right: 10px;
        .historySection {
            height: 100%;
        }
    }
    .round {
        display: block;
        position: absolute;
        z-index: 1;
        width: 24px; 
        height: 24px; 
        border: 6px solid #30957a;
        border-radius: 100%;
        &:nth-of-type(1) {
            top: 210px;
            left: -20px;
        }
        &:nth-of-type(2) {
            top: 305px;
            left: 25px;
        }
        &:nth-of-type(3) {
            top: 100px;
            left: 50px;
        }
        &:nth-of-type(4) {
            top: 5px;
            right: 5px;
        }
        &:nth-of-type(5) {
            top: 40px;
            right: 40px;
        }
        &:nth-of-type(6) {
            top: 345px;
            right: 105px;
        }
    }
    

`

export default History
