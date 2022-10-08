let visitCountContainer = document.querySelector(".visit-counter");
let visitCount = localStorage.getItem("page_view");
let resetButton = document.querySelector("#reset");

if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
visitCountContainer.innerHTML = visitCount;

resetButton.addEventListener("click", () => {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
  visitCountContainer.innerHTML = visitCount;
});
