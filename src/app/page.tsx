'use client'
import { useEffect, useRef } from 'react'
import { setup } from './gamePlay/setupGame';
import { gameLoop } from './gamePlay/gameLoop';
import { useAuthContext } from './contexts/AuthContext';

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { user } = useAuthContext();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas && user) {
      let setupResult = setup(canvas, user);
      if (setupResult) {
        let { ctx, sprites } = setupResult;
        gameLoop(ctx, sprites, { Name: "", RoomTimes: [] }); // TODO Second argument anpassen
      }
    }
  }, [user])

  return (
    <>
      {user ? (
        <canvas ref={canvasRef} className='border-solid border-black border-2 bg-slate-300' />
      ) : (
        <h1 className='mt-[25%] text-xl'>Please login with the provided credentials. A public version will be available soon.</h1>
      )
      }
    </>
  )
}
