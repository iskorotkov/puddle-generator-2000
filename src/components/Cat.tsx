import { memo } from 'react'
import lokum from '../assets/lokum.svg'
import toffi from '../assets/toffi.svg'
import { Limits, RenderPosition } from '../types'
import Moving from './Moving'
import Renderer from './Renderer'

function Cat({
  name,
  initialPosition,
  target,
  acceleration,
  momentum,
  limits,
}: {
  name: 'Lokum' | 'Toffi'
  initialPosition: RenderPosition
  target?: { left: number; top: number }
  acceleration: number
  momentum: number
  limits: Limits
}) {
  return (
    <Moving
      acceleration={acceleration}
      momentum={momentum}
      limits={limits}
      getAcceleration={(currentPosition) => {
        if (target === undefined) return { left: 0, top: 0 }

        const direction = {
          left: target.left - currentPosition.left,
          top: target.top - currentPosition.top,
        }

        const distanceToTarget = Math.sqrt(
          direction.left ** 2 + direction.top ** 2,
        )

        if (distanceToTarget < 1) return { left: 0, top: 0 }

        return {
          left: (acceleration * direction.left) / distanceToTarget,
          top: (acceleration * direction.top) / distanceToTarget,
        }
      }}
    >
      <Renderer
        position={{
          left: initialPosition.left,
          top: initialPosition.top,
        }}
        image={{
          src: name === 'Lokum' ? lokum : toffi,
          alt: 'Cat',
          width: name === 'Lokum' ? '7%' : '6%',
        }}
      />
    </Moving>
  )
}

export default memo(Cat)
