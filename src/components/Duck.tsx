import { memo } from 'react'
import brownDuck from '../assets/brown_duck.svg'
import greenDuck from '../assets/green_duck.svg'
import { RenderPosition } from '../types'
import DialogPopup from './DialogPopup'
import Renderer from './Renderer'

function Duck({
  type,
  position,
}: {
  type: 'brown' | 'green'
  position: RenderPosition
}) {
  return (
    <>
      <Renderer
        position={position}
        image={{
          src: type === 'brown' ? brownDuck : greenDuck,
          alt: 'Duck',
          width: '5%',
        }}
      />
      <DialogPopup
        position={{
          top: `calc(${position.top} - 5em)`,
          left: position.left,
        }}
        bgColor='rgb(124, 60, 22)'
        textColor='white'
        borderColor='rgb(119, 54, 16)'
        dialog={{
          lines: [
            {
              duration: 600 + Math.random() * 3000,
            },
            {
              text: (() => {
                const rand = Math.random()
                return rand < 0.25
                  ? 'Quack!'
                  : rand < 0.5
                  ? 'Quack quack!'
                  : rand < 0.75
                  ? 'Quack quack quack!'
                  : 'QUUUUAAAAAAACK!'
              })(),
              duration: 600 + Math.random() * 1000,
            },
          ],
        }}
      />
    </>
  )
}

export default memo(Duck)
