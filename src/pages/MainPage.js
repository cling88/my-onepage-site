/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import { useEffect, useRef } from 'react';
// lib
import gsap from 'gsap'

// component
import MainText from '../components/MainText'
import Skills from '../components/Skills'
import AboutMe from '../components/AboutMe'
import History from '../components/History'
import Footer from '../components/Footer'
import QuickMenu from '../components/QuickMenu'

function MainPage() {

    const mainRef = useRef(null);
    const mainScrollRef = useRef(null);
    const skiilsRef = useRef(null);
    const aboutMeRef = useRef(null);
    const historyRef = useRef(null);

    const handleScroll = (e) => {
        if(e.target.scrollTop > 260) {
            gsap.to(aboutMeRef.current, 1, {  top: 0, opacity: 1, delay: .1, ease: 'ease-out' });
        }
        if(e.target.scrollTop > 800) {
            gsap.to(historyRef.current, 1, {  top: 0, opacity: 1, delay: .1, ease: 'ease-out' });
        }
    }

    useEffect(() => {
        gsap.to(mainRef.current, 1, {  background: '#1c1d1f', top: 0, opacity: 1, delay: 3, ease: 'ease-out' });
        gsap.to(skiilsRef.current, 1, {  top: 0, opacity: 1, delay: .5, ease: 'ease-out' });
    }, [])

    return (
        <div css={MainPageStyle}>
            <MainText />
            <div className="mainInner" ref={mainRef}>
               <QuickMenu />
               <div className="mainScroll scroll" ref={mainScrollRef} onScroll={handleScroll}>
                <div className="skillsWrap" ref={skiilsRef}>
                        <Skills  />
                    </div>
                    <div className="aboutMeWrap" ref={aboutMeRef}>
                        <AboutMe />
                    </div>
                    <div className="historyWrap" ref={historyRef}>
                        <History />
                    </div>
               </div>
            </div>
            <Footer/>
        </div>
    )
}

const MainPageStyle = css`
    position: relative; 
    height: 100%;
    .mainInner {
        position: relative; 
        width: 100%;
        height: calc(100% - 70px);
        margin: 0 auto 20px;
        padding: 160px 25px 25px 25px;
        background: #000;
        border-radius: 10px;
        top: 300px;
        opacity: 0;
        .mainScroll {
            width: 100%; 
            height: 100%;
            overflow: hidden;
            overflow-y: auto;
            padding: 25px;
        }
        .skillsWrap {
            position: relative;
            top: 200px;
            opacity: 0;
            margin-top: 100px;
        }
        .aboutMeWrap {
            position: relative;
            top: 200px;
            opacity: 0;
        }
        .historyWrap {
            position: relative;
            top: 200px;
            opacity: 0;
        }
    }
`

export default MainPage
