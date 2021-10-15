import React, { useRef, useEffect, useState } from 'react';

import './Calculator.css';

import { btns, BTN_ACTIONS } from "./btnConfig"
    let y=1;
const Calculator = () => {
    const btnsRef = useRef(null);
    const expRef = useRef(null);

    const [expression, setExpression] = useState('');

    useEffect(() => {
        const btns = Array.from(btnsRef.current.querySelectorAll('button'));
        btns.forEach(e => e.style.height = e.offsetWidth + 'px');
    }, []);

    const mouseClick = (item) => {
        const btnRef = btnsRef.current
        const btns = Array.from(btnsRef.current.querySelectorAll('button'));
        // btns.forEach(e => e.target.style.boxShadow = `1px 1px 2px rgba(0,0,0,0.4) inset` );
        for(var i=0; i<btns.length; i++) {
            if(btns[i].textContent === item.display) {
                    btns[i].style.boxShadow = `1px 1px 2px rgba(0,0,0,0.4) inset`
                    console.log('1')
            
            }
        }
    }
    const mouseUpClick = (item) => {
        const btnRef = btnsRef.current
        const btns = Array.from(btnsRef.current.querySelectorAll('button'));
        // btns.forEach(e => e.target.style.boxShadow = `1px 1px 2px rgba(0,0,0,0.4) inset` );
        for(var i=0; i<btns.length; i++) {
            if(btns[i].textContent === item.display) {
                btns[i].style.boxShadow = `0px 1px 1px rgb(255 255 255 / 80%) inset, 1px 1px 3px rgb(0 0 0 / 20%)`
                console.log('2')
            }
                }
            }
    const btnClick = (item) => {
        const expDiv = expRef.current;

        if (item.action === BTN_ACTIONS.THEME) document.body.classList.toggle('dark');

        if (item.action === BTN_ACTIONS.ADD) {
            addAnimSpan(item.display);
            if(expDiv.offsetWidth*y > expDiv.parentNode.offsetWidth - 30 ) {
                expDiv.style.transform = `scale(${y-0.2})`
                y-= 0.2;
            }
            const oper = item.display !== 'x' ? item.display : '*';
            setExpression(expression + oper);
        }

        if (item.action === BTN_ACTIONS.DELETEONE) {
            removeAnimSpan(item.display)
            setExpression(expression.slice(0,-1));
        }

        // if (item.action === BTN_ACTIONS.SQUAREROOT) {
        //     addSquareRoot(item.display)
        //     const rel = (Math.floor(Math.sqrt(eval(expression))*100000000)/100000000).toString();
        //     setExpression(expression + rel)

        // }

        if (item.action === BTN_ACTIONS.DELETE) {
            expDiv.parentNode.querySelector('div:last-child').innerHTML = '';
            expDiv.style.transform = `scale(${1})`
            y=1;
            expDiv.innerHTML = '';
            setExpression('');
        }

        if (item.action === BTN_ACTIONS.CALC) {
            if (expression.trim().length <= 0) return;


            expDiv.parentNode.querySelector('div:last-child').remove();

            const cloneNode = expDiv.cloneNode(true);
            expDiv.parentNode.appendChild(cloneNode);
            const x = expDiv.parentNode.querySelector('div:last-child')
            const transform = `translate(${-(360-(x.offsetWidth*0.4)) + 'px'},${-60 +'px'}) scale(0.4)`;

            try {
                let res = eval(expression);
                
                setExpression(res.toString());
                
                setTimeout(() => {
                    cloneNode.style.transform = transform;
                    expDiv.innerHTML = '';
                    addAnimSpan(Math.floor(res * 100000000) / 100000000);
                }, 200);
            } catch {
                setTimeout(() => {
                    cloneNode.style.transform =  `translate(${-140 + 'px'},${-50 +'px'}) scale(0.6)`;
                    cloneNode.innerHTML = 'system error';
                }, 200);
            } finally {
                console.log('calc complete');
            }

        }

    }
    const addAnimSpan = (content) => {
        const expDiv = expRef.current;
        const span = document.createElement('span');
        span.innerHTML = content;
        span.style.opacity = '0';
        expDiv.appendChild(span);

        const width = span.offsetWidth + 'px';
        span.style.width = '0';

        setTimeout(() => {
            span.style.opacity = '1';
            span.style.width = width;
        }, 100);
    }

    const addSquareRoot = (content) => {
        const expDiv = expRef.current;
        const span = document.createElement('span');
        
        span.innerHTML = content + '(';
        span.style.opacity = '0';
        expDiv.appendChild(span);

        const width = span.offsetWidth + 'px';
        span.style.width = '0';

        setTimeout(() => {
            span.style.opacity = '1';
            span.style.width = width;
        }, 100);
    }

    const removeAnimSpan = (content) => {
        const expDiv = expRef.current;
        if(expDiv.childNodes.length > 0) {
            expDiv.removeChild(expDiv.childNodes[expDiv.childNodes.length-1]);
        }
    }

    return (
        <div className="calculator">
            <div className="calculator__result">
                <div ref={expRef} className="calculator__result__exp"></div>
                <div className="calculator__result__exp"></div>
            </div>
            <div ref={btnsRef} className="calculator__btns">
                {
                    btns.map((item,index) =>(
                        <button key={index} className={item.class} onClick={() => btnClick(item)} onMouseDown={() => mouseClick(item)} onMouseUp={() => mouseUpClick(item)}>
                            {item.display}
                        </button>
                    ))
                }
            </div>
        </div>
    )
}

export default Calculator