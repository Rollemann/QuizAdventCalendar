'use client'
import { useEffect, useRef } from 'react'
import { setup } from './gamePlay/setupGame';
import { gameLoop } from './gamePlay/gameLoop';

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      let setupResult = setup(canvas);
      if (setupResult) {
        let { ctx, sprites } = setupResult;
        gameLoop(ctx, sprites, { Name: "", RoomTimes: [] }); // TODO Second argument anpassen
      }
    }
  }, [])

  return (
      <canvas ref={canvasRef} className='border-solid border-black border-2 bg-slate-300' />
  )
}
