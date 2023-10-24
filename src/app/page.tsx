'use client'
import { useEffect, useRef } from 'react'
import { setup } from './gamePlay/setupGame';
import { gameLoop } from './gamePlay/gameLoop';
import { getDBData, setDBData } from './gamePlay/dbConnector';

export let canvas: HTMLCanvasElement | null;
export const userID1 = "f4tcj9ht56f842v"
export const userID2 = "dc0gs99jxiop3sa"

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {

    (async () => {
      const playerData = await getDBData(`player/records?filter=(id='${userID1}')`);
      //setDBData(`Player/records/${userID2}`, {Name: "Rolfi"});
      canvas = canvasRef.current;
      if (canvas) {
        let setupResult = setup();
        if (setupResult) {
          let { ctx, sprites } = setupResult;
          gameLoop(ctx, sprites, playerData.items[0]);
          console.log(playerData.items[0].RoomTimes[1]);
        }
      }
    })();
  }, [])


  return (
    <canvas ref={canvasRef} className='border-solid border-black border-2 bg-slate-300' />
  )
}
