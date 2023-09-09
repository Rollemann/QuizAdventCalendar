'use client'
import { useEffect, useRef } from 'react'
import { setup } from './utilities/setupGaem';
import { gameLoop } from './utilities/gameLoop';

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let ctx: CanvasRenderingContext2D | null = setup(canvasRef.current);
    if (ctx) {
      gameLoop();
    }

  }, [])


  return (
    <canvas ref={canvasRef} className='border-solid border-black border-2 bg-slate-300 w-screen h-screen' />
  )
}
