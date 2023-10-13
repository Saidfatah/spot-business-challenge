"use client"
import { motion, useAnimate } from "framer-motion";
import { useRef } from "react";
import { easeOutQuart } from "./utils";


const GoButton = () => {
    const [scope, animate] = useAnimate()
    const onHoverAnimationSecondStep = useRef<NodeJS.Timeout>()
    const onHoverStart = async () => {
        // animate GO 
        animate([
            [".o-span", { y: '-1.125rem' }, { duration: .3, ease: easeOutQuart }],
        ])

        animate([
            [".g-span", { y: '1.125rem' }, { duration: .3, ease: easeOutQuart }]
        ])

        onHoverAnimationSecondStep.current = setTimeout(() => {
            animate([
                [".o-span", { x: "200%" }, { duration: .2 }],
            ])
            animate([
                [".g-span", { x: "-200%" }, { duration: .2 }]
            ])
            // animate arrow 
            animate([
                [".arrow", { transform: 'scale(1) translate(-50%,-50%)', opacity: 1 }, { duration: .1 }]
            ])

            // animate background 
            animate([
                [scope.current, { background: "#8551ed" }, { duration: .1 }]
            ])
        }, 300);

    }

    const onHoverEnd = async () => {
        // this fixes the issue where when user hovers and ends hover quickly the 
        // [".o-span", { x: "200%" }, { duration: .2 }] overrides [".o-span", { x: 0, y: 0 }, { duration: 0.5, ease: easeOutQuart }]
        // same form ".g-span" animation
        clearTimeout(onHoverAnimationSecondStep.current)
        // animate arrow 
        animate([
            [".arrow", { transform: 'scale(0.5) translate(-50%,-50%)', opacity: 0, }, { duration: 0.5 }],
        ])

        // animate background 
        animate([
            [scope.current, { background: "#000" }, { duration: 0.5 }]
        ])

        // animate GO
        animate([
            [".o-span", { x: 0, y: 0 }, { duration: 0.5, ease: easeOutQuart }],
        ])
        animate([
            [".g-span", { x: 0, y: 0 }, { duration: 0.5, ease: easeOutQuart }]
        ])
    }

    return (<motion.button
        ref={scope}
        onHoverStart={onHoverStart}
        onHoverEnd={onHoverEnd}
        className="relative overflow-hidden w-[4rem] h-[4rem] bg-black text-[1.125rem] text-white rounded-full "
    >
        <motion.svg
            initial={{
                opacity: 0,
                transform: 'scale(0.5) translate(-50%,-50%)'
            }}
            className="arrow stroke-white opacity-0 absolute z-10 top-1/2 left-1/2 anchor-center"
            width="23"
            stroke="white"
            height="16"
            viewBox="0 0 23 16"
            fill="none"
            xmlns="http://www.w3.org/2000/motion.svg"
        >
            <path d="M15.0711 1.00034L19.6673 5.59654M22.1421 8.07141L15.0711 15.1425" strokeWidth="1.125" />
            <rect width="16" height="1.5" transform="matrix(1 0 0 -1 0 8.82166)" fill="#fff" />
        </motion.svg>

        <span className="g-span inline-block relative ">G</span>
        <span className="o-span inline-block relative">O</span>
    </motion.button>);
}

export default GoButton;