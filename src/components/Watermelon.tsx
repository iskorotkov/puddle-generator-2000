import { memo } from 'react'
import redWatermelon from '../assets/red_watermelon.svg'
import wholeWatermelon from '../assets/whole_watermelon.svg'
import yellowWatermelon from '../assets/yellow_watermelon.svg'
import { RenderPosition } from '../types'
import Renderer from './Renderer'

function Watermelon({
  type,
  position,
}: {
  type: 'whole' | 'red' | 'yellow'
  position: RenderPosition
}) {
  return (
    <Renderer
      position={position}
      image={{
        src:
          type === 'whole'
            ? wholeWatermelon
            : type === 'red'
            ? redWatermelon
            : yellowWatermelon,
        alt: 'Watermelon',
      }}
    />
  )
}

export default memo(Watermelon)
