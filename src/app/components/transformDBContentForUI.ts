export type PlayerTime = {
    id: string,
    level: number,
    startTime: number,
    endTime: number | null
}

export type PlayerDeath = {
    id: string,
    level: number
}

export type PlayerDeathWithTime = {
    id: string,
    level: number,
    time: number
}

export type PlayerName = {
    id: string,
    name: string
}

export type PlayerContent = {
    id: string,
    name: string,
    levelFinished: number,
    deathCount: number,
    avgTime: string
}

type PlayerFinishedTime = {
    id: string,
    level: number,
    startTime: number,
    endTime: number
}

type PlayerLevelCount = {
    id: string,
    levelFinished: number
}

type PlayerAvgTime = {
    id: string,
    avgTime: string
}

type PlayerDeathCount = {
    id: string,
    deathCount: number
}

type GeneralPlayerObject = {
    id: string,
    [key: string]: string | number
}


export function getContentObjectForRanking(playerNames: PlayerName[], playerDeaths: PlayerDeath[], playerTimes: PlayerTime[]): PlayerContent[] {
    const allFinished = getAllPlayerFinishedLevelCount(playerTimes, playerNames);
    const allAvgTimes = getAllPlayersAvgTimes(playerTimes, playerNames);
    const allDeaths = getAllPlayersDeathCounts(playerDeaths, playerNames);
    const namesFinished = mergeObjectListsById(playerNames, allFinished);
    const namesFinishedTimes = mergeObjectListsById(namesFinished, allAvgTimes);
    const namesFinishedTimesDeaths = mergeObjectListsById(namesFinishedTimes, allDeaths);
    const allContent: PlayerContent[] = namesFinishedTimesDeaths.map((obj) => {
        return { id: obj.id.toString(), name: obj.name.toString(), levelFinished: Number(obj.levelFinished), deathCount: Number(obj.deathCount), avgTime: obj.avgTime.toString() }
    });
    return allContent;
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
        const avgTimeString = getTimeString(avgTime);
        avgTimes.push({ id: curPlayerID, avgTime: avgTimeString });
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

function mergeObjectListsById(objListA: GeneralPlayerObject[], objListB: GeneralPlayerObject[]) {
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

export function getTimeString(ms: number): string {
    if (ms) {
        const totalSeconds = Math.floor(ms / 1000);
        let minutes: string | number = Math.floor(totalSeconds / 60);
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        let seconds: string | number = totalSeconds % 60;
        seconds = seconds < 10 ? `0${seconds}` : seconds;
        return `${minutes}:${seconds}`;
    }
    return '00:00' 
}

export function getSecondsFromTimeString(minutesSecondString: string): number {
    const times = minutesSecondString.split(':');
    const minutes = parseInt(times[0]);
    const seconds = parseInt(times[1]);
    return (60 * minutes + seconds);
}