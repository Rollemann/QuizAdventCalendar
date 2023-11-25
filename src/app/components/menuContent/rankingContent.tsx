'use client'
import React from 'react'
import { PlayerContent, getContentObjectForRanking } from '../transformDBContentForUI';

type ListContent = {
    nameTime: string,
    nameDeath: string,
    avgTime: number,
    deathCount: number,
    levelFinished: number,
}

//TODO: Tabellen Style kopieren von rewards
export default function RankingContent() {
    // TODO: hier generator für die zeilen mit infos aus DB
    const getTableData = (): ListContent[] => {
        const tableData = [];
        const allPlayerNames = [{ id: "1", name: "Adam" }, { id: "2", name: "Bernd" }]; // TODO: DB Abfrage hier oder lieber in der Funktion?
        const allPlayerTimes = [{ id: "1", level: 1, startTime: 0, endTime: 100 }, { id: "1", level: 2, startTime: 0, endTime: 200 }, { id: "2", level: 1, startTime: 0, endTime: 200 }, { id: "2", level: 2, startTime: 0, endTime: 400 }]; // TODO: DB abfrage hier;
        const allPlayerDeaths = [{ id: "1", level: 1 }, { id: "1", level: 3 }, { id: "1", level: 3 }, { id: "2", level: 1 }, { id: "2", level: 1 }, { id: "1", level: 2 }, { id: "1", level: 1 }]; // TODO: DB abfrage hier;
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
        return contentForList;
    }
    //TODO: td aus Thead raus
    return (
        <div className={'w-[60rem] h-[36rem] m-2 bg-[url("/Speechbubble.svg")] bg-no-repeat bg-cover scale-x-[-1] flex justify-center'}>
            <table className='scale-x-[-1] text-xl border-collapse h-min self-center'>
                <thead className=''>
                    <tr>
                        <th>Place</th>
                        <th>Lowest Time</th>
                        <th>Average Time</th>
                        <th>Lowest Death</th>
                        <th>Number of Deaths</th>
                    </tr>
                </thead>
                <tbody>
                    {getTableData().map((row, i) => {
                        return (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{row.nameTime} (#Level: {row.levelFinished})</td>
                                <td>{row.avgTime}</td>
                                <td>{row.nameDeath} (#Level: {row.levelFinished})</td>
                                <td>{row.deathCount}</td>
                            </tr>
                        )
                    })}
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
