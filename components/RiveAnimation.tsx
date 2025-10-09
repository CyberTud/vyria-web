'use client'

import { useRive, UseRiveOptions } from '@rive-app/react-canvas'

interface RiveAnimationProps {
  src: string
  stateMachines?: string
  autoplay?: boolean
  className?: string
}

export default function RiveAnimation({ 
  src, 
  stateMachines = 'State Machine 1', 
  autoplay = true,
  className = ''
}: RiveAnimationProps) {
  const { RiveComponent } = useRive({
    src,
    stateMachines,
    autoplay,
  })

  return (
    <div className={className}>
      <RiveComponent />
    </div>
  )
}

// Usage example:
// <RiveAnimation 
//   src="/animations/language-learning.riv" 
//   stateMachines="State Machine 1"
//   className="w-full h-full"
// />

