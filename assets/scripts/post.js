import data from "../db/store.js";


function mountPostList(className,listItems){
    const elem = document.getElementsByClassName(className)[0];
    let postsHtml = '';
    for (const item of data['posts']) {
        postsHtml += '<li class="post">'+item.content+'</li>\n';
    }
    elem.innerHTML = postsHtml;
}









export {mountPostList};
