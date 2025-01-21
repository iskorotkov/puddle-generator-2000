import { CSSProperties, memo } from 'react'
import { Image, RenderPosition } from '../types'

function Renderer({
  position,
  image,
}: {
  position: RenderPosition
  image: Image
}) {
  const css: CSSProperties = {
    top: `calc(${position.top})`,
    left: `calc(${position.left})`,
    transform:
      position.rotation !== undefined
        ? `rotate(${position.rotation}deg)`
        : undefined,
  }

  if (image.src !== '') {
    return (
      <img
        className={`absolute translate-x-[-50%] translate-y-[-50%]`}
        style={css}
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
      />
    )
  }

  return (
    <div
      className={`absolute translate-x-[-50%] translate-y-[-50%]`}
      style={css}
    >
      {image.alt}
    </div>
  )
}

export default memo(Renderer)
