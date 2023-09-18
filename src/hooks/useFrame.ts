import { DependencyList, useEffect } from 'react'

const frameTime = 1000 / 60

export const useFrame = (f: React.EffectCallback, deps?: DependencyList) => {
  return useEffect(() => {
    const interval = setInterval(() => {
      f()
    }, frameTime)

    return () => clearInterval(interval)
  }, deps)
}
