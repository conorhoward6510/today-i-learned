const btn = document.querySelector(".btn-open");
const form = document.querySelector("#fact-form");
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.innerHTML = "Close";
  } else {
    form.classList.add("hidden");
    btn.innerHTML = "Share a fact";
  }
});
