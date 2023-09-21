let menubutton = document.querySelector('.menubutton');
let menu = document.querySelector('.menu');

menubutton.onclick = function() {
    menubutton.classList.toggle("active");
    menu.classList.toggle("active");
}


let list = document.querySelectorAll('.list');
let item = document.querySelectorAll('.item');
let myslides = document.querySelectorAll('.mySlides')

for (let i = 0; i<list.length; i++){
	list[i].addEventListener('click', function(){

		/*document.getElementsByClassName("mySlides active").style.display = "none"*/

		/*sets display = 'none' to all slides, this is needed each time one element stays with block display====*/ 
		 // for (i=0;i<myslides.length;i++){
  	// 	 myslides[i].style.display = 'none';
		 // }
		/*-----*/
		for(let j = 0; j<list.length; j++){
			list[j].classList.remove('active')
		}
		this.classList.add('active');

		let dataFilter = this.getAttribute('data-filter');

		for(let k = 0; k<item.length; k++){
			item[k].classList.remove('active');
			item[k].classList.add('hide');

			 // myslides[k].classList.remove('active'); ====
			 // myslides[k].classList.add('hide');

			if(item[k].getAttribute('data-item') == dataFilter || dataFilter == 'all'){
				item[k].classList.remove('hide')
				item[k].classList.add('active')

				 // myslides[k].classList.remove('hide') ====
				 // myslides[k].classList.add('active')
			}
			/*if(true) {
				closeModal() {
					document.getElementsByClassName("mySlides").style.display = "none";
				}		
			}*/

		}

	})
}


	

function openModal() {
  	// document.getElementById("myModal").style.display = "block";	
  	const zoomModal = document.getElementById('myModal');
  	// const zoomImage = document.getElementById('smallIMG');
  	zoomModal.style.display = "block";
  	// zoomImage.style.opacity = '1';
  	// zoomImage.style.transform = 'scale(1.2)';
  	// zoomModal.style.animation = "fadeIn 4s both";
  	// zoomModal.style.border = "1px solid white";
  	// zoomModal.style.background = "red";
}

function closeModal() {
 	document.getElementById("myModal").style.display = "none";
 }

 // Attach click event listener to the modal overlay to close the modal
 const	modalOverlay = document.querySelector('.modal');
 modalOverlay.addEventListener('click', (event) => {
 	if (event.target === modalOverlay) {
 		closeModal();
 	}
 })





let slideIndex;  /*removed = 1*/
showSlides(slideIndex);

// function plusSlides(n) {   ====
//   showSlides(slideIndex += n);
// }

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let m;
  let slides = document.getElementsByClassName("mySlides");
// ==============
  // let dataItem = this.getAttribute('data-item');
  // if (dataItem == "summer") {
  		
  // }

// ==============
  // if (n > slides.length) {slideIndex = 1} ====
  // if (n < 1) {slideIndex = slides.length} ====

  for (m = 0; m < slides.length; m++) {
      slides[m].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block"; 

}








// =====CHATGPT======
// // Get all images with the ".mySlides active" class
// const images = document.querySelectorAll('.mySlides');


// // Get the modal
// const modal = document.getElementById('myModal');

// // Get the modal image
// //const modalImage = document.getElementById('modalImage');

// // Display the modal with the clicked image
// function openModal(index) {
//     modal.style.display = 'block';
//     modalImage.src = images[index].src;
//     slideIndex = index;
// }


// // Navigate to the previous or next image
// function navigate(direction) {
//     slideIndex += direction;

//     if (slideIndex < 0) {
//         slideIndex = images.length - 1;
//     } else if (slideIndex >= images.length) {
//         slideIndex = 0;
//     }

//     modalImage.src = images[slideIndex].src;
// }

// document.querySelector('.prev').addEventListener('click', () => navigate(-1));
// document.querySelector('.next').addEventListener('click', () => navigate(1));


// ================

// function openModalFilter() {
//   	document.getElementById("myModal").style.display = "block";
// }

// function closeModal() {
//  	document.getElementById("myModal").style.display = "none";
//  }

// let slideIndex;  /*removed = 1*/
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let m;
//   let slides = document.getElementsByClassName("mySlides active");
// // ==============
//   // let dataItem = this.getAttribute('data-item');
//   // if (dataItem == "summer") {
  		
//   // }

// // ==============
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}

//   for (m = 0; m < slides.length; m++) {
//       slides[m].style.display = "none";

//   }

//   slides[slideIndex-1].style.display = "block"; 	
// }

// ================

/*document.addEventListener(
  "click",

  function(event) {
    // If user either clicks X button OR clicks outside the modal window, then close modal by calling closeModal()
    if (
      event.target.matches(".close") ||
      !event.target.closest(".mySlides")
    ) {
      closeModal()
    }
  },
  false
)

function closeModal() {
  document.querySelector(".modal").style.display = "none"
}*/
//################################################//




