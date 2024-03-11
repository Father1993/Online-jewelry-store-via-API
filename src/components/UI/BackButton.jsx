import { useState, useEffect } from 'react'
import { FaArrowCircleUp } from 'react-icons/fa'
import './BackButton.css'

const BackButton = () => {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        if (window.scrollY > 200) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    return (
        <button className={`scrollButton ${isVisible ? 'visible' : ''}`}>
            {isVisible && (
                <FaArrowCircleUp onClick={scrollToTop}>Наверх</FaArrowCircleUp>
            )}
        </button>
    )
}

export default BackButton
