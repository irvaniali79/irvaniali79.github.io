import {data} from "../db/store.js";


function pushItemsToElement(listElementId,elementArray,position){
    if( position != undefined )
        position = elementArray.length;
    for (element in elementArray){
        document.getElementsByClassName(listElementId).
        splice(position,0,element);
    }
   
}
function getRelatedItems(itemName,itemOffset){
    pushItemsToElement('menu__item',data[itemName],itemOffset)
}

export {getRelatedItems };
