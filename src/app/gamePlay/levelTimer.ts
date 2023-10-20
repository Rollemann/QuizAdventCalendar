class levelTimerClass {
    currentLevel: number = 0; // TODO weiss nicht ob ich das brauche
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

    getMillisecondsPastFromStart(): number{
        const currentTime = new Date(); 
        return (currentTime.getTime() - this.startTime.getTime())
    }

    getTimeString(): string{        
        return (new Date(this.getMillisecondsPastFromStart()).toISOString().slice(14, 19));
    }

    getReady(){
        this.isReady = true;
    }
}

export let levelTimer = new levelTimerClass();