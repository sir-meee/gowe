// Submit form
document.querySelector(".form__submit").addEventListener("click", function() {
  var formInputs = document.querySelectorAll(".form__input");

  for (var i = 0; i < formInputs.length; i++) {
    if (formInputs[i].value === "" && formInputs[i].hasAttribute("required")) {
      return false;
    }
  }
  document.querySelector(".expand").classList.add("show-expand");
});

document.querySelector(".close-btn").addEventListener("click", function() {
  document.querySelector(".expand").classList.remove("show-expand");
});
