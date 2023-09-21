
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
setData()
storeData()
showData()
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
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://danielstoychev.com/)


## Screenshots

![App Screenshot](https://danielstoychev.com/images/ezgif.com-optimize.gif)


![App Screenshot](https://portfolio.danielstoychev.com/images/Screenshot.png)
## Authors

- [@DanielS](https://github.com/daniel-stoychev)


## Feedback

If you have any feedback, please reach out to me at daniel.stoychev@siteground.com


## Acknowledgements

 - [SoftAcademy](https://softacademy.bg/kurs-web-programirane/)
 - [SiteGround](https://www.siteground.com/)
 - [Myslef](https://danielstoychev.com/)

