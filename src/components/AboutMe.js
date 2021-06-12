/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import { useEffect, useState, useRef } from 'react';

// component
import Title from './common/Title'

const AboutMe = () => {
    return (
        <div css={AboutMeStyle}>
            <div className="img"><img src="./images/aboutMeBg.png" alt="" /></div>
            <ul className="aboutMeList">
                <li className="aboutMeItem">
                    <Title text={"WHO AM I"} />
                    <div className="cont">
                    html, css, 플러그인 활용하여 퍼블리싱 개발을 합니다. <br />
                    최근에는 javascript, ReactJS 위주의 프론트엔드를 2년간 프로젝트에 참여하였습니다<div className="br"></div> 
                    기존 업무방식은 기획자가 표현하려는 UI,UX와 프론트, 백엔드에서 개발하기 적합한 방식을 의논하여 개발하였습니다. 
                    </div>
                </li>
                <li className="aboutMeItem">
                    <Title text={"WAHT I LIKE"} />
                    <div className="cont">
                    전체적인 업무의 흐름과 사용 목적을 파악 하고 개발하는 것을 지향하며, 
                    개발과 서비스에 대헤 고민하는 것을 좋아합니다. <br />
                    시간적 여유가 된다면, 관심이 가는 언어나 기술은 가볍게라도 한 번씩 살펴보려고 합니다. <br />
                    아무리 힘들어도 즐겁게 일하는 것을 선호합니다. 
                    </div>
                </li>
                <li className="aboutMeItem">
                    <Title text={"WHAT I WANT"} />
                    <div className="cont">
                    무조건 기술적으로만 처리하는 개발자가 아닌,
                    서비스와 개발을 전체적으로 바라보는 관점에서 데이터와 컴퓨터 자료를 더 효율적으로 사용하고, 
                    사용자에게 가치있는 개발을 생각하는 개발자가 되고자 합니다. <br />
                    꾸준한 자기개발을 통해 javascript(Node.js)기반의 풀스택 개발자가 되는 것을 
                    현재의 목표로 삼고 있으며, 개발 언어에 장벽이 없는 도구 로써 사용할 줄 아는 
                    멋진 개발자가 되고싶습니다.
                    </div>
                </li>
            </ul>
        </div>
    )
}

const AboutMeStyle = css`
    position: relative;
    margin-bottom: 150px;
    .img {
        position: absolute; 
        top: 20px; 
        left: -50px;
        width: 450px; 
        img {
            width: 100%;
        }   
    }
    .aboutMeList {
        position: relative; 
        z-index: 1;
        .aboutMeItem {
            margin-bottom: 45px;
            .cont {
                line-height: 1.6;
                color: #bdbdbd;
            }
        }
    }
`

export default AboutMe
