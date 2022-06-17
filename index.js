const menuBtn = document.querySelector(".menu");
const secondNav = document.querySelector(".nav-2");
const menu = document.querySelector(".image")
secondNav.style.right = "-450px";

menuBtn.onclick = () => {
  if (secondNav.style.right == "-450px") {
    secondNav.style.right = "0";
    menu.src = "close.png"
  } else {
    secondNav.style.right = "-450px";
    menu.src = "menu.png"
  }
};
