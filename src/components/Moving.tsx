import { memo, useState } from 'react'
import { useFrame } from '../hooks/useFrame'
import { Limits, LogicPosition } from '../types'

function Moving({
  acceleration,
  momentum,
  limits,
  getAcceleration,
  onMove,
  children,
}: {
  acceleration: number
  momentum: number
  limits: Limits
  getAcceleration: (currentPosition: LogicPosition) => LogicPosition
  onMove?: (position: LogicPosition) => void
  children: React.ReactNode
}) {
  const [relativePositionXY, setRelativePositionXY] = useState({
    left: 0,
    top: 0,
  })
  const [speedXY, setSpeedXY] = useState({
    left: 0,
    top: 0,
  })

  useFrame(() => {
    const accelerationXY = getAcceleration(relativePositionXY)

    setSpeedXY((prev) => ({
      left: momentum * prev.left + accelerationXY.left,
      top: momentum * prev.top + accelerationXY.top,
    }))

    const clamp = (value: number, min: number, max: number) => {
      if (value < min) return min
      if (value > max) return max
      return value
    }

    setRelativePositionXY((prev) => ({
      left: clamp(prev.left + speedXY.left, limits.left, limits.right),
      top: clamp(prev.top + speedXY.top, limits.top, limits.bottom),
    }))

    if (onMove !== undefined) {
      onMove({
        left: relativePositionXY.left + speedXY.left,
        top: relativePositionXY.top + speedXY.top,
      })
    }
  }, [relativePositionXY, acceleration, speedXY, onMove])

  return (
    <div
      className={`absolute w-[100vw] h-[100vh]`}
      style={{
        top: `${relativePositionXY.top}%`,
        left: `${relativePositionXY.left}%`,
      }}
    >
      {children}
    </div>
  )
}

export default memo(Moving)
