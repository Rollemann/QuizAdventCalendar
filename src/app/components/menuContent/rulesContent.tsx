import React from 'react'
import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/app/firebase';
import { useContentContext } from '@/app/contexts/ContentContext';

async function RulesContent() {
  const { content } = useContentContext();

  /* const writeToDB = async () => {
    await addDoc(collection(db, 'test'), {
      test: 1,
      test2: "hi"
    });
  } */

  return (
    <>
      {
        content == 'rules' && <>
          {/* <button onClick={writeToDB} className='bg-white w-max'>Add random stuff to DB</button> */}
          <div className={'h-[17rem] bg-[url("/Speechbubble.svg")] bg-no-repeat scale-x-[-1] flex'}>
            <div className='scale-x-[-1] justify-end'>
              <ul className='mt-11 mr-10 text-xl' style={{ font: "Retro Gaming" }}>
                <li>Use W, A, S, D or Arrow Keys to move.</li>
                <br />
                <li>Use E and F to interact.</li>
                <br />
                <li>Get the key and treasure of each Level.</li>
                <br />
                <li>Be as fast as you can and avoid to die. ;)</li>
              </ul>
            </div>
          </div>
        </>
      }
    </>
  )
}

export default RulesContent