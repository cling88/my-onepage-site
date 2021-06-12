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
import Footer from '../components/Footer'

function MainPage() {

    const mainRef = useRef(null);
    const skiilsRef = useRef(null);
    const aboutMeRef = useRef(null);


    // const [SkillsStatus, setSkillsStatus] = useState(false);
    // const [AboutMeStatus, setAboutMeStatus] = useState(false);


    // const [ScrollY, setScrollY] = useState(0);
    // function handleScroll() { 
    //     if(ScrollY > 299) {
    //         setScrollY(window.pageYOffset);
    //     } else {
    //         setScrollY(window.pageYOffset);
    //     }
    // }


    // useEffect(() => {
    //     function scrollListener() {  window.addEventListener("scroll", handleScroll); }
    //     scrollListener();
    //     return () => { window.removeEventListener("scroll", handleScroll); };
    // });

    useEffect(() => {
        // console.log("skiilsRef: ", skiilsRef.current.offsetTop )
        gsap.to(mainRef.current, 1, {  background: '#1c1d1f', top: 0, opacity: 1, delay: 3, ease: 'ease-out' });
        // setTimeout(() => {
        //     setSkillsStatus(true);
        // }, 3000)
    }, [])

    return (
        <div css={MainPageStyle}>
             <MainText />
            <div className="mainInner" ref={mainRef}>
               <div className="mainScroll scroll">
                <div className="skillsWrap">
                        <Skills  />
                    </div>
                    <div className="aboutMeWrap">
                        <AboutMe />
                    </div>
                    <div className="historyWrap">
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
        width: 1400px;
        height: calc(100% - 100px);
        overflow: hidden;
        margin: 30px auto;
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
    }
`

export default MainPage
