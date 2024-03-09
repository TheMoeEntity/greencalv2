import { useState, useRef, useLayoutEffect, ReactNode } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    useReducedMotion,
} from "framer-motion";

type ParallaxProps = {
    children: ReactNode;
    offset?: number;
};

const Parallax = ({ children, offset = 70 }: ParallaxProps): JSX.Element => {
    const prefersReducedMotion = useReducedMotion();
    const [elementTop, setElementTop] = useState(0);
    const [clientHeight, setClientHeight] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    const { scrollY } = useScroll();

    const initial = elementTop - clientHeight;
    const final = elementTop + offset;

    const yRange = useTransform(scrollY, [initial, final], [offset, -offset]);
    const y = useSpring(yRange, { stiffness: 300, damping: 90 });

    useLayoutEffect(() => {
        const element = ref.current;
        if (!element) { return }
        const onResize = () => {
            setElementTop(
                element.getBoundingClientRect().top + window.scrollY ||
                window.scrollY

            );
            setClientHeight(window.innerHeight);
        };
        onResize();
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, [ref]);

    // Don't parallax if the user has "reduced motion" enabled
    if (prefersReducedMotion) {
        return <>{children}</>;
    }

    return (
        <motion.div ref={ref} style={{ y, scale: 1 }}>
            {children}
        </motion.div>
    );
};

export default Parallax;