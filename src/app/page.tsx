'use client'
import { useEffect, useRef } from 'react'
import { setup } from './gamePlay/setupGame';
import { gameLoop } from './gamePlay/gameLoop';

export let canvas: HTMLCanvasElement | null;

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const userID = "f4tcj9ht56f842v" // "dc0gs99jxiop3sa"
    fetch("http://localhost:8090/api/collections/player/records?filter=(id='f4tcj9ht56f842v')", { cache: 'no-cache' })
      .then((res) => res.json())
      .then((data) => {
        const playerInfos = data.items[0];        
        canvas = canvasRef.current;
        if (canvas) {
          let setupResult = setup();
          if (setupResult) {
            let { ctx, sprites } = setupResult;
            gameLoop(ctx, sprites, playerInfos);
          }
        }
      })
  }, [])


  return (
    <canvas ref={canvasRef} className='border-solid border-black border-2 bg-slate-300' />
  )
}
