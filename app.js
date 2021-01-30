require("./index.scss");

// 获取屏幕宽度（viewPort)
let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;

// 获取html的dom
let htmlDom = document.getElementsByTagName("html")[0];
// 设置html 的fontSize
htmlDom.style.fontSize = htmlWidth / 10 + "px";


window.addEventListener("resize", ()=>{
    let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    htmlDom.style.fontSize = htmlWidth / 10 + "px";

})

