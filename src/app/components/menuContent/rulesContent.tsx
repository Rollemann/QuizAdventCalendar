import React from 'react'
// TODO: BG Color ändern, vielleicht Style noch etwas anpassen vom Text
function RulesContent() {


  return (
    <div className={'w-[36rem] h-[21.6rem] bg-[url("/Speechbubble.svg")] bg-no-repeat bg cover scale-x-[-1] flex justify-center items-center'}>
      <ul className='scale-x-[-1] text-xl leading-10' style={{ font: "Retro Gaming" }}>
        <li>Use W, A, S, D or Arrow Keys to move.</li>
        <li>Use E and F to interact.</li>
        <li>Get the key and treasure of each Level.</li>
        <li>Be as fast as you can and avoid to die. ;)</li>
      </ul>
    </div>
  )
}

export default RulesContent