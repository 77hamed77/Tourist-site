const listDown = document.querySelector("#Pages");
const list = document.querySelector(".list");

listDown.addEventListener("click", () => {
  list.classList.toggle("active");
});
