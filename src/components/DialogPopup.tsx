import { memo, useEffect, useState } from 'react'
import { Dialog, RenderPosition } from '../types'

function DialogPopup({
  position,
  bgColor,
  textColor,
  borderColor,
  dialog,
}: {
  position: RenderPosition
  bgColor: string
  textColor: string
  borderColor: string
  dialog: Dialog
}) {
  const [lineIndex, setLineIndex] = useState(0)

  const switchToNextLine = () => {
    setLineIndex((i) => (i + 1) % dialog.lines.length)
  }

  useEffect(() => {
    const timeout = setTimeout(
      switchToNextLine,
      dialog.lines[lineIndex].duration,
    )
    return () => {
      clearTimeout(timeout)
    }
  }, [lineIndex, dialog])

  return (
    <>
      {dialog.lines[lineIndex].text !== undefined ? (
        <div
          className={`absolute translate-x-[-50%] translate-y-[-50%] py-4 px-8 rounded-full min-w-[10em] text-center border-4`}
          style={{
            top: `calc(${position.top})`,
            left: `calc(${position.left})`,
            backgroundColor: bgColor,
            color: textColor,
            borderColor,
          }}
        >
          {dialog.lines[lineIndex].text}
        </div>
      ) : null}
    </>
  )
}

export default memo(DialogPopup)
