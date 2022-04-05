const stepControl = document.querySelector("#main-step-control");
const steps = stepControl.querySelectorAll(".step");
const lines = stepControl.querySelectorAll(".connect-line");
const form = document.querySelector(".main-form-wrapper");
const formParts = form.querySelectorAll(".part");
const btnControl = document.querySelector("#btn-control");
const nextBtn = document.querySelector("#btn-next");
const prevBtn = document.querySelector("#btn-prev");

let step = 0;
let line = 1;

function handleBtnControlClicked(event) {
  event.preventDefault(); //取消瀏覽器預設值
  const nowStep = steps[step];
  const nextLine = lines[line];
  if (
    event.target.matches(".btn-primary") &&
    event.target.innerHTML === "下一步"
  ) {
    const nextStep = steps[step + 1];
    nowStep.classList.remove("primary");
    nowStep.classList.add("checked");
    nextStep.classList.add("active");
    nextLine.classList.add("active");
    formParts[step].classList.toggle("d-none");
    formParts[step + 1].classList.toggle("d-none");
    step += 1;
  }
}

btnControl.addEventListener("click", handleBtnControlClicked);
