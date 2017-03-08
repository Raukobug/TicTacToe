import { Component } from '@angular/core';

import { NavController, AlertController, NavParams  } from 'ionic-angular';

import { Game } from "../../models/game";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public game:Game;
  oldX:number = null;
  oldY:number = null; 

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public navParams: NavParams) {
    this.game = new Game(navParams.get('p1'),navParams.get('p2'));
    //this.showPrompt();
    
  }

  public getClick(x,y){
    if(!this.game.playerHasWon){
    if(this.game.board.signsOnBoard > 5){
      if(this.oldX == null){
          if(this.game.board.isOccupied(x,y) && this.game.board.getSign(x,y) == (this.game.player1Turn ? this.game.player1.sign : this.game.player2.sign)){
            this.oldX = x;
            this.oldY = y;
        }
      }else{
        if(this.game.moveSign(this.oldX, this.oldY, x, y)){
        this.oldX = null;
        this.oldY = null;
        }

      }
    }else{
      this.game.addSign(x,y);
    }

    if(this.game.checkBoard()){
      this.game.findWinner();
    }
    console.log(this.game.player1Turn);
    console.log(this.oldX);
  }
      }

  showPrompt() {
      let prompt = this.alertCtrl.create({
        title: 'Player name',
        message: "Enter a name for player",
        inputs: [
          {
            name: 'Player1',
            placeholder: 'Player 1'
          },
          {
             name: 'Player2',
             placeholder: 'Player 2'
          },
        ],
        buttons: [
          {
            text: 'Start',
            handler: data => {
              this.game = new Game(data.Player1, data.Player2);
            }
          }
        ]
      });
      prompt.present();
    }

}
