const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
var reset=document.getElementById("reset");

reset.addEventListener('click', () => {
    listContainer.innerHTML = "";
    saveData();
})

function addTask(){
    if(inputBox.value=='')
    {
        alert("You must write something");
    }
    else{
        let li=document.createElement("li"); /* .createElement create a element */
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value='';
    saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
    saveData();
},false); /* remove or change false */

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

// display the data whenever we display the page

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}

showTask();

