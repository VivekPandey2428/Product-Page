function changeimg(imgs){
    var currimg=document.getElementById("currImg");
    currimg.src=imgs.src;
    currimg.parentElement.style.display="block";
}
var x=10;
export {x};