/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import { useEffect, useState, useRef } from 'react';

// lib
import gsap from 'gsap'
// component
import Title from '../components/common/Title'
import Tag from './common/Tag'



const Skills = ({status}) => {

    const skillRef = useRef(null);

    useEffect(() => {
        if(status){
            gsap.to(skillRef.current, 0.5, { top: 0, opacity: 1 })
        } 
    }, [status])
    
    return (
        <div css={SkillsStyle} ref={skillRef}>
            <Title text={'SKILSS'} />
            <ul className="skillList">
                <li className="skillItem">
                    <div className="skillItemHead">
                        <h4>HTML&#38;CSS</h4>
                        <Tag text={'나름 자부심이 있어요'} />
                    </div>
                    <div className="cont">
                    반응형, 웹 표준, CSS를 활용한 애니메이션이 가능합니다. <br />
                    대부분의 마크업 개발이 가능합니다.
                    </div>
                </li>
                <li className="skillItem">
                    <div className="skillItemHead">
                        <h4>JavaScript</h4>
                        <Tag text={'웬만큼 활용할 수 있어요'} /> 
                        <Tag text={'꾸준히 공부하고 있어요'} />
                    </div>
                    
                    <div className="cont">
                        다양한 플러그인 활용이 가능 합니다. <br />
                        간단한 인터렉션과 아코디언, 탭 등은 직접 개발이 가능합니다.
                    </div>
                </li>
                <li className="skillItem">
                    <div className="skillItemHead">
                        <h4>ReactJS</h4>
                        <Tag text={'웬만큼 활용할 수 있어요'} /> 
                        <Tag text={'꾸준히 공부하고 있어요'} />
                    </div>
                    <div className="cont">
                        redux를 통한 상태관리, redux-saga를 통한 API 비동기 처리가 가능합니다. 
                    </div>
                </li>
            </ul>
        </div>
    )
}

const SkillsStyle = css`
    position: relative; 
    top: 100px;
    opacity: 0;
    margin-bottom: 100px;
    .skillItem {
        margin-bottom: 45px;
        .skillItemHead {
            display: flex; 
            align-items: flex-end;
            margin-bottom: 18px;
            h4 {
                margin-right: 30px;
                font-size: 30px;
            }
        }
        .cont {
            line-height: 1.6;
            color: #bdbdbd;
        }
    }
    
`

export default Skills
