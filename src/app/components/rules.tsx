'use client'
import { useState } from 'react'
//todo: Pixel "?" einfügen
const rules = () => {
    const [showText, setShowText] = useState(false);

    const clickHandler = () => {
        setShowText(!showText);
    }

    return (
        <div className='mx-5'>
            <img src="./Questionmark.png" alt="?" width={"80px"} onClick={clickHandler} />
            {showText && <div className='bg-orange-300 fixed'>
                <button onClick={clickHandler}>X</button>
                <span>Hier stehen dann die Regeln!</span>
                </div>}
        </div>
    )
}

export default rules