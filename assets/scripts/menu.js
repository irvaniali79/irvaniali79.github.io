import data from "../db/store.js";


function getRelatedItems(itemName,itemOffset){
    pushItemsToElement('menu__item',data.menu[itemName],itemOffset)
}

function pushItemsToElement(listElementId,elementArray,position){
    if( position != undefined )
        position = elementArray.length;
    for (const element in elementArray){
        document.getElementsByClassName(listElementId).
        splice(position,0,element);
    }
   
}

function mountMenu(className){
    const elem = document.getElementsByClassName(className)[0];
    let cnt = 0;
    let itemsHtml = '';
    for (const item in data['menu']) {
        itemsHtml += 
            `<li class="item menu__item" onClick="getRelatedItems(${item},${cnt})">`
            +item+
            '</li>\n';
        cnt++;
    }
    elem.innerHTML = itemsHtml;
}

export {mountMenu,getRelatedItems };
