import React from 'react'

export default function RewardsContent() {
    return (
        <div className={'w-[34rem] h-[20.4rem] m-2 bg-[url("/Speechbubble.svg")] bg-no-repeat bg-cover flex justify-center'}>
            <table className='text-xl border-collapse h-min self-center w-[90%]'>
                <thead>
                    <tr className='border-b-2 border-dashed border-black [&>*]:border-x-2 [&>*]:border-dashed [&>*]:border-black [&>*]:text-center [&>*]:p-2 [&>*]:font-bold'>
                        <th>Place</th>
                        <th>Time</th>
                        <th>Do not Die</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='border-b-2 border-dashed border-black [&>*]:border-x-2 [&>*]:border-dashed [&>*]:border-black [&>*]:text-center [&>*]:p-2'>
                        <td>1</td>
                        <td>50€/CHF</td>
                        <td>50€/CHF</td>
                    </tr>
                    <tr className='border-b-2 border-dashed border-black [&>*]:border-x-2 [&>*]:border-dashed [&>*]:border-black [&>*]:text-center [&>*]:p-2'>
                        <td>2</td>
                        <td>25€/CHF</td>
                        <td>25€/CHF</td>
                    </tr>
                    <tr className='border-b-2 border-dashed border-black [&>*]:border-x-2 [&>*]:border-dashed [&>*]:border-black [&>*]:text-center [&>*]:p-2'>
                        <td>3</td>
                        <td>15€/CHF</td>
                        <td>15€/CHF</td>
                    </tr>
                    <tr className='[&>*]:border-x-2 [&>*]:border-dashed [&>*]:border-black [&>*]:text-center [&>*]:p-2'>
                        <td>4+</td>
                        <td>5€/CHF</td>
                        <td>5€/CHF</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
