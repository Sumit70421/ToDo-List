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
function clearCard(){

}

// Adding new card and displaying it in the mainlist 

function createCard(name){
    var template = document.getElementById("cardTemp");
    var cardTitle = document.createTextNode(name);
    template.querySelector("h2").appendChild(cardTitle); 
    var innerHtml1= template.innerHTML;
    console.log(innerHtml1);
    document.getElementById("cardList").innerHTML+= innerHtml1; 
    clearCard();
}

// function for creating heading
// function temple(name){
//     this.name=name;
    
// }
function addMasterItem(){
    var listName= document.getElementById("listName").value;
    var blur = document.getElementById("main-page");
    blur.classList.remove('blurClass');
    masterList.push(listName);
    popUp.style.display="none";
    createCard(listName) ;
    renderPage();
}









