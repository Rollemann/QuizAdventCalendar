import { User } from "firebase/auth";
import { addTimeEnd, addTimeStart } from "../components/DBConnector";
import { PlayerTime } from "../components/transformDBContentForUI";

export class levelTimerClass {
    startTime: Date | null = null;
    endTime: Date | null = null;
    isRunning: boolean = false;
    isReady: boolean = false;
    user: User;
    allUserTimesByLevel: PlayerTime[] = [];

    constructor(user: User, allUserTimes: PlayerTime[]) {
        this.user = user;
        this.transformPlayerTimeArray(allUserTimes);
    }

    startTimer(level: number) {
        this.isReady = false;
        this.isRunning = true;
        this.endTime = null;
        if (!this.startTime) {
            this.startTime = new Date();
        }
        this.setStartTime(level, this.startTime.getTime());
    }

    endTimer(level: number) {
        this.endTime = new Date();
        this.isRunning = false;
        this.startTime = null;
        this.setEndTime(level, this.endTime.getTime());
    }

    getMillisecondsPastFromStart(): number {
        const currentTime = new Date();
        if (this.startTime) {
            return (currentTime.getTime() - this.startTime.getTime());
        }
        return 0;
    }

    getTimeString(): string {
        const totalSeconds = Math.floor(this.getMillisecondsPastFromStart() / 1000);
        let minutes: string | number = Math.floor(totalSeconds / 60);
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        let seconds: string | number = totalSeconds % 60;
        seconds = seconds < 10 ? `0${seconds}` : seconds;
        return `${minutes}:${seconds}`;
    }

    getReady() {
        this.isReady = true;
    }

    getInitialTimeOfLevel(level: number): string {
        const currTime = this.allUserTimesByLevel[level];
        if (currTime && !currTime.endTime) {
            this.startTime = new Date(currTime.startTime);
            return this.getTimeString();
        }
        return "00:00";
    }

    transformPlayerTimeArray(allUserTimes: PlayerTime[]): PlayerTime[] {
        for (let i = 0; i < allUserTimes.length; i++) {
            const currTime = allUserTimes[i];
            this.allUserTimesByLevel[currTime.level] = currTime;
        }
        return this.allUserTimesByLevel;
    }

    setStartTime(level: number, time: number) {
        addTimeStart(this.user.uid, level, time);
        let currTime = this.allUserTimesByLevel[level];
        if (!currTime) {
            this.allUserTimesByLevel[level] = { id: this.user.uid, level: level, startTime: time, endTime: null };
        }
    }

    setEndTime(level: number, time: number) {
        addTimeEnd(this.user.uid, level, time);
        let currTime = this.allUserTimesByLevel[level];
        if (currTime && !currTime.endTime) {
            this.allUserTimesByLevel[level].endTime = time;
        }
    }
}