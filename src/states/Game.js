/* globals __DEV__ */
import Phaser from 'phaser'
import Mushroom from '../sprites/Mushroom'
import {setResponsiveWidth} from '../utils'
import PhaserI from 'PhaserText'
import textInput from '../Objects/textInput'
var text;
export default class extends Phaser.State {

  init () {}
  preload () {}

  create () {
text = new textInput(this.game);
console.log(text)
text.createTextInput(200 , 200 , '18px Arial' , "Insert Song Lyrics here" , 1 , 18 , 400 , "#212121" , text);
  }



  update (){
text.update();
  }
}
