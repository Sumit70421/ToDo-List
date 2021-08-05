// Index Page 

var masterList= [];
var addNewList= document.querySelector("span#addlist")
// Rendering the First Page 
function renderPage(){
    if(masterList.length===0){
        document.getElementById("emptyMsg").style.display="block";
    }
    else{
        document.getElementById("emptyMsg").style.display="none";
    }
}
// adding new list 
addNewList.addEventListener('click', ()=>{
    var blur = document.getElementById("main-page");
    blur.classList.add('blurClass');
    var popUp = document.getElementById("popUp")
    popUp.style.display="flex";
})
function makeCard(name){

}
var cardIndex = 0;
function temple(name){
    this.name=name;
    var temp = document.getElementById("cardTemp");
    var cardTitle = document.createTextNode(this.name);
    temp.querySelector("h2").appendChild(cardTitle);
}
function addMasterItem(){
    var listName= document.getElementById("listName").value;
    var blur = document.getElementById("main-page");
    blur.classList.remove('blurClass');
    masterList.push(listName);
//     var cardTemp = document.getElementById("title")
//     cardTemp.innerHTML=masterList[cardIndex];   
//     cardIndex+=1;
    popUp.style.display="none";
//     blur.classList.remove('blurClass');
// 
    temple(listName) ;
    renderPage();
}







