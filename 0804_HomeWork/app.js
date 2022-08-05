const h1 = document.querySelector("h1");

const superEventHandler = {
    mouseEnterHandler: function(){
        h1.innerText= "The Mouse is here!";
        h1.style.color= "green";
    },

    mouseLeaveHandler: function(){
        h1.innerText= "The Mouse is gone!";
        h1.style.color= "cyan";
    },
    
    resizeHandler: function(){
        h1.innerText= "You just resized!";
        h1.style.color= "purple";
    },

    contextMenuHandler: function(){
        h1.innerText= "That was a right click!";
        h1.style.color= "tomato";
    },
}

h1.addEventListener("mouseenter", superEventHandler.mouseEnterHandler);
h1.addEventListener("mouseleave", superEventHandler.mouseLeaveHandler);
window.addEventListener("resize", superEventHandler.resizeHandler);
window.addEventListener("contextmenu", superEventHandler.contextMenuHandler);