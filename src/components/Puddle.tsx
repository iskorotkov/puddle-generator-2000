import { memo } from 'react'
import puddle from '../assets/puddle.svg'
import { RenderPosition } from '../types'
import Renderer from './Renderer'

function Puddle({ position }: { position: RenderPosition }) {
  return (
    <Renderer
      position={position}
      image={{
        src: puddle,
        alt: 'Puddle',
        width: '25%',
      }}
    />
  )
}

export default memo(Puddle)
