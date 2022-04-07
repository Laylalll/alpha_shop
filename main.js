const stepControl = document.querySelector("#main-step-control")
const steps = stepControl.querySelectorAll(".step")
const lines = stepControl.querySelectorAll(".connect-line")
const form = document.querySelector(".main-form-wrapper")
const formParts = form.querySelectorAll(".part")
const btnControl = document.querySelector("#btn-control")
const nextBtn = document.querySelector("#btn-next")
const prevBtn = document.querySelector("#btn-prev")
const cartPanel = document.querySelector('.main-cart-list')
const totalAmount = document.querySelector('#total-amount')
const deliveryPanel = document.querySelector('.delivery')


let step = 0
let totalCalc = 5298

function handleBtnControlClicked(event) {
  event.preventDefault() //取消瀏覽器預設值
  const nowStep = steps[step]
  if (
    event.target.matches(".btn-primary")
  ) {
    const nextStep = steps[step + 1]
    nowStep.classList.remove("primary")
    nowStep.classList.remove("active")
    nowStep.classList.add("checked")
    nextStep.classList.add("active")
    formParts[step].classList.toggle("d-none")
    formParts[step + 1].classList.toggle("d-none")
    step += 1;
  } else if (event.target.matches(".btn-outline")) {
    const prevStep = steps[step - 1]
    nowStep.classList.remove("active")
    nowStep.classList.remove("checked")
    prevStep.classList.remove("checked")
    prevStep.classList.add("active")
    formParts[step].classList.toggle("d-none")
    formParts[step - 1].classList.toggle("d-none")
    step -= 1;
  }
  setBtnControl()
}

function setBtnControl() {
  if (step === 0) {
    prevBtn.classList.add('v-hidden')
    nextBtn.classList.add('w-100')
  } else {
    prevBtn.classList.remove('v-hidden')
    nextBtn.classList.remove('w-100')
    nextBtn.classList.add('w-20')
  }

  if (step === 2) {
    nextBtn.innerHTML = `確認下單`;
  } else {
    nextBtn.innerHTML = `下一步<img src="/src/images/arrow_next.png" alt= "arrow-next" class="ml-4" >`
  }
}

function deliveryControl(event) {
  if (event.target.matches('.DHL')) {
    event.target.parentElement.previousElementSibling.classList.toggle('active')
    event.target.parentElement.previousElementSibling.children[0].classList.toggle('active')
  }
}

function cartAmountCalc(event) {
  const itemPrice = Number(event.target.parentElement.nextElementSibling.innerText)

  if (event.target.classList.contains("minus") || event.target.classList.contains("plus")) {
    let amountBox = event.target.parentElement.children[1]
    let amount = Number(amountBox.innerText)

    if (event.target.classList.contains("plus")) {
      amount += 1
      totalCalc += itemPrice

    } else if (event.target.classList.contains("minus")) {
      amount -= 1
      if (amount >= 0) {
        totalCalc -= itemPrice
      }
      if (amount < 0) {
        amount = 0
      }
    }
    amountBox.innerText = amount
    totalAmount.innerText = totalCalc.toLocaleString('en-US')
  }
}


btnControl.addEventListener("click", handleBtnControlClicked)
deliveryPanel.addEventListener("change", deliveryControl)
cartPanel.addEventListener("click", cartAmountCalc)