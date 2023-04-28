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

//     CONTACT PAGE

// Get Data
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msgInput = document.querySelector("#msg");
const errorNodes = document.querySelectorAll(".error");
const success = document.querySelector("#success");

function validateForm() {
  clearMsg();
  let flag = false;

  if (nameInput.value.length < 1) {
    errorNodes[0].innerHTML = "Please enter name.";
    nameInput.classList.add("error-border");
    flag = true;
  }

  if (!validEmail(emailInput.value)) {
    errorNodes[1].innerHTML = "Please enter a valid email.";
    emailInput.classList.add("error-border");
    flag = true;
  }

  if (msgInput.value.length < 1) {
    errorNodes[2].innerHTML = "Please enter your message.";
    msgInput.classList.add("error-border");
    flag = true;
  }

  if (!flag) {
    success.innerHTML = "Email sent succesfully!";
  }
}

function clearMsg() {
  for (let i = 0; i < errorNodes.length; i++) {
    errorNodes[i].innerHTML = "";
  }
  nameInput.classList.remove("error-border");
  emailInput.classList.remove("error-border");
  msgInput.classList.remove("error-border");
}

function validEmail(emailInput) {
  let pattern = String(emailInput);
  return pattern
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

///////////////////////

/////////////// Image Gallery

let bigImg = document.getElementById("bigpic");

function showImg(pic) {
  bigImg.src = pic;
}

