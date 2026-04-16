import { useEffect, useState } from 'react'

export function useCountUp(target, duration = 1800, active = true) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return

    const startTime = performance.now()
    const easeOut = (t) => 1 - (1 - t) ** 3

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      setCount(Math.round(easeOut(progress) * target))
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [active, target, duration])

  return count
}
