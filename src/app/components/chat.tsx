'use client'
import { useState } from 'react'

const chat = () => {
    const [showChat, setShowChat] = useState(false);

    const clickHandler = () => {
        setShowChat(!showChat);
    }

    return (
        <div className=''>
            <button onClick={clickHandler}>CHAT</button>
            {showChat && <div className=''>
                <button onClick={clickHandler}>X</button>
                <div> Hier steht Text </div>
                <input type="text" placeholder='Message...' />
            </div>}

        </div>
    )
}

export default chat