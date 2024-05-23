let box = document.querySelector(`.box`)
let content = document.querySelector(`.content`)
let topBar = document.querySelector(`.top-bar`)
let bottomBar = document.querySelector(`.bottom-bar`)


window.addEventListener("scroll", function(){

    let height = document.documentElement.scrollHeight;
    let clientHeight = document.documentElement.clientHeight;
    let fromtop = document.documentElement.scrollTop;
    let equation = height - clientHeight;
    let final = fromtop * 100/equation
    
    content .innerHTML = `${Math.round(final)}`
    box .style .background = `conic-gradient(rgba(0,212,255,1) ${final}%, rgba(9,9,121,1) ${final}%)`;
    topBar .style .width = `${final}%`
    topBar .style .background = `rgb(245, 66, 224)`;
    
    bottomBar .style .width = `${final}%`
    bottomBar .style .background = `rgb(245, 66, 224)`;


})




