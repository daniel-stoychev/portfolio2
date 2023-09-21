let menubutton = document.querySelector('.menubutton');
let menu = document.querySelector('.menu');

menubutton.onclick = function() {
    menubutton.classList.toggle("active");
    menu.classList.toggle("active");
}

const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    if(inputBox.value === '') {
        alert ("You must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        li.appendChild(span);

    }
    inputBox.value = ""; //clears the test after task is added
    storeData(); //stores the data in the browser
}

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        storeData();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        storeData()
    }
},false);

function storeData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showData() {
    listContainer.innerHTML = localStorage.getItem("data");
}

function del() {
    if (confirm("All tasks will be removed! Are you sure you want to terminate this list?")) {
        localStorage.clear();
        const ul = document.querySelector('ul');
        ul.innerHTML = '';
    }
    else {}
}

inputBox.addEventListener("keypress", function(event) { //action upon pressin ENTER
    if(event.key === "Enter") {
        event.preventDefault();
        document.getElementById('hidden-mobi').click();
    }
});

showData();