import { useState, useEffect } from 'react'
import './AutoChangingText.scss'

const texts = [
    'Adopt a pet, save a life!',
    'Find your new best friend today!',
    'Give a shelter pet a loving home!',
    'Support our shelter, donate now!',
    'Volunteer and make a difference!',
    'Every pet deserves a second chance!',
    'Join our community of pet lovers!',
    'Help us care for homeless pets!',
    'Your new furry friend is waiting!',
    'Spread love, adopt a shelter pet!'
]

function AutoChangingText() {
    const [index, setIndex] = useState(0)
    const [fade, setFade] = useState(true)

    useEffect(() => {
        const intervalID = setInterval(() => {
            setFade(false)
            setTimeout(() => {
                setIndex(prevIndex => (prevIndex + 1) % texts.length)
                setFade(true)
            }, 500)
        }, 5000)

        return () => clearInterval(intervalID)
    }, [])

    return (
        <div className="auto-changing-text">
            <span className={fade ? 'fade-in' : 'fade-out'}>{texts[index]}</span>
        </div>
    )
}

export default AutoChangingText