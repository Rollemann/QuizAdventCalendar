import React from 'react'

//TODO: Tabellen Style kopieren von rewards
export default function RankingContent() {
    return (
        <div className={'w-[30rem] h-[18rem] m-2 bg-[url("/Speechbubble.svg")] bg-no-repeat bg-cover scale-x-[-1] flex justify-center'}>
            <table className='scale-x-[-1] text-xl border-collapse h-min self-center'>
                <thead className=''>
                    <td>Place</td>
                    <td>Best in Time</td>
                    <td>Best in Death</td>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>PH1</td>
                        <td>PH2</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>PH1</td>
                        <td>PH2</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>PH1</td>
                        <td>PH2</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
