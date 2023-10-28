btnReset = document.querySelector(".reset");

inputName = document.querySelector("#name");
inputEmail = document.querySelector("#email");
inputMessage = document.querySelector("#message");

btnReset.addEventListener("click", function () {
  inputName.value = "";
  inputEmail.value = "";
  inputMessage.value = "";
});
