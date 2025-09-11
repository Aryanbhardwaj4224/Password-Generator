let inputSlider = document.querySelector(".inputSlider");

let sliderValue = document.querySelector(".sliderValue");

let passBox = document.querySelector(".passBox");

let lowercase = document.querySelector("#lowercase");
let UpperCase = document.querySelector("#UpperCase");
let Numbers = document.querySelector("#Numbers");
let Symbols = document.querySelector("#Symbols");
let genBtn = document.querySelector(".genBtn");
let container = document.querySelector(".container");
let copyIcon = document.querySelector(".copyIcon");

//show input slider value

sliderValue.textContent = inputSlider.value;

inputSlider.addEventListener("input", () => {
  sliderValue.textContent = inputSlider.value;
});
genBtn.addEventListener("click", () => {
  passBox.value = generatePassword();
});

// ---
let upperLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerLetter = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let symbols = "!@#$%^&*";
function generatePassword() {
  let Password = "";
  let FinalPassword = "";
  FinalPassword += lowercase.checked ? lowerLetter : "";
  FinalPassword += UpperCase.checked ? upperLetter : "";
  FinalPassword += Numbers.checked ? numbers : "";
  FinalPassword += Symbols.checked ? symbols : "";

  if (FinalPassword == "" || FinalPassword.length == 0) {
    return "";
  }
  for (let i = 1; i <= inputSlider.value; i++) {
    Password += FinalPassword.charAt(
      Math.floor(Math.random() * FinalPassword.length)
    );
  }
  return Password;
}

copyIcon.addEventListener("click", () => {
  if (passBox.value != "" || passBox.value.length >= 1) {
    navigator.clipboard.writeText(passBox.value);
    copyIcon.innerHTML = "check";
    copyIcon.title = "password copied";

    setTimeout(() => {
      copyIcon.innerHTML = "content_copy";
      copyIcon.title = "";
    }, 3000);
  }
});
