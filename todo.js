// Index Page 

var masterList= [];
var addNewList= document.querySelector("span#addlist")
// adding new list 
addNewList.addEventListener('click', ()=>{
    var blur = document.getElementById("main-page");
    blur.classList.add('blurClass');
    var popUp = document.getElementById("popUp")
    popUp.style.display="flex";
})
function makeCard(name){

}

function addMasterItem(){
    var listName= document.getElementById("listName").value;
    masterList.push(listName);
    var cardTemp = document.getElementById("title")
    cardTemp.innerHTML=masterList[0];   
}







