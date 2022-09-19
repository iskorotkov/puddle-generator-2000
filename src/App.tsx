import { useEffect, useState } from 'react'
import cat from './assets/puddle-generation-cat.png'
import puddle1 from './assets/puddle-generation-puddle-1.png'
import puddle2 from './assets/puddle-generation-puddle-2.png'
import puddle3 from './assets/puddle-generation-puddle-3.png'

interface Image {
  src: string
}

function Cat({ src }: Image) {
  return <img src={src} alt='Cat' />
}

function Puddle({ src }: Image) {
  return <img src={src} alt='Puddle' />
}

function App() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handle = setInterval(() => {
      setProgress((progress) => (progress + 0.05) % 100)
    }, 1)
    return () => clearInterval(handle)
  }, [])

  return (
    <div>
      <div className='absolute top-[10%] -translate-x-[50%] left-[50%]'>
        <Cat src={cat} />
      </div>

      <div>
        {progress > 10 && (
          <div className='absolute bottom-[20%] left-[10%]'>
            <Puddle src={puddle1} />
          </div>
        )}

        {progress > 45 && (
          <div className='absolute bottom-[18%] left-[50%] -translate-x-[50%]'>
            <Puddle src={puddle2} />
          </div>
        )}

        {progress > 90 && (
          <div className='absolute bottom-[20%] right-[10%]'>
            <Puddle src={puddle3} />
          </div>
        )}
      </div>

      <div className='w-full h-24 absolute bottom-0 flex'>
        <div className='relative rounded-md my-4 mx-8 bg-slate-300 flex-1 flex'>
          <span className='text-slate-100 text-xl font-semibold font-sans absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
            Генерация луж (
            {progress <= 10 ? 0 : progress <= 45 ? 1 : progress <= 90 ? 2 : 3}
            /3)...
          </span>

          <div className='bg-blue-500 rounded-md flex-1'></div>
          <div style={{ width: `${100 - progress}%` }}></div>
        </div>
      </div>
    </div>
  )
}

export default App
