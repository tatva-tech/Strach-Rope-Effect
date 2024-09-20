"use client";

import { useEffect, useRef } from "react";
import styles from "./page.module.css";

const CurveLine = () => {
    const path = useRef(null);
    let progress = 0;
    let x = 0.5;
    let time = Math.PI / 2;
    let reqId: any = null;

    useEffect(() => {
        setPath(progress);
    }, [])

    const setPath = (progress: number) => {
        const width = window.innerWidth;
        if (path.current) {
            // @ts-ignore
            path.current.setAttributeNS(null, "d", `M0 250 Q${width * x} ${250 + progress}, ${width} 250`)
        }
    }

    // @ts-ignore
    const lerp = (x, y, a) => x * (1 - a) + y * a

    const manageMouseEnter = () => {
        if (reqId) {
            cancelAnimationFrame(reqId)
            resetAnimation()
        }
    }

    const manageMouseMove = (e: any) => {
        const { movementY, clientX } = e;
        // @ts-ignore
        const pathBound = path.current.getBoundingClientRect();
        x = (clientX - pathBound.left) / pathBound.width;
        progress += movementY
        setPath(progress);
    }

    const manageMouseLeave = () => {
        animateOut();
    }

    const animateOut = () => {
        const newProgress = progress * Math.sin(time);
        progress = lerp(progress, 0, 0.025);
        time += 0.1;
        setPath(newProgress);
        if (Math.abs(progress) > 0.75) {
            reqId = requestAnimationFrame(animateOut);
        }
        else {
            resetAnimation();
        }
    }

    const resetAnimation = () => {
        time = Math.PI / 2;
        progress = 0;
    }

    return (
        <div className={`${styles.line}`}>
            <div onMouseEnter={() => { manageMouseEnter() }} onMouseMove={(e) => { manageMouseMove(e) }} onMouseLeave={() => { manageMouseLeave() }} className={`${styles.box}`}></div>
            <svg>
                <path className="dark:stroke-[#fff] stroke-[#BDBDBD]" ref={path}></path>
            </svg>
        </div>
    );
}

export default CurveLine;