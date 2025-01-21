import { memo } from 'react'
import frog from '../assets/frog.svg'
import { RenderPosition } from '../types'
import DialogPopup from './DialogPopup'
import Renderer from './Renderer'

function Frog({ position }: { position: RenderPosition }) {
  return (
    <>
      <Renderer
        position={position}
        image={{
          src: frog,
          alt: 'Frog',
        }}
      />
      <DialogPopup
        position={{
          top: `calc(${position.top} - 5em)`,
          left: position.left,
        }}
        bgColor='rgb(18, 124, 18)'
        textColor='white'
        borderColor='rgb(18, 124, 18)'
        dialog={{
          lines: [
            {
              duration: 2000,
            },
            {
              text: '🐸 FrogOS starting 🐸',
              duration: 2000,
            },
            {
              text: '🐸',
              duration: 500,
            },
            {
              text: '🐸🐸',
              duration: 500,
            },
            {
              text: '🐸🐸🐸',
              duration: 1000,
            },
            {
              text: '> if today().is_wednesday():',
              duration: 3000,
            },
            {
              text: `> say("It is Wednesday, my dudes!")`,
              duration: 3000,
            },
            {
              text: `🐸 says: It is Wednesday, my dudes!`,
              duration: 3000,
            },
            {
              text: 'Frog has finished executing with exit code 0',
              duration: 5000,
            },
          ],
        }}
      />
    </>
  )
}

export default memo(Frog)
