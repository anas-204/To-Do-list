
var addbut= document.querySelector(".adding-but");
var inputarea = document.querySelector(".input-field");
var taskscontainer = document.querySelector(".rows");
var numberoftasks = taskscontainer.children.length;
var numberofcompletedtasks = 0;
var checkedsign = document.querySelectorAll(".fa-circle-check");
var clearbut = document.querySelector(".clear");
var taskscounter = document.querySelector(".tasks-left");
var biggestcontainer = document.querySelector(".App-container");
var links = document.querySelector("attribution");
countingtasks();

clearbut.onclick = function(){ clearAllchecked(); }
addbut.onclick = function(){ addtask(); }

document.addEventListener('click', function (el){
    if (el.target.classList.contains("fa-circle-check")){
     el.target.classList.add("checked");
     numberofcompletedtasks++;
     var deletedtext = el.target.parentNode.querySelector("span");
     deletedtext.style.textDecoration = "line-through";
     deletedtext.style.opacity = "0.5";
    }
});

function clearAllchecked(){
    var checkeditems = document.querySelectorAll(".checked");
    checkeditems.forEach(element => {
        element.parentNode.remove();
        numberoftasks--;
    });
    if(numberoftasks >=0){
        taskscounter.textContent = numberoftasks + " " + "items left";
        numberofcompletedtasks = 0;
    }
}
function countingtasks(){
    if(numberoftasks >= 0){
        taskscounter.textContent = numberoftasks + " " + "items left";
    }
}


function createtask(){
    var taskrow = document.createElement("div");
    var task = document.createElement("span");
    var checkedicon = document.createElement("i");
    var closeicon = document.createElement("i");
    var createdtext = document.createTextNode(inputarea.value);
    taskrow.classList.add("mission-row");
    checkedicon.classList.add("fa-solid","fa-circle-check");
    closeicon.classList.add("gg-close");
    task.appendChild(createdtext);
    taskrow.appendChild(checkedicon);
    taskrow.appendChild(task);
    taskrow.appendChild(closeicon);
    taskscontainer.appendChild(taskrow);
    inputarea.value = "" ;
    biggestcontainer.style.height = biggestcontainer.offsetHeight + 35 +'px';
}

function addtask(){
    if (inputarea.value == ""){
        alert("no tasks to be added");
    }else{
        createtask();
        numberoftasks++;
        countingtasks();
    }
}

document.addEventListener('click', function (el){
    if (el.target.classList.contains("gg-close")){
        el.target.parentNode.remove();
        if(numberoftasks >= 0) {
        numberoftasks--;
        countingtasks();
        biggestcontainer.style.height = biggestcontainer.offsetHeight - 35 +'px';
      }
    }
});

