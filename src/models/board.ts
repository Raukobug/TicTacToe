class Board{

    public tiles: string[][];
    public signsOnBoard:number;

    //Create class
    constructor(){
        this.clear();
    }

    //Check of the tile is occupied
    isOccupied(x:number, y:number){
        if (this.tiles[x][y] == null){
            return false;
        }
        return true;
    }

    //Add sign to a tile
    addSign(x:number, y:number, sign:string){
        if(!this.isOccupied(x, y)){
            this.tiles[x][y] = sign;
            this.signsOnBoard++;
            return true;
        }
        return false;
    }

    //Move sign from one tile to another
    moveSign(oldX:number, oldY:number, x:number, y:number, sign:string){
        //let sign:string = this.getSign(oldX,oldY);
        if(sign == this.getSign(oldX, oldY)){
            if(this.addSign(x,y,sign)){
                this.tiles[oldX][oldY] = null;
                return true;
            }
        }
        return false;
    }

    //Clear the Board
    clear(){
        this.tiles = [];
        for(var i: number = 0; i < 3; i++) {
            this.tiles[i] = [];
            for(var j: number = 0; j< 3; j++) {
                this.tiles[i][j] = null;
            }
        }
        this.signsOnBoard = 0;
    }

    //Get the sign on tile
    getSign(x:number, y:number){
        return this.tiles[x][y];
    }

}

export { Board };