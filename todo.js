// Index Page 

var masterList= [];
var item = [];
var addNewList= document.querySelector("span#addlist")


// Rendering the First Page 
function renderPage(){
    if(masterList.length===0){
        document.getElementById("emptyMsg").style.display="block";
        document.getElementById("mobilemsg").style.display="block";
    }
    else{
        document.getElementById("emptyMsg").style.display="none";
        document.getElementById("mobilemsg").style.display="none";
    }
}
// adding new list 
addNewList.addEventListener('click', ()=>{
    var blur = document.getElementById("main-page");
    blur.classList.add('blurClass');
    document.querySelector('#cardList').classList.add('blurClass');
    var popUp = document.getElementById("popUp")
    popUp.style.display="flex";
})
// deleting card 
function deleteFunction(num){
    const del= "delete" + num;
    if(document.getElementById(del)){
        document.getElementById(del).style.display='none';
    }
    masterList.pop();
    renderPage();
}
var cardIndex = 1;
var some; 
// adding item to given card 
function addItemFunction(num){
    let popUpItem = document.getElementById('popUpIn');
    popUpItem.style.display='flex';
    var blur = document.getElementById("main-page");
    blur.classList.add('blurClass');
    document.querySelector('#cardList').classList.add('blurClass');
    some = num;
}                                                                                                                   

function addListItem(){
//        

        let listName = document.getElementById("listNameIn").value;
        document.getElementById('popUpIn').style.display= 'none';
        showOnCard(listName);
        var blur = document.getElementById("main-page");
        blur.classList.remove('blurClass');
        document.querySelector('#cardList').classList.remove('blurClass');
        
}
function showOnCard(caption){
    let str = 'delete'+some;
    let itemLine = document.createElement('p'); 
    let mark = document.createElement('span');
    mark.append( " "+"Mark")
    mark.classList.add('strikeThrough');
    mark.setAttribute('onclick', 'completeTask(event)')
    itemLine.append(caption);
    itemLine.appendChild(mark);
    document.getElementById(str).childNodes[4].appendChild(itemLine); 
}

function completeTask(event){
    let node = event.currentTarget.parentElement;
    node.classList.add('strike')
    let btn = event.currentTarget;
    btn.style.display='none';
}

// Adding new card and displaying it in the mainlist 

function createCard(name){
    var cardTitle = document.createTextNode(name);
    var template = document.getElementById("cardTemp");
    template.querySelector("h2").appendChild(cardTitle); 
    // var cardID = "card" + cardIndex;
    var deleteID= "delete"+cardIndex;
    var strFunctionDel = 'deleteFunction('+cardIndex+')';
    var strFunctionAdd = 'addItemFunction('+cardIndex+')';
    console.log(cardIndex)
    cardIndex+=1;
    template.querySelector('.card').setAttribute('id',deleteID);
    template.querySelector('.bi-trash-fill').setAttribute('onclick',strFunctionDel);
    template.querySelector('.bi-plus-circle-fill').setAttribute('onclick',strFunctionAdd);
    document.getElementById(deleteID).classList.remove('invisible');
    var innerHtml1= template.innerHTML;
    document.getElementById("cardList").innerHTML+= innerHtml1; 
    template.querySelector("h2").removeChild(cardTitle);
}

function addMasterItem(){
    var listName= document.getElementById("listName").value;
    var blur = document.getElementById("main-page");
    blur.classList.remove('blurClass');
    document.querySelector('#cardList').classList.remove('blurClass');
    masterList.push(listName);
    var popUp = document.getElementById("popUp")
    popUp.style.display='none';
    createCard(listName) ;
    renderPage();
}









