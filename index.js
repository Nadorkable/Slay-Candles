//Login Register pages

let x = document.getElementById("login");
let y = document.getElementById("register");
let z = document.getElementById("btn");
const emailInput = document.querySelector("#email-input");

function login() {
  x.style.left = "25%";
  y.style.left = "-400px";
  z.style.left = "0px";
}

function register() {
  x.style.left = "-400px";
  y.style.left = "25%";
  z.style.left = "110px";
}

function checkEmail() {
  let regEmail = emailInput.value;
  console.log(regEmail);

  if (regEmail.includes("@") && regEmail.includes(".com")) {
    window.location.href = "Welcome.html";
  } else {
    return;
  }
}
//Popup

// let popup = document.getElementById("popup");

// function openPopup() {
//   popup.classList.add("openPopup");
// }

// function closePopup() {
//   popup.classList.remove("openPopup");
// }

//Eye-icon

let eyeicon = document.querySelectorAll(".eyeicon");
let password = document.querySelectorAll(".password");

eyeicon.forEach((eye) => {
  const password = eye.previousElementSibling;

  eye.addEventListener("click", () => {
    if (password.type == "password") {
      password.type = "text";
      eye.src = "images/open-eye.png";
    } else {
      password.type = "password";
      eye.src = "images/close-eye.png";
    }
  });
});

//Sub-btn
function subscribed() {
  var button = document.querySelector(".sub-btn");
  button.innerHTML = "&#128151; Subscribed";
}

//-----------------------------------------------------RANA----------------------------------------------------------------------
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}
// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSearchBar() {
  var searchBar = document.getElementById("search-bar");
  searchBar.style.display = "block";
}
// CONTACT PAGE //////////////////////////////
// PRODUCT PAGE
const qtyBtn = document.querySelector("#qty");

function subBtn() {
  if (parseInt(qtyBtn.value) > 1) {
    qtyBtn.value = parseInt(qtyBtn.value) - 1;
  }
}

function addBtn() {
  if (parseInt(qtyBtn.value) < 20) {
    qtyBtn.value = parseInt(qtyBtn.value) + 1;
  } else {
  }
}

// Get Data


   