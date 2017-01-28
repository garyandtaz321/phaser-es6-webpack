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
        this.money = this.storage.getLocalStorage('Money');
    }

    getMoney() {
        return this.money
    }

    setMoney() {
        
    }

    calcMoney(risk, pCash) {
         if (this.game.rnd.integerInRange(0, 100) <= risk){
              window.alert("You have been discovered! , you lost: " + pCash + " from your bank account! Your balance is now: " + this.money);
            //Display Message saying you Lost
            this.money -= pCash;
            localStorage.setItem('Money',this.money);
        } else {
            window.alert("The deal went undetected, you got: " + pCash + " from the deal. Your balance is now: " + this.money);
            this.money += pCash;
            //Display Message saying you won X money
            localStorage.setItem('Money',this.money);
            
        }
    }
}
