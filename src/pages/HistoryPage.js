/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// component
import HistoryBlock from '../components/HistoryBlock'
import Sort from '../components/Sort'
import Footer from '../components/Footer'
import QuickMenu from '../components/QuickMenu'
// lib
import gsap from 'gsap'
// data
import { historyData } from '../static/historyData'
// redux 
import { setList } from '../redux/history'

function HistoryPage() {

    const dispatch = useDispatch();
    const { dateList, list } = useSelector(({ history }) => ({
        dateList: history.dateList,
        list: history.list
    }));
    const historyRef = useRef(null);

    useEffect(() => {
        dispatch(setList(historyData))
    }, [dispatch])

    useEffect(() => {
        gsap.to(historyRef.current, 1, { opacity: '1', top: 0, delay: .5, ease: 'ease-out' })
    })

    return (
        <div css={HistoryPageStyle}> 
            <div className="historyInner" ref={historyRef}>
                <QuickMenu />
                <div className="historyScroll scroll">
                    <Link to="/">← 메인으로 돌아가기</Link>
                    <Sort/>
                    <div className="historyContent">
                        <div className="historyContainer">
                            {
                                list &&
                                dateList ?
                                dateList.map(date => {
                                    return <div className="yearBlock" key={date}>
                                    <div className="dateBlock"><span className="date">{ date }</span></div>
                                        <div className="historyList scrollX">
                                            <div className="historyListInner " style={{ height: '100%', width: (list[date].length) * 415 +'px' }}>
                                                {
                                                    list[date].map(data => (
                                                        <HistoryBlock key={data.id} data={data} />
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                }) : <div>Loading</div>
                            } 
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

const HistoryPageStyle = css`
    position: relative; 
    height: 100%;
    .historyInner {
        position: relative; 
        top: 300px;
        width: 100%;
        height: calc(100% - 70px);
        margin: 0 auto 20px;
        padding: 30px 15px 30px 30px;
        opacity: 0;
        border-radius: 10px;
        background: #1c1d1f;
        .historyScroll {
            height: 100%; 
            overflow: hidden;
            overflow-y: auto;
            padding-right: 15px;
            .historyContainer {
                width: calc(100% - 50px);
                margin-left: 50px;
                .yearBlock {
                    position: relative; 
                    padding-left: 100px;
                    border: 1px solid transparent;
                    margin-bottom: 30px;
                    &:last-of-type {
                        .dateBlock {
                            &:after {
                                display: none;
                            }
                        }
                    }
                    .dateBlock {
                        position: absolute; 
                        top: 0; 
                        left: 0; 
                        z-index: 1; 
                        width: 100px;
                        height: 100%;
                        color: #30957a;
                        &:before {
                            content: '';
                            width: 15px; 
                            height: 15px; 
                            background: #30957a; 
                            display: inline-block; 
                            border-radius: 100%; 
                        }
                        &:after {
                            content: '';
                            width: 1px; 
                            height: calc(100% + 33px);
                            display: inline-block;
                            position: absolute; 
                            top: 6px; 
                            left: 7px;
                            z-index: 1; 
                            background: #30957a;
                        }
                        .date {
                            line-height: 1.1;
                            vertical-align: top;
                            margin-left: 6px;
                            font-size: 20px;
                            letter-spacing: -0.08em;
                        }
                    }
                    .historyList {
                        position: relative;
                        overflow: hidden;
                        width: 100%; 
                        height: 260px;
                        overflow-x: auto;
                    }
                    // lib custom
                    .menu-item-wrapper {
                        margin-right: 10px;
                    }
                }
            }
        }
    }
`

export default HistoryPage
