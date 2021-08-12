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
function deleteFunction(num){
    const del= "delete" + num;
    if(document.getElementById(del)){
        document.getElementById(del).style.display='none';
    }
    
    
}
var cardIndex = 1;

// Adding new card and displaying it in the mainlist 

function createCard(name){
    var cardTitle = document.createTextNode(name);
    var template = document.getElementById("cardTemp");
    template.querySelector("h2").appendChild(cardTitle); 
    var cardID = "card" + cardIndex;
    var deleteID= "delete"+cardIndex;
    var strFunctionDel = 'deleteFunction('+cardIndex+')';
    console.log(cardIndex)
    cardIndex+=1;
    template.querySelector('.card').setAttribute('id',deleteID);
    template.querySelector('.bi-trash-fill').setAttribute('onclick',strFunctionDel);
    var innerHtml1= template.innerHTML;
    document.getElementById("cardList").innerHTML+= innerHtml1; 
    template.querySelector("h2").removeChild(cardTitle);
}

function addMasterItem(){
    var listName= document.getElementById("listName").value;
    var blur = document.getElementById("main-page");
    blur.classList.remove('blurClass');
    masterList.push(listName);
    popUp.style.display="none";
    createCard(listName) ;
    renderPage();
}









