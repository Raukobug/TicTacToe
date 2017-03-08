import { Injectable, Pipe } from '@angular/core';

/*
  Generated class for the Generateimage pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'generateimage'
})
@Injectable()
export class Generateimage {
  /*
    Takes a value and makes it lowercase.
   */
  transform(value, args) {
    let image:string;
    if(value == "X"){
       image = "assets/x.png";
    }else if(value == "O"){
      image = "assets/o.png";
    }else{
      image = "assets/empty.png";
    }
    return image;
  }
}
