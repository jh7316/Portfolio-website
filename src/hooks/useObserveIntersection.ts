import { useState, useEffect, useRef } from "react";

interface IntersectionObserverInit {
    root?: Element | Document | null;
    rootMargin?: string;
    threshold?: number | number[];
}

const useObserveIntersection = (options: IntersectionObserverInit)=>{
    const [isIntersecting, setIsintersecting] = useState(false)
    const targetRef = useRef<HTMLDivElement | null>(null)

    useEffect(()=>{
        const observer = new IntersectionObserver(([entry]) => {
            setIsintersecting(entry.isIntersecting)
        }, options);
    
        if (targetRef.current) {
        observer.observe(targetRef.current)
        }

        if (isIntersecting){
            observer.disconnect()
        }
    
        return () => observer.disconnect()

    },[options, isIntersecting])

    return [targetRef, isIntersecting]


}

export default useObserveIntersection