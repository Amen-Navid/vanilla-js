const dob = document.getElementById("birthdate");
const calculateAge = document.getElementById("calculate");
const age = document.getElementById("result");

calculateAge.addEventListener("click", () => {
  const birthdate = new Date(dob.value);
  const now = new Date();
  const ageInMilliseconds = now - birthdate;
  const ageInSeconds = ageInMilliseconds / 1000;
  const ageInMinutes = ageInSeconds / 60;
  const ageInHours = ageInMinutes / 60;
  const ageInDays = ageInHours / 24;
  const ageInMonths = ageInDays / 30.44;
  const ageInYears = ageInMonths / 12;

  const years = Math.floor(ageInYears);
  const months = Math.floor(ageInMonths % 12);
  const days = Math.floor(ageInDays % 30.44);
  const hours = Math.floor(ageInHours % 24);
  const minutes = Math.floor(ageInMinutes % 60);
  const seconds = Math.floor(ageInSeconds % 60);

  const total = `You are ${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds old.`;

  dob.value == ""
    ? (age.textContent = alert("enter date of birth"))
    : (age.textContent = total);
});

birthdate.addEventListener("keypress", (event) => {
  event.key === "Enter" ? calculateAge.click() : null;
});

const form = document.querySelector("form");
const messages = document.querySelector("#messages");
const fName = document.getElementById("fname");
const fNameErr = document.getElementById("fname-error");
const lName = document.getElementById("lname");
const lNameErr = document.getElementById("lname-error");
const email = document.getElementById("email");
const emailErr = document.getElementById("email-error");
const ageInput = document.getElementById("age");
const ageErr = document.getElementById("age-error");
const maleRadio = document.getElementById("male");
const femaleRadio = document.getElementById("female");
const genderErr = document.getElementById("gender-error");
const country = document.getElementById("country");
const countryErr = document.getElementById("country-error");
const join = document.getElementById("join");
const joinErr = document.getElementById("join-error");
const maleImage = document.getElementById("male-image");
const femaleImage = document.getElementById("female-image");

let errorCount = 0;
window.history.replaceState
  ? window.history.replaceState(null, null, window.location.href)
  : null;

form.addEventListener("submit", (e) => {
  const FixForm = (tag, message) => {
    tag.textContent = message;
    setTimeout(() => {
      tag.textContent = "";
    }, 5000);
  };
  e.preventDefault();

  if (fName.value.length < 3 || fName.value == "") {
    FixForm(fNameErr, "firstname must be more than 3 characters");
    joinErr.textContent="*required information empty";
    errorCount++;
  }
  if (lName.value.length < 3 || lName.value == "") {
    FixForm(lNameErr, "lastname must be more than 2 characters");
    joinErr.textContent="*required information empty";
    errorCount++;
  }

  if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value) ||
    email.value == ""
  ) {
    FixForm(emailErr, "enter valid email");
    joinErr.textContent="*required information empty";
    errorCount++;
  }
  const countryChoice = country.value;
  switch (countryChoice) {
    case "nigeria":
      messages.style.backgroundImage = "url('./img/nigeria.jpeg')";
      break;
    case "russia":
      messages.style.backgroundImage = "url('./img/russia.jpeg')";
      break;
    case "usa":
      messages.style.backgroundImage = "url('./img/usa.jpeg')";
      break;
    case "others":
      messages.style.backgroundImage = "url('./img/flags.png')";
      break;
    default:
      FixForm(countryErr, "select nationality");
      joinErr.textContent="*required information empty";
      errorCount++;
  }
  const pIWidth = "30vw";
  const pIHeight = "35vh";
  const pImargin = "30% auto";
  const pIBorderRadius = "30%";
  const pIOpacity = "0.85";
  if (ageInput.value == "" || ageInput.value == 0) {
    FixForm(ageErr, "input age");
    errorCount++;
  } else if (ageInput.value < 18 && maleRadio.checked == true) {
    const maleImg = document.createElement("img");
    maleImg.src = "./img/U18Male.jpeg";
    maleImage.appendChild(maleImg);
    maleImg.style.width = pIWidth;
    maleImg.style.height = pIHeight;
    maleImg.style.margin = pImargin;
    maleImg.style.borderRadius = pIBorderRadius;
    maleImg.style.opacity = pIOpacity;
  } else if (ageInput.value < 18 && femaleRadio.checked == true) {
    const femaleImg = document.createElement("img");
    femaleImg.src = "./img/U18Female.jpeg";
    femaleImage.appendChild(femaleImg);
    femaleImg.style.width = "20vw";
    femaleImg.style.height = "35vh";
    femaleImg.style.margin = pImargin;
    femaleImg.style.borderRadius = pIBorderRadius;
    femaleImg.style.opacity = pIOpacity;
  } else if (ageInput.value >= 18 && maleRadio.checked == true) {
    const maleImg = document.createElement("img");
    maleImg.src = "./img/O18Male.jpg";
    maleImage.appendChild(maleImg);
    maleImg.style.width = pIWidth;
    maleImg.style.height = pIHeight;
    maleImg.style.margin = pImargin;
    maleImg.style.borderRadius = pIBorderRadius;
    maleImg.style.opacity = pIOpacity;
  } else if (ageInput.value >= 18 && femaleRadio.checked == true) {
    const femaleImg = document.createElement("img");
    femaleImg.src = "./img/O18Female.jpeg";
    femaleImage.appendChild(femaleImg);
    femaleImg.style.width = pIWidth;
    femaleImg.style.height = pIHeight;
    femaleImg.style.margin = pImargin;
    femaleImg.style.borderRadius = pIBorderRadius;
    femaleImg.style.opacity = pIOpacity;
  }

  if (!maleRadio.checked && !femaleRadio.checked) {
    FixForm(genderErr, "choose a gender");
    joinErr.textContent="*required information empty";
    errorCount++;
  }

  if (errorCount > 0) {
    joinErr.textContent="*required information empty";
    errorCount = 0;
  } else {
    form.style.display = "none";
    messages.style.display = "block";
    messages.style.width = "90%";
    messages.style.height = "87vh";
    messages.style.marginLeft = "5%";
    messages.style.backgroundSize = "cover";
    messages.style.backgroundPosition = "center";
    messages.style.borderRadius = "50%";
  }
});

join.addEventListener("keypress", (event) => {
  event.key === "Enter" ? form.submit() : null;
});
