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
        // doc.data() is never undefined for query doc snapshots
        allNames.push(doc.data());
    });
    return allNames;
}

export async function getAllTimes(): Promise<PlayerTime[]> {
    const querySnapshot = await getDocs(timeRef);
    let allTimes: PlayerTime[] = []
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        allTimes.push(doc.data());
    });
    return allTimes;
}

export async function getAllDeaths(): Promise<PlayerDeath[]> {
    const querySnapshot = await getDocs(deathRef);
    let allDeaths: PlayerDeath[] = []
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        allDeaths.push(doc.data());
    });
    return allDeaths;
}