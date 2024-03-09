
import { MutableRefObject, useEffect, useState } from "react"

const hover3d = (ref: MutableRefObject<HTMLElement | null>, { x = 0, y = 0, z = 0 }) => {

    const [coords, setCoords] = useState({ x: 0, y: 0 })
    const [isHovering, setIsHovering] = useState<boolean>(false)
    const handleMouseMove = (e: MouseEvent) => {
        if (!ref.current) return
        const { offsetHeight: height, offsetWidth: width } = ref.current
        const { clientX, clientY } = e
        const x = (clientX - width / 2) / width
        const y = (clientY - height / 2) / height
        setCoords({ x, y })
        // console.log(isHovering)
    }
    const handleMouseEnter = () => {
        setIsHovering(true)
    }
    const handleMouseLeave = () => {
        setIsHovering(false)
    }
    useEffect(() => {
        if (ref.current) {
            // console.log("fsfssr35")
            ref.current.addEventListener('mousemove', handleMouseMove)
            ref.current.addEventListener('mouseenter', handleMouseEnter)
            ref.current.addEventListener('mouseleave', handleMouseLeave)
        }

        return () => {
            if (!ref.current) return
            ref.current.removeEventListener('mousemove', handleMouseMove)
            ref.current.removeEventListener('mouseenter', handleMouseEnter)
            ref.current.removeEventListener('mouseleave ', handleMouseLeave)
        }
    }, [ref])

    const { x: xCoord, y: yCoord } = coords
    const xTransform = isHovering ? xCoord * x : 0;
    const yTransform = isHovering ? yCoord * y : 0;
    const zTransform = isHovering ? z : 0
    const transform = `perspective(1000px) rotateX(${xTransform}deg) rotateY(${yTransform}deg) rotateZ(${zTransform}px)`
    const transition = isHovering ? `all 0.3s ease-in-out` : ''

    return { transform, transition }

}


export default hover3d