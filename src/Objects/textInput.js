import Phaser from 'phaser'
import {setResponsiveWidth} from '../utils'
import PhaserI from 'PhaserText'
var textbox

var textInput =  function(game){
this._game = game
}

textInput.prototype = {
    createTextInput(x , y , font , placeInput, minInput, maxInput, width , fill ,type){
this._game.add.plugin(Fabrique.Plugins.InputField);
textbox = game.add.inputField(x, y, {
    font: font,
    fill: fill,
    fontWeight: 'bold',
    width: width,
    padding: 8,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 6,
    placeHolder: placeInput,
    type: Fabrique.InputType.text
});


    },
    update()
        {
            console.log(textbox.value);
        },

}

module.exports = textInput;
