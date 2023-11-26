'use client'
import { useEffect, useState } from 'react'
import { PlayerContent, getContentObjectForRanking } from '../transformDBContentForUI';
import { getAllDeaths, getAllNames, getAllTimes } from '../DBConnector';

type ListContent = {
    nameTime: string,
    nameDeath: string,
    avgTime: number,
    deathCount: number,
    levelFinished: number,
}

export default function RankingContent() {
    const [listContent, setListContent] = useState<ListContent[]>([]);

    useEffect(() => {
        const getTableData = async () => {
            const tableData = [];
            const allPlayerNames = await getAllNames();
            const allPlayerTimes = await getAllTimes();
            const allPlayerDeaths = await getAllDeaths();
            const contentObject = getContentObjectForRanking(allPlayerNames, allPlayerDeaths, allPlayerTimes);

            // contentObject can't be sorted, so this workaround
            const temp = JSON.stringify(contentObject)
            let contentObjectForSort = JSON.parse(temp);

            const sortByIdAndTime: PlayerContent[] = contentObjectForSort.sort((a: PlayerContent, b: PlayerContent) => { return b.levelFinished - a.levelFinished || a.avgTime - b.avgTime });
            const sortByIdAndDeath: PlayerContent[] = contentObject.sort((a, b) => { return (b.levelFinished - a.levelFinished || a.deathCount - b.deathCount) });

            let contentForList = []
            for (let i = 0; i < sortByIdAndTime.length; ++i) {
                const timeObj = sortByIdAndTime[i];
                const deathObj = sortByIdAndDeath[i];
                contentForList.push({
                    nameTime: timeObj.name,
                    nameDeath: deathObj.name,
                    avgTime: timeObj.avgTime,
                    deathCount: deathObj.deathCount,
                    levelFinished: timeObj.levelFinished,
                });
            }
            setListContent(contentForList);
        };

        getTableData();
    }, []);

    return (
        <div className={'w-[65rem] h-[39rem] m-2 bg-[url("/Speechbubble.svg")] bg-no-repeat bg-cover scale-x-[-1] flex justify-center'}>
            {listContent.length > 0 ? (
                <table className='scale-x-[-1] text-xl border-collapse h-min self-center w-[90%]'>
                    <thead>
                        <tr className='border-b-2 border-dashed border-black [&>*]:border-x-2 [&>*]:border-dashed [&>*]:border-black [&>*]:text-center [&>*]:p-2 [&>*]:font-bold'>
                            <th>&#127941;</th>
                            <th>&#9201;</th>
                            <th>⌀&#9201;</th>
                            <th>&#128128;</th>
                            <th>#&#128128;</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listContent.map((row, i) => {
                            return (
                                <tr key={i} className='border-b-2 border-dashed border-black [&>*]:border-x-2 [&>*]:border-dashed [&>*]:border-black [&>*]:text-center [&>*]:p-2'>
                                    <td>{i + 1}</td>
                                    <td>{row.nameTime} (#Level: {row.levelFinished})</td>
                                    <td>{row.avgTime}</td>
                                    <td>{row.nameDeath} (#Level: {row.levelFinished})</td>
                                    <td>{row.deathCount}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            ) :
                <span className='scale-x-[-1] text-xl border-collapse h-min self-center'>
                    LOADING...
                </span>
            }
        </div>
    )
}
