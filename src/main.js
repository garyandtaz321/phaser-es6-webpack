import 'pixi'
import 'p2'
import Phaser from 'phaser'

import BootState from './states/boot'
import SplashState from './states/splash'
import GameState from './states/game'
import IntroState from './states/intro'

class Game extends Phaser.Game {

  constructor () {
    let width = document.documentElement.clientWidth > 768 ? 768 : document.documentElement.clientWidth
    let height = document.documentElement.clientHeight > 1024 ? 1024 : document.documentElement.clientHeight

    super(width, height, Phaser.AUTO, 'content', null)

    this.state.add('Boot', BootState, false)
    this.state.add('Splash', SplashState, false)
    this.state.add('Game', GameState, false)
    this.state.add('Intro', IntroState , false)

    this.state.start('Boot')
  }
}

window.game = new Game()
