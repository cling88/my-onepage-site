/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import {useRef } from 'react'
// component
import Title from '../components/common/Title'
import Tag from './common/Tag'

const Skills = ({status}) => {

    const skillRef = useRef(null);
    
    return (
        <div css={SkillsStyle} ref={skillRef}>
            <Title text={'SKILSS'} />
            <ul className="skillList">
                <li className="skillItem">
                    <div className="skillItemHead">
                        <h4>HTML&#38;CSS</h4>
                        <Tag text={'다양한 활용이 가능해요'} />
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
                        간단한 인터렉션과 아코디언, 탭, 배열이나 객체 조작 등 일부 기능은 직접 개발이 가능합니다.
                    </div>
                </li>
                <li className="skillItem">
                    <div className="skillItemHead">
                        <h4>ReactJS</h4>
                        <Tag text={'웬만큼 활용할 수 있어요'} /> 
                        <Tag text={'꾸준히 공부하고 있어요'} />
                    </div>
                    <div className="cont">
                        emotion을 통해 스타일을 작성합니다. <br />
                        redux를 통한 상태관리, redux-saga를 통한 API 비동기 처리가 가능합니다. 
                    </div>
                </li>
            </ul>
        </div>
    )
}

const SkillsStyle = css`
    position: relative; 
    margin-bottom: 150px;
    .skillItem {
        margin-bottom: 60px;
        .skillItemHead {
            // display: flex; 
            // align-items: flex-end;
            margin-bottom: 18px;
            h4 {
                float: left; 
                margin-right: 30px;
                font-size: 30px;
            }
        }
        .cont {
            line-height: 1.6;
            color: #bdbdbd;
        }
    }
    @media(max-width: 810px) {
        .skillItemHead h4 {
            width: 100%; 
            margin-bottom: 10px;
        }
    }
`

export default Skills
