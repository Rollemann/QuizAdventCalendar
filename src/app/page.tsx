'use client'
import { useEffect, useRef } from 'react'
import { setup } from './gamePlay/setupGame';
import { gameLoop } from './gamePlay/gameLoop';
import { useAuthContext } from './contexts/AuthContext';
import { getAllTimesByUserId } from './components/DBConnector';

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { user } = useAuthContext();

  useEffect(() => {
    (async () => {
      const canvas = canvasRef.current;
      if (canvas && user) {
        const allUserTimes = await getAllTimesByUserId(user.uid);
        let setupResult = await setup(canvas, user, allUserTimes);
        if (setupResult) {
          let { ctx, sprites } = setupResult;
          gameLoop(ctx, sprites);
        }
      }
    })();
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
