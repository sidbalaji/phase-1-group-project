//local storage allows the saving of key value pairs, use with client side rendering
//did they enable darkmode on a previous visit?
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector(".switch");


const enableDarkMode = () => {
//1. add the class darkmode to the body 
document.body.classList.add("darkMode");
//2. update darkmode in the localStorage
localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
//1. add the class darkmode to the body 
document.body.classList.remove("darkMode");
//2. update darkmode in the localStorage
localStorage.setItem('darkMode', null);
}

if (darkMode == 'enabled') {
  enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem("darkMode"); 
   if (darkMode !== 'enabled') {
    enableDarkMode();
 } else {
   disableDarkMode();
 }
})














// darkModeToggle.addEventListener("click", function () {
//   darkMode = localStorage.getItem("darkMode"); 
//   if (darkMode == "true") {
//     removeDarkMode();
//   } else {
//     addDarkMode();
//   }
// });



// function addDarkMode() {
//   darkMode = localStorage.setItem("darkMode", "true");
//   document.getElementsByTagName("body")[0].classList.add("darkMode");
// //   document.querySelector(".cuisine-text").getElementsByClassName.color = "white"

// }

// function removeDarkMode() {
//   darkMode = localStorage.setItem("darkMode", "false");
//   document.getElementsByTagName("body")[0].classList.remove("darkMode");
// }

