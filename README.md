
# Portfolio 2
## Personal portfolio website

Including completed tasks:
- Build the HTML structure of the website, including the navigation bar, sections, and footer.
- Apply CSS styling to create an attractive and responsive design. 
- Implemented JavaScript functionality:

    a) smooth scrolling ```[scrollIntoView() method]```
    - defined 2 buttons one of which is a lottie animation. Used BodyMovin (After Effects extension) to export it as JSON.

    b) form validation ```[if statement]```

    c) interactive elements ```[prompt() method / IntersectionObserver]```

    d) mobile menu with toggle functionality
- Publish your portfolio website online -> https://portfolio.danielstoychev.com/ 

## To-Do List Application
Including completed tasks:
- Design the user interface for the to-do list application.
- Implement the HTML structure for the list and task items.
- Apply CSS styling to create an intuitive and visually pleasing interface.
- Use JavaScript to handle user interactions, such as adding new tasks, marking tasks as completed, and editing tasks. 
- Store the to-do list data in the browser's local storage for persistence across
page reloads. Methods used:

```bash
getElementById()
querySelector()
getItem()
remove()
appendChild()
createElement()
preventDefault()
localStorage.setItem()
localStorage.getItem()
localStorage.clear()
(window) confirm()
```
- Adding tasks with a push of a button (Enter):

```bash
inputBox.addEventListener("keypress", function(event) { //action upon pressin ENTER
    if(event.key === "Enter") {
        event.preventDefault();
        document.getElementById('hidden-mobi').click();
    }
});
```
### Comments and code review
```bash
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
```
#### if/else statement for adding the task^:

   a) it checks the value of the input and throws and error if it is empty

   b) creates HTML <li> item and sets the value from the inputBox to it 

   c) appends the newly created <li> element to the container
   d) creates <span> element and assigns 'x' character

   e) appends the <span> element to the <li> element

   f) after else{ } completes inputBox is cleared so new task can be added

   g) executes storesData() function for storing data in the browser
```bash
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
```
#### addEventListener attached to the listContainer <ul>, designed to click on elements inside^:
a) if cklicked on task exequtes toggle of 'checked' class defined in todo.css

b) executes storesData() 

c) if cklicked on it 'X' parentElement (<li>) is removed

d) executes storesData()

e) appends the <span> element to the <li> element

f) after else{ } completes inputBox is cleared so new task can be added

g) executes storesData() function for storing data in the browser
```bash
function storeData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showData() {
    listContainer.innerHTML = localStorage.getItem("data");
}
```
#### stores data in browser local storage and shows it when showData() is called^
```bash
function del() {
    if (confirm("All tasks will be removed! Are you sure you want to terminate this list?")) {
        localStorage.clear();
        const ul = document.querySelector('ul');
        ul.innerHTML = '';
    }
    else {}
}
```
#### after confirmation, uses the localStorage.clear() method to clear the <ul> data^
```bash
inputBox.addEventListener("keypress", function(event) { //action upon pressin ENTER
    if(event.key === "Enter") {
        event.preventDefault(); // prevent default actions of the Enter key
        document.getElementById('hidden-mobi').click();
    }
},false);

showData();
```
#### assignes an addEventListener to the inputBox to "listen" for the Enter key and excutes click() action of the button with id='hidden-mobi' (onclick="addTask())^


## Create an Image Gallery with Filtering
Including completed tasks:
- Gather a set of images and categorize/tag them accordingly.
`[li and data-filter]`
- Create the HTML structure for the image gallery, including thumbnails and
filtering options.

`[data-item]`
- Apply CSS styles to showcase the images attractively and arrange them in a
grid layout.
- Use JavaScript to implement the filtering functionality, allowing users to view
images based on selected categories/tags.
- Incorporate lightbox functionality to display larger versions of the images
when clicked.
## Home Page Design Idea

https://www.storiesforgood.org/


## Used Languages

- HTML
- CSS
- JavaScript


## Run Locally

Clone the project

```bash
  git clone https://github.com/daniel-stoychev/portfolio2
```

Go to the project directory

```bash
  cd my-project
```

Replace server paths with local ones


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=&logoColor=white)](https://portfolio.danielstoychev.com/)


[![portfolio](https://img.shields.io/badge/to_do_list-000?style=for-the-badge&logo=&logoColor=white)](https://portfolio.danielstoychev.com/todo.html)

[![portfolio](https://img.shields.io/badge/gallery-000?style=for-the-badge&logo=&logoColor=white)](https://portfolio.danielstoychev.com/gallery.html)


## Screenshots

![App Screenshot](https://danielstoychev.com/images/ezgif.com-optimize.gif)


![App Screenshot](https://portfolio.danielstoychev.com/images/Screenshot.png)
## Authors

- [@DanielS](https://github.com/daniel-stoychev)


## Feedback

If you have any feedback, please reach out to me at daniel.stoychev@siteground.com




