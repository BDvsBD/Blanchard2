document.querySelector(".form-btn-open").addEventListener("click", function () {
  document.querySelector(".search-form").classList.toggle("form__active");
  this.classList.toggle("active");
})

document.addEventListener("click", function (e) {
  let target = e.target;
  let form = document.querySelector(".search-form");
  if (!target.closest(".form-container-1024")) {
    form.classList.remove("form__active");
    form.querySelector("input").value = "";
    document.querySelector(".form-btn-open").classList.remove("active")
  }
})
