var container = document.getElementById("container");
var elem = document.createElement("div");
var grids = document.querySelectorAll(".grid");
var clearbtn = document.getElementById("clear");

for(var i=0; i<256; i++){
    createel()
}


window.addEventListener("load",  changeColor)


clearbtn.addEventListener("click", ()=>{
    grids = document.querySelectorAll(".grid");
    grids.forEach((l)=>{
        l.style.background = "";
    })
});


var numInp = document.getElementById("enter");
var form = document.querySelector("form");

form.addEventListener("submit", function(e){
    e.preventDefault();
    remover();
    var rows = numInp.value;
    container.style.gridTemplateColumns = `repeat(${rows}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    
    for(var i=0; i<(rows*rows); i++){
        createel();
    } 
    changeColor();
    numInp.value = "";
})


    

function changeColor(){
    grids = document.querySelectorAll(".grid");
    clearcolor(grids);
    grids.forEach((l)=>{
        l.addEventListener("mouseover", function(){
            var x = l.style.background;
            if(x==""){
                l.id = 223;
                l.style.background = `rgb(${l.id}, ${l.id}, ${l.id})`;
            } else{
                l.id = parseInt(l.id) - 32;
                l.style.background = `rgb(${l.id}, ${l.id}, ${l.id})`;
            }
        })
    })
}

function remover(){
    while(container.firstChild){
        container.removeChild(container.lastChild);
    }
}

function createel(){
    var temp = elem.cloneNode(true);
    temp.classList.add("grid")
    container.appendChild(temp)
}


function clearcolor(grids){
    grids.forEach((l)=>{
        l.style.background = "";
    })
}