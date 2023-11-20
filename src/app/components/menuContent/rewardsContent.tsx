import React from 'react'

export default function RewardsContent() {
    return (
        <div className={'w-[24rem] h-[14.4rem] m-2 bg-[url("/Speechbubble.svg")] bg-no-repeat bg-cover flex justify-center'}>
            <table className='text-xl border-collapse h-min self-center'>
                <thead>
                    <td>Place</td>
                    <td>Best in Time</td>
                    <td>Best in Death</td>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>50€/CHF</td>
                        <td>50€/CHF</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>25€/CHF</td>
                        <td>25€/CHF</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>20€/CHF</td>
                        <td>20€/CHF</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
