import { addDoc, doc, collection, getDoc, getDocs, setDoc } from 'firebase/firestore';
import { db } from '@/app/firebase';
import { PlayerDeath, PlayerName, PlayerTime } from './transformDBContentForUI';

const deathRef = collection(db, 'PlayerDeath');
const timeRef = collection(db, 'PlayerTime');
const nameRef = collection(db, 'PlayerName')

export async function addDeath(playerId: string, level: number) {
    const docSnap = await getDoc(doc(timeRef, (playerId + level)));
    if (docSnap.exists()) {
        const timeObj = docSnap.data();
        if (!timeObj.endTime) {
            const deathObj: PlayerDeath = { id: playerId, level: level };
            await addDoc(deathRef, deathObj);
        }
    }
}

export async function addTimeStart(playerId: string, level: number, startTime: number) {
    const docSnap = await getDoc(doc(timeRef, (playerId + level)));
    if (!docSnap.exists()) {
        const startTimeObj: PlayerTime = { id: playerId, level: level, startTime: startTime, endTime: null };
        await setDoc(doc(timeRef, (playerId + level)), startTimeObj);
    }
}

export async function addTimeEnd(playerId: string, level: number, endTime: number) {
    const docSnap = await getDoc(doc(timeRef, (playerId + level)));
    if (docSnap.exists()) {
        const timeObj = docSnap.data();
        if (!timeObj.endTime) {
            timeObj.endTime = endTime;
            await setDoc(doc(timeRef, (playerId + level)), timeObj);
        }
    }
}

export async function getAllNames(): Promise<PlayerName[]> {
    let allNames: PlayerName[] = []
    const querySnapshot = await getDocs(nameRef);
    querySnapshot.forEach((doc) => {
        const dbObj = doc.data();
        const playerNameObj: PlayerName = {id: dbObj.id, name: dbObj.name};
        allNames.push(playerNameObj);
    });
    return allNames;
}

export async function getAllTimes(): Promise<PlayerTime[]> {
    const querySnapshot = await getDocs(timeRef);
    let allTimes: PlayerTime[] = []
    querySnapshot.forEach((doc) => {
        const dbObj = doc.data();
        const playerTimeObj: PlayerTime = {id: dbObj.id, level: dbObj.level, startTime: dbObj.startTime, endTime: dbObj.endTime};
        allTimes.push(playerTimeObj);
    });
    return allTimes;
}

export async function getAllDeaths(): Promise<PlayerDeath[]> {
    const querySnapshot = await getDocs(deathRef);
    let allDeaths: PlayerDeath[] = []
    querySnapshot.forEach((doc) => {
        const dbObj = doc.data();
        const playerDeathObj: PlayerDeath = {id: dbObj.id, level: dbObj.level};
        allDeaths.push(playerDeathObj);
    });
    return allDeaths;
}