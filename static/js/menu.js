
const menu = {
assistantLinkMenuHtmlElement : document.querySelector('.logo'),

menuVisibility(event){
event.target;
let menuContainerHtmlElement = document.querySelector('.menu-container');
    menuContainerHtmlElement.classList.toggle('menu-container-visibility');
}

};

menu.assistantLinkMenuHtmlElement.addEventListener('click', menu.menuVisibility);
