/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import { useEffect, useState, useRef } from 'react';

import gsap from 'gsap'

const MainText = () => {

    const txt = '나는 코딩한다. 고로 나는 존재한다.';
    const [Text, setText] = useState('');
    const [Count, setCount] = useState(0);
    
    const textRef = useRef(null);
    const text2Ref = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setText(Text + txt[Count]);
            setCount(Count + 1)
        }, 100);
        if(Count === txt.length) {
            clearInterval(interval);
            gsap.to(textRef.current, 1, { 
                fontSize: '35px',
            })
            gsap.to(text2Ref.current, 1, { 
                opacity: .6,
                delay: 1
            })
        }
        return () => clearInterval(interval);
    })
    

    useEffect(() => {
        
        // gsap.to(textRef.current, 1, { 
        //     color: 'orange'
        // })
        // gsap.to(textRef.current, 1, { 
        //     transform: 'translatex(0px) translatey(0px)',
        //     delay: 1
        // })
    }, [])

    return (
        <div className="mainTextWrap" css={MainTextStyle}>
            <p className="txt1 active" ref={textRef}>{ Text }</p>
            <p className="txt2" ref={text2Ref}>아무리 힘들어도 즐겁게 일하고 싶은 프론트엔드 개발자 입니다.</p>
        </div>
    )
}

const MainTextStyle = css`
    text-align: right;
    margin-bottom: 100px;
    .txt1 {
        position: absolute;
        top: 50px;
        right: 30px;
        z-index: 1;
        font-size: 50px;
        margin-bottom: 15px;    
    }
    .txt2 {
        opacity: 0;
    }
    
`

export default MainText
