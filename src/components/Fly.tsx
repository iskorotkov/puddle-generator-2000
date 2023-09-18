import { memo } from 'react'
import { Limits, LogicPosition, RenderPosition } from '../types'
import Moving from './Moving'
import Renderer from './Renderer'

function Fly({
  initialPosition,
  acceleration,
  momentum,
  limits,
  onMove,
}: {
  initialPosition: RenderPosition
  acceleration: number
  momentum: number
  limits: Limits
  onMove: (position: LogicPosition) => void
}) {
  return (
    <Moving
      acceleration={acceleration}
      momentum={momentum}
      limits={limits}
      getAcceleration={() => {
        const randomXY = () => acceleration * (2 * Math.random() - 1)
        return {
          left: randomXY(),
          top: randomXY(),
        }
      }}
      onMove={onMove}
    >
      <Renderer
        position={{
          left: initialPosition.left,
          top: initialPosition.top,
        }}
        image={{
          src: '',
          alt: '🪰',
        }}
      />
    </Moving>
  )
}

export default memo(Fly)
