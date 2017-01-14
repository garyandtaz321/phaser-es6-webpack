/* globals __DEV__ */
import Phaser from 'phaser'
import Mushroom from '../sprites/Mushroom'
import {setResponsiveWidth} from '../utils'
import PhaserI from 'PhaserText'
import textInput from '../Objects/textInput'
import localStorageManager from '../Objects/localStorageManager'
var text;
var Storage
export default class extends Phaser.State {

  init () {}
  preload () {}

  create () {
text = new textInput(this.game);
Storage = new localStorageManager(this.game);
console.log(text);
console.log(Storage);
text.createTextInput(200 , 200 , '18px Arial' , "Insert Song Lyrics here" , 1 , 18 , 400 , "#212121" , text, "Name");
text.createTextInput(200 , 400 , '18px Arial' , "Insert Song Lyrics here" , 1 , 18 , 400 , "#212121" , text, "Names");
Storage.createcheckLocalStorage('Username', 'Billy')
  }



  update (){
text.update("Name")
text.update("Names")
Storage.checkLocalStorage('Username')
Storage.savetoLocalStorage('Usernamess', 'Bob')
  }
}
