import React from 'react'
import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/app/firebase';

async function getRules() {
  /* const res = await fetch('http://localhost:8090/api/collections/rules/records?page=1', {cache:"no-cache"});
  const data = await res.json();
  return data.items; */
  return [{ text: "TODO" }]
}

async function RulesContent() {
  const rulesText = await getRules();
  const writeToDB = async () => {
    await addDoc(collection(db, 'test'), {
      test: 1,
      test2: "hi"
    });
  }

  return (
    <>
      <button onClick={writeToDB} className='bg-white w-max'>Add random stuff to DB</button>
      <div>{rulesText[0].text}</div>
    </>
  )
}

export default RulesContent