import { Player } from "./player";
import { Board } from "./board";

class Game{

    public board:Board;
    public player1:Player;
    public player2:Player;
    public player1Turn:boolean = true;
    public playerHasWon = false;
    public winnerPlacement = 0;

    //Constructing the class
    constructor(p1:string, p2:string){
        this.player1 = new Player(p1, "X");
        this.player2 = new Player(p2, "O");
        this.board = new Board();
    }

    //Switch turn
    switchPlayer(){
        this.player1Turn = !this.player1Turn;
    }

    //Add sign to the board
    addSign(x:number, y:number){
        let sign:string = this.player1Turn ? this.player1.sign : this.player2.sign;
        
        if(this.board.addSign(x,y,sign)){
        this.switchPlayer();
        }      
    }

    //Move Sign on the board
    moveSign(oldX:number, oldY:number, x:number, y:number){
        let sign:string = this.player1Turn ? this.player1.sign : this.player2.sign;
        if(this.board.moveSign(oldX, oldY, x, y, sign)){
            this.switchPlayer();
            return true;
        }
        return false;
    }

    //Clear the board
    public clearBoard(){
        this.board.clear();
        this.playerHasWon = false;
    }

    //Checks if someone won
    checkBoard(){
        if(this.board.tiles[0][0] == this.board.tiles[0][1] && this.board.tiles[0][1] == this.board.tiles[0][2] && this.board.tiles[0][0] != null){
            this.winnerPlacement = 1;
            return true;
        }
        if(this.board.tiles[1][0] == this.board.tiles[1][1] && this.board.tiles[1][1] == this.board.tiles[1][2] && this.board.tiles[1][0] != null){
            this.winnerPlacement = 2;
            return true;
        }
        if(this.board.tiles[2][0] == this.board.tiles[2][1] && this.board.tiles[2][1] == this.board.tiles[2][2] && this.board.tiles[2][0] != null){
            this.winnerPlacement = 3;
            return true;
        }

        if(this.board.tiles[0][0] == this.board.tiles[1][0] && this.board.tiles[1][0] == this.board.tiles[2][0] && this.board.tiles[0][0] != null){
            this.winnerPlacement = 4;
            return true;
        }
        if(this.board.tiles[0][1] == this.board.tiles[1][1] && this.board.tiles[1][1] == this.board.tiles[2][1] && this.board.tiles[0][1] != null){
            this.winnerPlacement = 5;
            return true;
        }
        if(this.board.tiles[0][2] == this.board.tiles[1][2] && this.board.tiles[1][2] == this.board.tiles[2][2] && this.board.tiles[0][2] != null){
            this.winnerPlacement = 6;
            return true;
        }

        if(this.board.tiles[0][0] == this.board.tiles[1][1] && this.board.tiles[1][1] == this.board.tiles[2][2] && this.board.tiles[0][0] != null){
            this.winnerPlacement = 7;
            return true;
        }
        if(this.board.tiles[2][0] == this.board.tiles[1][1] && this.board.tiles[1][1] == this.board.tiles[0][2] && this.board.tiles[2][0] != null){
            this.winnerPlacement = 8;
            return true;
        }
        return false;
    }
    
    findWinner(){
            this.player1Turn ? this.player2.updateScore(1) : this.player1.updateScore(1);
            this.playerHasWon = true;
            //this.clearBoard();
    }

    //Reset Game
    reset(){
        this.player1.updateScore();
        this.player2.updateScore();
        this.clearBoard;
    }

}

export { Game };