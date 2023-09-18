import { memo, useCallback, useEffect, useMemo } from 'react'
import khaldun from '../assets/khaldun.svg'
import { Limits, LogicPosition, RenderPosition } from '../types'
import Moving from './Moving'
import Renderer from './Renderer'

function Player({
  initialPosition,
  acceleration,
  limits,
  momentum,
}: {
  initialPosition: RenderPosition
  acceleration: number
  limits: Limits
  momentum: number
}) {
  const accelerationXY: LogicPosition = useMemo(() => ({ left: 0, top: 0 }), [])

  useEffect(() => {
    const onKeyDown = (key: KeyboardEvent) => {
      switch (key.code) {
        case 'ArrowLeft':
        case 'KeyA':
          accelerationXY.left = -1
          break
        case 'ArrowRight':
        case 'KeyD':
          accelerationXY.left = 1
          break
        case 'ArrowUp':
        case 'KeyW':
          accelerationXY.top = -1
          break
        case 'ArrowDown':
        case 'KeyS':
          accelerationXY.top = 1
          break
      }
    }

    const onKeyUp = (key: KeyboardEvent) => {
      switch (key.code) {
        case 'ArrowLeft':
        case 'KeyA':
          accelerationXY.left = 0
          break
        case 'ArrowRight':
        case 'KeyD':
          accelerationXY.left = 0
          break
        case 'ArrowUp':
        case 'KeyW':
          accelerationXY.top = 0
          break
        case 'ArrowDown':
        case 'KeyS':
          accelerationXY.top = 0
          break
      }
    }

    document.addEventListener('keyup', onKeyUp)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keyup', onKeyUp)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  const getAcceleration = useCallback(() => accelerationXY, [])

  return (
    <Moving
      acceleration={acceleration}
      limits={limits}
      momentum={momentum}
      getAcceleration={getAcceleration}
    >
      <Renderer
        position={initialPosition}
        image={{
          src: khaldun,
          alt: 'Player',
        }}
      />
    </Moving>
  )
}

export default memo(Player)
