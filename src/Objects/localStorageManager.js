import Phaser from 'phaser'
import {setResponsiveWidth} from '../utils'

var localStorageManager =  function( game ){
this._game = game

}

localStorageManager.prototype = {

createcheckLocalStorage(StorageID, value){
    if (localStorage.getItem(StorageID) == null){
localStorage.setItem(StorageID, value);    StorageID = value;
console.log("Created StorageID with name: " + StorageID);
 }else {
    console.log("Object: " + StorageID + " already in storage")
}


},

savetoLocalStorage(StorageID, value){
     localStorage.getItem(StorageID);
    if (localStorage.getItem(StorageID) == null){
        console.log("StorageID: " + StorageID + " does not exist, please run function createcheckLocalStorage() or check the name of the varible")
    } else {
        localStorage.setItem(StorageID,value);
    }
},

checkLocalStorage(StorageID){
 localStorage.getItem(StorageID);
    if (localStorage.getItem(StorageID) == null){
        console.log("StorageID: " + StorageID + " does not exist, please run function createcheckLocalStorage() or check the name of the varible")
    } else {
        console.log(localStorage.getItem(StorageID));
    }
},

getLocalStorage(storageID) {
    const val = localStorage.getItem(storageID);

    if (!val) {
        console.warn("StorageID: " + StorageID + " does not exist, please run function createcheckLocalStorage() or check the name of the varible")
        return;
    }
    
    return val;
}


}

module.exports = localStorageManager;