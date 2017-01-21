import Phaser from 'phaser'
import { centerGameObjects } from '../utils'
import localStorageManager from '../Objects/localStorageManager'
var Storage
export default class extends Phaser.State {

  init () {}

  preload () {
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg')
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar')
    centerGameObjects([this.loaderBg, this.loaderBar])

    this.load.setPreloadSprite(this.loaderBar)
    //
    // load your assets
    //
    this.load.image('mushroom', 'assets/images/mushroom2.png')

    

    this.load.image('blackbar', 'assets/intro/blackbar.png')
    this.load.spritesheet('FBI', 'assets/intro/fbi.png', 420, 500)
    this.load.spritesheet('trumpback', 'assets/intro/trumpback.png', 575, 475)
    this.load.audio('intromus', 'assets/intro/introsong.mp3')

  }

  create () {
    Storage = new localStorageManager(this.game);
Storage.createcheckLocalStorage('Username', 'Billy')
Storage.createcheckLocalStorage('Money', 1000000)
    this.state.start('Intro')
  }

}
