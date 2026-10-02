import React, { useEffect, useState } from 'react'

const StarBackground = () => {

    const [stars , setStars] = useState([])
    const [metoers , setMetoers] = useState([])

    const generateStars = () => {
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000);
        const newStars = []

        for(let i = 0 ; i < numberOfStars ; i++){
            newStars.push({
                id:i,
                size:Math.random() * 3 + 1,
                x:Math.random() * 100,
                y:Math.random() * 100,
                opacity:Math.random() * 0.5 + 0.5,
                animationDuration:Math.random() * 4 + 2,
            })
        }

        setStars(newStars)
    }
    const generateMeteors = () => {
        const numberOfMetoers = 5
        const newMetoers = []

        for(let i = 0 ; i < numberOfMetoers ; i++){
            newMetoers.push({
                id:i,
                size:Math.random()  + 1,
                x:Math.random() * 100,
                y:Math.random() * 20,
                delay:Math.random() * 15,
                animationDuration:Math.random() * 3 + 3,
            })
        }

        setMetoers(newMetoers)
    }

    useEffect(() => {
        generateStars()
        generateMeteors()

        const handleResize = () => {
            generateStars()
            
        }

        window.addEventListener('resize', handleResize)

        window.removeEventListener('resize', handleResize)
    } , [])

  return (
    <div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>
            {stars.map((star) => (
                <div key={star.id} className='star animate-pulse-subtle' style={{
                    width:star.size  + "px",
                    height:star.size + "px",
                    left:star.x + "%",
                    top:star.y + "%",
                    opacity:star.opacity,
                    animationDuration:star.animationDuration + "s",
                }}/>
            ))}
            {metoers.map((metoer) => (
                <div key={metoer.id} className='meteor animate-meteor' style={{
                    width:metoer.size * 50 + "px",
                    height:metoer.size * 2 + "px",
                    left:metoer.x + "%",
                    top:metoer.y + "%",
                    animationDelay:metoer.delay,
                    animationDuration:metoer.animationDuration + "s",
                }}/>
            ))}
    </div>
  )
}

export default StarBackground