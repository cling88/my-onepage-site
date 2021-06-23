/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
// lib
import gsap from 'gsap'

// component
import Footer from '../components/Footer'
import QuickMenu from '../components/QuickMenu'
import Title from '../components/common/Title'

function AboutSite() {

    const aboutRef = useRef(null);

    useEffect(() => {
        gsap.to(aboutRef.current, 1, { opacity: '1', top: 0, delay: .5, ease: 'ease-out' })
    }, [])

    return (
        <div css={AboutSiteStyle}>
            <div className="aboutInner" ref={aboutRef}>
                <QuickMenu />
                <div className="aboutScroll scroll">
                    <Link to="/">← 메인으로 돌아가기</Link>
                    <div className="aboutContainer">
                        <Title text={'배경'} />
                        <div className="textBox">
                            본 사이트를 개발 하기 전에 이미 만들어 둔 사이트가 있었어요. <br />
                            하지만 디자인이 호불호가 많이 갈릴것 같아 좀 더 깔끔한 디자인으로 <br />
                            변경하여 지금의 사이트가 완성되었습니다. &nbsp; 
                            <a href="https://cling88.github.io/my-log/" rel="noreferrer" target="_blank">이전 사이트도 구경하기</a>
                            
                        </div>
                        <div className="textBox">
                            <Title text={'특징'} />
                            <ul>
                                <li>- 기획&#38;디자인 7일, 개발 2일 총 9일 걸렸어요</li>
                                <li>- React로 만들어졌어요</li>
                                <li>- 추가 라이브러리를 사용했어요</li>
                                <li>&nbsp; (react-router-dom / react-gsap / redux / redux-actions / redux-devtools-extension )</li>
                                
                            </ul>
                        </div>
                        <div className="textBox">
                            <Title text={'개발 상세'} />
                            <ul>
                                <li>- 메인 텍스트 애니메이션 : <a href="https://wazacs.tistory.com/35" rel="noreferrer" target="_blank" title="메인 텍스트 애니메이션">블로그 보기</a></li>
                                <li>- 스크롤에 따른 애니메이션 : <a href="https://wazacs.tistory.com/28?category=455192" rel="noreferrer" target="_blank" title="스크롤에 따른 애니메이션">블로그 보기</a></li>
                                <li>- React in Animation  <a href="https://wazacs.tistory.com/38?category=455192" rel="noreferrer" target="_blank" title="React 에서 애니메이션, 인터렉션 구축하기 ">블로그 보기</a></li>
                                <li>- Github 배포하기 ( 작성중 )</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

const AboutSiteStyle = css`
    position: relative; 
    height: 100%;
    .aboutInner {
        position: relative; 
        width: 100%;
        height: calc(100% - 70px);
        margin: 0 auto 20px;
        padding: 30px 15px 30px 30px;
        background: #000;
        border-radius: 10px;
        top: 300px;
        opacity: 0;
        background: #1c1d1f;
        .aboutScroll {
            width: 100%; 
            height: 100%;
            overflow: hidden;
            overflow-y: auto;
            padding: 25px;
            .aboutContainer{
                margin-top: 30px;
                h2 {
                    margin-bottom: 15px;
                    font-size: 28px;
                }
                .textBox {
                    margin-bottom: 60px;
                    line-height: 1.4;
                    color: #eee;
                }
            }
            a {
                text-decoration: underline;
                opacity: 0.7;
                &:hover {
                    opacity: 1;
                }
            }
        }
        
    }
`

export default AboutSite
