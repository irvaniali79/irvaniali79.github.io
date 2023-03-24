import data from "../db/store.js";


function mountPostList(className,listItems){
    const elem = document.getElementsByClassName(className);
    for (const item in data[listItems]) {
        if ( item.body )elem.innerHtml = item.body;
        else elem.innerHtml = '<li class="post">'+item.content+'<li>';
    }
}









export {mountPostList};
