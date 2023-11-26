import { User } from "firebase/auth";
import { addTimeEnd, addTimeStart } from "../components/DBConnector";

export class levelTimerClass {
    startTime: Date = new Date();
    endTime: Date = new Date();
    isRunning: boolean = false;
    isReady: boolean = false;
    user: User;

    constructor(user: User) {
        this.user = user;
    }

    startTimer(level: number) {
        this.isReady = false;
        this.startTime = new Date();
        this.isRunning = true;
        addTimeStart(this.user.uid, level, this.startTime.getTime());
    }

    endTimer(level: number) {
        this.endTime = new Date();
        this.isRunning = false;
        addTimeEnd(this.user.uid, level, this.endTime.getTime());
    }

    getMillisecondsPastFromStart(): number {
        const currentTime = new Date();
        return (currentTime.getTime() - this.startTime.getTime())
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
}