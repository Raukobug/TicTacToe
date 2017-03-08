import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SetPlayersPage } from '../pages/set-players/set-players';
import { Generateimage } from '../pipes/generateimage'
import { Firstletterlarge } from '../pipes/firstletterlarge';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SetPlayersPage,
    Generateimage,
    Firstletterlarge
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SetPlayersPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
