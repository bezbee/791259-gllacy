
var link = document.querySelector(".contact-item-button");
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var name = popup.querySelector("[id=modal-feedback-name]");
var email = popup.querySelector("[id=modal-feedback-email]");
var overlay = document.querySelector(".modal-overlay");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  overlay.classList.add("modal-show");
  name.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
  overlay.classList.remove("modal-show");
});

overlay.addEventListener("click", function (evt){
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
  overlay.classList.remove("modal-show");

});

form.addEventListener("submit", function (evt) {
  if (!name.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      overlay.classList.remove("modal-show")
      popup.classList.remove("modal-error");}
  }
});
