// Index Page 

var masterList= [];
var addNewList= document.querySelector("span#addlist")
var deleteCard = document.querySelector("#delete");

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
// deleting card 
if(deleteCard){
    deleteCard.addEventListener('click',()=>{
    document.body.childNodes[5].childNodes[0].style.display="none";
})
}

var cardIndex = 1;

// Adding new card and displaying it in the mainlist 

function createCard(name){
    var cardTitle = document.createTextNode(name);
    var template = document.getElementById("cardTemp");
    template.querySelector("h2").appendChild(cardTitle); 
    var innerHtml1= template.innerHTML;
    document.getElementById("cardList").innerHTML+= innerHtml1; 
    var cardID = "card" + cardIndex;
    console.log(cardIndex)
    cardIndex+=1;
    template.classList.add(cardID);
    template.querySelector("h2").removeChild(cardTitle);
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









