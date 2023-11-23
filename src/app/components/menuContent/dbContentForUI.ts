type PlayerTime = {
    id: string | number, // TODO: den Typ hier vielleicht noch anpassen.
    level: number,
    startTime: number, // TODO: den Typ hier vielleicht noch anpassen.
    endTime: number | null // TODO: den Typ hier vielleicht noch anpassen.
}

type PlayerDeath = {
    id: string | number, // TODO: den Typ hier vielleicht noch anpassen.
    level: number
}

type PlayerFinishedTime = {
    id: string | number, // TODO: den Typ hier vielleicht noch anpassen.
    level: number,
    startTime: number, // TODO: den Typ hier vielleicht noch anpassen.
    endTime: number // TODO: den Typ hier vielleicht noch anpassen.
}

type PlayerName = {
    id: string | number, // TODO: den Typ hier vielleicht noch anpassen.
    name: string
}

type PlayerLevelCount = {
    id: string | number, // TODO: den Typ hier vielleicht noch anpassen.
    levelFinished: number
}

type PlayerAvgTime = {
    id: string | number, // TODO: den Typ hier vielleicht noch anpassen.
    avgTime: number
}

type PlayerDeathCount = {
    id: string | number, // TODO: den Typ hier vielleicht noch anpassen.
    deathCount: number
}

export type PlayerContent = {
    id: string | number, // TODO: den Typ hier vielleicht noch anpassen.
    name: string,
    levelFinished: number,
    deathCount: number,
    avgTime: number
}


export function getContentObjectForRanking(playerNames: PlayerName[], playerDeaths: PlayerDeath[], playerTimes: PlayerTime[]): PlayerContent[] {
    const allFinished = getAllPlayerFinishedLevelCount(playerTimes, playerNames);
    const allAvgTimes = getAllPlayersAvgTimes(playerTimes, playerNames);
    const allDeaths = getAllPlayersDeathCounts(playerDeaths, playerNames);
    const namesFinished = mergeObjectListsById(playerNames, allFinished);
    const namesFinishedTimes = mergeObjectListsById(namesFinished, allAvgTimes);
    const namesFinishedTimesDeaths = mergeObjectListsById(namesFinishedTimes, allDeaths);
    return namesFinishedTimesDeaths;
}


function getAllPlayerFinishedLevelCount(allPlayerTimes: PlayerTime[], playerNames: PlayerName[]): PlayerLevelCount[] {
    let count: PlayerLevelCount[] = [];
    const allFinishedLevels: PlayerFinishedTime[] = getAllFinishedLevels(allPlayerTimes);
    for (let i = 0; i < playerNames.length; ++i) {
        const curPlayerID = playerNames[i].id;
        const levelFinished = allFinishedLevels.filter((levelTime) => { return levelTime.id == curPlayerID }).length;
        count.push({ id: curPlayerID, levelFinished: levelFinished });
    }
    return count;
}

function getAllPlayersAvgTimes(allPlayerTimes: PlayerTime[], playerNames: PlayerName[]): PlayerAvgTime[] {
    let avgTimes: PlayerAvgTime[] = [];
    const allFinishedLevels: PlayerFinishedTime[] = getAllFinishedLevels(allPlayerTimes);
    for (let i = 0; i < playerNames.length; ++i) {
        const curPlayerID = playerNames[i].id;
        const allFinishedPlayerLevel = allFinishedLevels.filter((levelTime) => { return levelTime.id == curPlayerID });
        const sumAllTimes = allFinishedPlayerLevel.reduce((prev, curTime) => { return prev + (curTime.endTime - curTime.startTime) }, 0)
        const avgTime = sumAllTimes / allFinishedPlayerLevel.length;
        avgTimes.push({ id: curPlayerID, avgTime: avgTime });
    }
    return avgTimes;
}

function getAllPlayersDeathCounts(allPlayerDeaths: PlayerDeath[], playerNames: PlayerName[]): PlayerDeathCount[] {
    let deathCounts: PlayerDeathCount[] = [];
    for (let i = 0; i < playerNames.length; ++i) {
        const curPlayerID = playerNames[i].id;
        const deathCount = allPlayerDeaths.filter((death) => { return death.id == curPlayerID }).length;
        deathCounts.push({ id: curPlayerID, deathCount: deathCount });
    }
    return deathCounts;
}

function getAllFinishedLevels(allPlayerTimes: PlayerTime[]): PlayerFinishedTime[] {
    return allPlayerTimes.filter((levelTime): levelTime is PlayerFinishedTime => { return levelTime.endTime != null });
}

function mergeObjectListsById(objListA, objListB) {
    let merged = [];
    for (let i = 0; i < objListA.length; i++) {
        merged.push({
            ...objListA[i],
            ...(objListB.find((itmInner) => itmInner.id === objListA[i].id))
        }
        );
    }
    return merged;
}
