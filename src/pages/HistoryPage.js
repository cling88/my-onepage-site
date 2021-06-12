/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import { useEffect, useState, useRef } from 'react';

// lib
import gsap from 'gsap'
// data
import { historyData } from '../static/historyData'

function HistoryPage() {

    const historyRef = useRef(null);

    useEffect(() => {
        gsap.to(historyRef.current, 1, { opacity: '1', delay: .5, ease: 'ease-out' })
    })

    return (
        <div css={HistoryPageStyle}> 
            <div className="historyInner" ref={historyRef}>
                <div className="historyContent">
                    <div className="historyContainer">
                        {
                            // list ?
                            // dateList &&
                            // dateList.map(date => {
                            //     return <div className="yearBlock" key={date}>
                            //     <div className="dateBlock"><span className="date">{ date }</span></div>
                            //         <div className="historyList scrollX">
                            //             <div className="historyListInner " style={{ height: '100%', width: (list[date].length) * 415 +'px' }}>
                            //                 {
                            //                     list[date].map(data => (
                            //                         <HistoryBlock key={data.id} data={data} />
                            //                     ))
                            //                 }
                            //             </div>
                            //         </div>
                            //     </div>
                            // }) : <div>Loading</div>
                        } 
                    </div>
                </div>
            </div>
        </div>
    )
}

const HistoryPageStyle = css`
    .historyInner {
        position: relative; 
        width: 90%; 
        max-width: 1280px;
        min-height: 800px;
        margin: 50px auto;
        padding: 105px 30px 50px 30px;
        opacity: 0;
        border-radius: 10px;
    }
`

export default HistoryPage
