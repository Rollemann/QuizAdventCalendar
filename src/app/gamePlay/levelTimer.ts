class levelTimerClass {
    currentLevel: number = 0;
    startTime: Date = new Date();    
    endTime: Date = new Date();
    isRunning: boolean = false;
    isReady: boolean = false;

    constructor(){}

    startTimer(){
        this.isReady = false;
        this.startTime = new Date(); 
        this.isRunning = true;
    }

    endTimer(){
        this.endTime = new Date();
        this.isRunning = false;
    }

    getMillisecondsPast(): number{
        return (this.endTime.getTime() - this.startTime.getTime())
    }

    getTimeString(): string{
        return (new Date(this.getMillisecondsPast()).toISOString().slice(14, 19));
    }

    getReady(){
        this.isReady = true;
    }
}

export let levelTimer = new levelTimerClass();