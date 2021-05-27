var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput")
var ul = document.querySelector("ul"); //to find the first element that matches one or more CSS selectors.
var item = document.getElementsByTagName("li");

function inputLength(){
    return input.value.length;
}

function listLength(){
    return item.length;
}

function createListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = ""; // reset text input field

//start strikethrough
function crossOut(){
    li.classList.toggle("done");
}    

li.addEventListener("click",crossOut);

//delete button
var dBtn = document.createElement("button");
dBtn.appendChild(document.createTextNode("X"));
li.appendChild(dBtn);
dBtn.addEventListener("click",deleteListItem);

function deleteListItem(){
    li.classList.add("delete")
}
} //createistElement

function addListAfterClick(){
    if(inputLength()>0){
        createListElement();
    }
}

function addListAfterKeypress(event){
    if(inputLength()>0 && event.which ===13){
        createListElement();
        //13 is key enter key keycode
    }
}

enterButton.addEventListener("click",addListAfterClick);
input.addEventListener("keypress",addListAfterKeypress);