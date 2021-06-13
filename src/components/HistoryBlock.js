/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import { useState } from 'react'

// component
import Figment from './common/Figment'
import Definition from './common/Definition';

const HistoryBlock = ({ data, type }) => {
    const [Active, setActive] = useState(false);
    return (
        <div 
            className='historyBlock'
            css={HistoryBlockStyle}
            onClick={() => setActive(!Active)}
        >
            <div className="historySection">
                <div className="header">
                    <p className="datePrj">{ data.terminate }</p>
                    <h3>{data.title}</h3>
                </div>
                <div className="explain">
                    { data.content() }
                </div>
                <div className="info">
                    <div className="infoDevice">
                        {
                            data.type && data.type.map((t, i) => <Figment key={'figType1_' + i} type="device" text={t} />)
                        }
                    </div>
                    <div className="infoSkills">
                        {
                            data.skills && 
                            data.skills.map((s, i) => (
                                <Figment key={'figType2_' + i} type="skills" text={s} />
                            ))
                        }
                    </div>
                </div>
                {
                     type !== "main" && <button className="btnMore">MORE</button>
                }
                
            </div>
            {
                type !== "main" &&
                <div className={Active ? 'historyMore active': 'historyMore '}>
                    <div className="historyMoreLayer"></div>
                    <div className="historyMoreInner">
                        <div className="moreContent">
                            { data.detail() }
                        </div>
                        <div className="moreEtc">
                            {
                                data.url &&
                                <Definition
                                    dt={"URL: "}
                                    dd={(<a href={data.url} rel="noreferrer" target="_blank">{data.title} 바로가기</a>)}
                                />
                            }
                        </div>
                    </div>
                </div>
            }
            
        </div>
    )
}

const HistoryBlockStyle = css`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 355px;
    height: 230px;
    float: left;
    margin-right: 15px;
    cursor: pointer;
    padding: 15px;
    background: #111;
    border-radius: 10px;
    overflow: hidden;
    .historySection {
        position: relative; 
        border: 1px solid transparent; 
        height: 100%;
        display: flex; 
        flex-direction: column;
        justify-content: space-between;
        .datePrj {
            font-size: 13px;
            margin: 0 0 13px 5px; 
            opacity: 0.4;
        }
        h3 {
            font-size: 29px;
            margin-bottom: 20px;
            letter-spacing: -0.07em;
        }
        .explain {
            flex: 1;
            white-space: normal;
            font-size: 13px;
            color: #888;
            line-height: 1.2;
        }
        .info {
            width: 100%; 
            overflow: hidden;
            .figment {
                float: left;
                margin-right: 4px;
                margin-bottom: 4px;
                font-size: 16px;
            } 
            
        }
        .content {
            font-size: 17px;
            line-height: 1.3;
        }
        .btnMore {
            position: absolute;
            top: 0;
            right: 0;
            font-size: 14px;
            font-family: inherit;
            text-decoration: underline;
            border: 0 none;
            outline: 0 none;
            background: transparent;
            opacity: 0.6;
        }
    }
    .historyMore {
        position: absolute; 
        top: 0;
        right: -100%; 
        z-index: 3; 
        width: 100%;
        height: 100%; 
        display: flex; 
        justify-content: flex-end;
        transition: .2s ease-in;
        font-size: 18px;
        &.active {
            right: 0;
        }
        .historyMoreLayer {
            position: absolute; 
            top: 0; 
            left: 0; 
            z-index: 1; 
            width: 100%;
            height: 100%; 
        }
        .historyMoreInner {
            position: relative;
            z-index: 3;
            background: #30957a;
            width: 90%;
            display: flex; 
            flex-direction: column;
            justify-content: space-between; 
            height: 100%; 
            padding: 15px; 
            color: #fff;
            .moreContent {
                word-break: keep-all;
                .workList {
                    border-bottom: 1px solid #eee;
                    padding-bottom: 10px; 
                    margin-bottom: 10px;
                    li {
                        margin-bottom: 5px;
                    }
                }
                .content {
                    line-height: 1.3;
                    max-height: 130px;
                    overflow: hidden;
                    overflow-y: auto;
                }
            }
            a {
                text-decoration: underline; 
                color: #ffd400; 
                opacity: 1; 
            }
        }
    }
`

export default HistoryBlock
