import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

import { HomePage } from '../home/home';

/*
  Generated class for the SetPlayers page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-set-players',
  templateUrl: 'set-players.html'
})
export class SetPlayersPage {

  player1:string;
  player2:string;

  constructor(public navCtrl: NavController) {}

  setPlayerNames(){
     this.navCtrl.push(HomePage, {
         p1: this.player1, p2: this.player2
     });
  }

}
