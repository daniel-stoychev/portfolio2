function scrollElement1(){
	let element = document.getElementById('section2');
	element.scrollIntoView({behavior:'smooth'});
}

function scrollElement(){
 let element = document.getElementById("section1");
 element.scrollIntoView({behavior: 'smooth'});
}
//#################################################//
function validateForm() {
    let x = document.forms["subForm"]["email"].value;
    if (x == '') {
        alert ("Please type your email address");
        return false;
    }
}

//################################################//
let hello = prompt("Please enter your name.");
if (hello != null) {
    document.getElementById("firstname").innerHTML = hello + "!";
    }

//#################################################//
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll(".animated")[0].classList.add("text1");
            document.querySelectorAll(".animated")[1].classList.add("video_section");
        }
    })
})

observer.observe(document.querySelector(".text"));

const observer_btn = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll(".animated_btn")[0].classList.add("todo");
            document.querySelectorAll(".animated_btn")[1].classList.add("gallery");
        }
    })
})

observer_btn.observe(document.querySelector(".section3"));

const observer_footer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('footer_content');
        }
    })
})

observer_footer.observe(document.querySelector(".footer_parent"));

//################################################//
let btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 500) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '900');
});
//################################################//

let menubutton = document.querySelector('.menubutton');
let menu = document.querySelector('.menu');

menubutton.onclick = function() {
    menubutton.classList.toggle("active");
    menu.classList.toggle("active");
}