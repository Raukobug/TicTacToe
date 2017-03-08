class Player{
    
    name:string;
    score:number = 0;
    sign:string;

    //Constucts the class
    constructor(name:string, sign:string){
        this.name = name;
        this.sign = sign;
    }

    //Update the score
    updateScore(operator:number = null){
        if(operator){
            this.score += operator;
        }else{
            this.score = 0;
        }
    }
}

export { Player };