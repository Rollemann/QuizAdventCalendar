import React from 'react'

export default function RewardsContent() {
    return (
        <div className={'w-[27rem] h-[16.2rem] m-2 bg-[url("/Speechbubble.svg")] bg-no-repeat bg-cover flex justify-center'}>
            <table className='text-xl border-collapse h-min self-center'>
                <thead className='border-b-2 border-dashed border-black [&>*]:border-x-2 [&>*]:border-dashed [&>*]:border-black [&>*]:text-center [&>*]:p-1 [&>*]:font-bold'>
                    <td>Place</td>
                    <td>Time</td>
                    <td>Don't Die</td>
                </thead>
                <tbody>
                    <tr className='border-b-2 border-dashed border-black [&>*]:border-x-2 [&>*]:border-dashed [&>*]:border-black [&>*]:text-center'>
                        <td>1</td>
                        <td className='text-center'>50€/CHF</td>
                        <td>50€/CHF</td>
                    </tr>
                    <tr className='border-b-2 border-dashed border-black [&>*]:border-x-2 [&>*]:border-dashed [&>*]:border-black [&>*]:text-center'>
                        <td>2</td>
                        <td>25€/CHF</td>
                        <td>25€/CHF</td>
                    </tr>
                    <tr className='[&>*]:border-x-2 [&>*]:border-dashed [&>*]:border-black [&>*]:text-center'>
                        <td>3</td>
                        <td>20€/CHF</td>
                        <td>20€/CHF</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
