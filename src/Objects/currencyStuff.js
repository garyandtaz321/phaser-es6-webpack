import Phaser from 'phaser'
import {setResponsiveWidth} from '../utils'
import localStorageManager from '../Objects/localStorageManager'

export class CurrencyStuff {
    game = null;
    storage = null;
    money = null;

    constructor (game) {
        this.game = game;
        this.storage = new localStorageManager(this.game);
        this.money = Number(this.storage.getLocalStorage('Money'));
    }

    getMoney() {
        return this.money
    }

    setMoney() {
        
    }

    calcMoney(risk, pCash) {
         if (this.game.rnd.integerInRange(0, 100) <= risk){

            //Display Message saying you Lost
            this.money -= pCash;
            localStorage.setItem('Money',this.money);
              window.alert("You have been discovered! , you lost: " + pCash + " from your bank account! Your balance is now: " + this.money);
        } else {
            this.money += (+pCash);
            //Display Message saying you won X money
            localStorage.setItem('Money',Number(this.money));
                        window.alert("The deal went undetected, you got: " + pCash + " from the deal. Your balance is now: " + this.money);
            
        }
    }
}
