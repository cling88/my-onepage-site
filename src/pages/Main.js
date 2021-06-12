/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import { useEffect, useState, useRef } from 'react';

// lib
import gsap from 'gsap'

// component
import MainText from '../components/MainText'
import Skills from '../components/Skills'
import AboutMe from '../components/AboutMe'
import History from '../components/History'

function Main() {

    const mainRef = useRef(null);
    const skiilsRef = useRef(null);
    const aboutMeRef = useRef(null);


    const [SkillsStatus, setSkillsStatus] = useState(false);
    const [AboutMeStatus, setAboutMeStatus] = useState(false);


    const [ScrollY, setScrollY] = useState(0);
    function handleScroll() { 
        if(ScrollY > 299) {
            setScrollY(window.pageYOffset);
        } else {
            setScrollY(window.pageYOffset);
        }
    }


    useEffect(() => {
        function scrollListener() {  window.addEventListener("scroll", handleScroll); }
        scrollListener();
        return () => { window.removeEventListener("scroll", handleScroll); };
    });

    useEffect(() => {
        console.log("skiilsRef: ", skiilsRef.current.offsetTop )
        gsap.to(mainRef.current, 1, {  background: '#1c1d1f', delay: 2, ease: 'ease-out' });
        setTimeout(() => {
            setSkillsStatus(true);
        }, 3000)
    }, [])

    return (
        <div css={MainStyle}>
            <div className="mainInner" ref={mainRef}>
                <MainText />
                <div className="skillsWrap" ref={skiilsRef}>
                    <Skills status={SkillsStatus} />
                </div>
                <div className="aboutMeWrap" ref={aboutMeRef}>
                    <AboutMe status={AboutMeStatus} />
                </div>
                <div className="historyWrap">
                    <History />
                </div>
            </div>
        </div>
    )
}

const MainStyle = css`
    .mainInner {
        position: relative; 
        width: 90%; 
        max-width: 1280px;
        min-height: 800px;
        margin: 50px auto;
        padding: 105px 30px 50px 30px;
        background: #000;
        border-radius: 10px;
    }
`

export default Main
