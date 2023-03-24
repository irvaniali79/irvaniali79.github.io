import data from "../db/store.js";


function getRelatedItems(itemName,itemOffset){
    pushItemsToElement('menu__item',data.menu[itemName],itemOffset)
}

function pushItemsToElement(listElementId,elementArray,position){
    if( position != undefined )
        position = elementArray.length;
    for (element in elementArray){
        document.getElementsByClassName(listElementId).
        splice(position,0,element);
    }
   
}

function mountMenu(){
    const elem = document.getElementsByClassName(className);
    for (const item in data[listItems]) {
        if ( item.body )elem.innerHtml = item.body;
        else elem.innerHtml = '<li class="post">'+item.content+'<li>';
    }
    
}
export {mountMenu,getRelatedItems };
