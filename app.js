document.querySelector("#menu").addEventListener("click", () => {
  document.querySelector("nav ul").classList.toggle("showmenu");
});

window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  nav.classList.toggle("sticky", this.window.scrollY > 0);
});
