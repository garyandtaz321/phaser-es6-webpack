/* globals __DEV__ */
import Phaser from 'phaser'
import Mushroom from '../sprites/Mushroom'
import {setResponsiveWidth} from '../utils'
import PhaserI from 'PhaserText'
import textInput from '../Objects/textInput'
import localStorageManager from '../Objects/localStorageManager'
import { CurrencyStuff } from '../Objects/currencyStuff'
var text;
var Storage
var currency
export default class extends Phaser.State {

  init () {}
  preload () {}

  create () {
text = new textInput(this.game);
Storage = new localStorageManager(this.game);
currency = new CurrencyStuff(this.game);
console.log(text);
console.log(Storage);
console.log(currency);
text.createTextInput(200 , 200 , '18px Arial' , "Insert Song Lyrics here" , 1 , 18 , 400 , "#212121" , text, "Name");
text.createTextInput(200 , 400 , '18px Arial' , "Insert Song Lyrics here" , 1 , 18 , 400 , "#212121" , text, "Names");
currency.setMoney();
currency.calcMoney(70 , 100);
  }



  update (){

  }
}
