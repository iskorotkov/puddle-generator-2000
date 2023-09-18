import { useMemo, useState } from 'react'
import Cat from './components/Cat'
import Duck from './components/Duck'
import Fly from './components/Fly'
import Frog from './components/Frog'
import Player from './components/Player'
import Puddle from './components/Puddle'
import Renderer from './components/Renderer'
import Watermelon from './components/Watermelon'
import { LogicPosition, RenderPosition } from './types'

function App() {
  const flySettings = {
    acceleration: 0.2,
    momentum: 0.96,
  }

  const catSettings = [
    {
      acceleration: flySettings.acceleration,
      momentum: 0.5,
    },
    {
      acceleration: flySettings.acceleration / 2,
      momentum: 0.8,
    },
  ]

  const [catTarget, setCatTarget] = useState<LogicPosition | undefined>(
    undefined,
  )

  const playerSettings = useMemo(
    () => ({
      initialPosition: {
        left: '50%',
        top: '10%',
      },
      acceleration: 0.002,
      momentum: 0,
      limits: {
        left: -50,
        top: -10,
        right: 50,
        bottom: 90,
      },
    }),
    [],
  )

  const frogPosition = useMemo(
    () => ({
      left: '50%',
      top: '55%',
    }),
    [],
  )

  const duckPositions = useMemo(
    () => [
      {
        left: '85%',
        top: '75%',
      },
      {
        left: '91%',
        top: '78%',
      },
      {
        left: '85%',
        top: '85%',
      },
      {
        left: '90%',
        top: '90%',
      },
    ],
    [],
  )

  const watermelonPositions: RenderPosition[] = useMemo(
    () => [
      {
        left: '0%',
        top: '80%',
        rotation: -10,
      },

      {
        left: '6%',
        top: '82%',
        rotation: -60,
      },
      {
        left: '0%',
        top: '85%',
        rotation: 50,
      },
      {
        left: '8%',
        top: '88%',
        rotation: 20,
      },
    ],
    [],
  )

  const watermelonPiecesPositions: RenderPosition[] = useMemo(
    () => [
      {
        left: '15%',
        top: '87%',
        rotation: -10,
      },

      {
        left: '19%',
        top: '90%',
        rotation: 25,
      },
      {
        left: '15%',
        top: '92%',
        rotation: 50,
      },
    ],
    [],
  )

  const catsWithFly = (
    <>
      <Cat
        name='Lokum'
        initialPosition={{
          left: '10%',
          top: '10%',
        }}
        target={
          catTarget === undefined
            ? undefined
            : {
                left: catTarget.left + 10,
                top: catTarget.top + 15,
              }
        }
        acceleration={catSettings[0].acceleration}
        limits={{
          left: -10,
          top: -10,
          right: 90,
          bottom: 90,
        }}
        momentum={catSettings[0].momentum}
      />
      <Cat
        name='Toffi'
        initialPosition={{
          left: '10%',
          top: '20%',
        }}
        target={
          catTarget === undefined
            ? undefined
            : {
                left: catTarget.left + 10,
                top: catTarget.top + 5,
              }
        }
        acceleration={catSettings[1].acceleration}
        limits={{
          left: -10,
          top: -20,
          right: 90,
          bottom: 80,
        }}
        momentum={catSettings[1].momentum}
      />
      <Fly
        initialPosition={{
          left: '20%',
          top: '25%',
        }}
        acceleration={flySettings.acceleration}
        momentum={flySettings.momentum}
        limits={{
          left: -15,
          top: -20,
          right: 75,
          bottom: 70,
        }}
        onMove={setCatTarget}
      />
    </>
  )

  const playerWithUi = (
    <>
      <Player
        initialPosition={playerSettings.initialPosition}
        acceleration={playerSettings.acceleration}
        momentum={playerSettings.momentum}
        limits={playerSettings.limits}
      />
      <Renderer
        position={{ top: '10%', left: '90%' }}
        image={{ src: '', alt: 'Use WASD or arrows to move' }}
      />
    </>
  )

  const ducks = duckPositions.map((position, i) => (
    <Duck
      key={i}
      position={position}
      type={i === 0 || i === 3 ? 'brown' : 'green'}
    />
  ))

  const watermelons = watermelonPositions.map((position, i) => (
    <Watermelon key={i} position={position} type='whole' />
  ))

  const watermelonPieces = watermelonPiecesPositions.map((position, i) => (
    <Watermelon
      key={i}
      position={position}
      type={i % 2 === 0 ? 'red' : 'yellow'}
    />
  ))

  const frogWithPuddle = (
    <>
      <Puddle
        position={{
          left: '50%',
          top: '60%',
        }}
      />
      <Frog position={frogPosition} />
    </>
  )

  return (
    <div className='relative w-[100vw] h-[100vh] overflow-clip bg-[rgb(175,223,169)]'>
      {ducks}
      {watermelons}
      {watermelonPieces}
      {frogWithPuddle}
      {playerWithUi}
      {catsWithFly}
    </div>
  )
}

export default App
