import { useEffect, useState } from 'react'
import anime from 'animejs'
import Lottie from 'lottie-react'
import animaLogo from '@/assets/beelieve.json'

interface slashProps {
  finishLoading: () => void
}

export default function SplashScreen({ finishLoading }: slashProps) {
  const [_, setIsMounted] = useState(false)

  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    })
    loader.add({
      targets: '#videoSlash',
      delay: 0,
      scale: 1,
      duration: 3300,
      easing: 'easeInOutExpo',
    })
  }
  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10)
    animate()
    return () => clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="bg-gradient-to-tr from-slate-50 to-slate-200 w-screen h-screen justify-center items-center flex">
      <Lottie animationData={animaLogo} className="h-36" id="videoSlash" />
    </div>
  )
}
