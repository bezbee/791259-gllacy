var link=document.querySelector(".contact-item-button"),popup=document.querySelector(".modal-feedback"),close=popup.querySelector(".modal-close"),form=popup.querySelector("form"),fullname=popup.querySelector("[id=modal-feedback-name]"),email=popup.querySelector("[id=modal-feedback-email]"),overlay=document.querySelector(".modal-overlay");link.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal-show"),overlay.classList.add("modal-show-popup"),fullname.focus()}),close.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal-show"),popup.classList.remove("modal-error"),overlay.classList.remove("modal-show-popup")}),overlay.addEventListener("click",function(e){popup.classList.remove("modal-show"),popup.classList.remove("modal-error"),overlay.classList.remove("modal-show-popup")}),form.addEventListener("submit",function(e){name.value&&email.value||(e.preventDefault(),popup.classList.remove("modal-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("modal-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&popup.classList.contains("modal-show")&&(e.preventDefault(),popup.classList.remove("modal-show"),overlay.classList.remove("modal-show-popup"),popup.classList.remove("modal-error"))});