const actionBtn = document.querySelector("#conversion-button")
const secondOption = document.querySelector("#select-two")
const valueEntered = document.getElementById("value-to-convert")

const dolarToday = 5.97
const euroToday = 6.32
const libraToday = 7.60
const bitcoinToday = 576705.07

function buttonPressed(){

    const currencyOneValue = document.getElementById("first-currency")
    const currencyTwoValue = document.getElementById("second-currency")
    const currencyTwoIcon = document.getElementById("currency-two")
    const currencyTwoName = document.getElementById("second-currency-name")


    currencyOneValue.innerText =  new Intl.NumberFormat("pt-BR",{style:"currency", currency:"BRL"}).format(valueEntered.value)

    if (secondOption.value == "dolar"){
        currencyTwoIcon.src = "./assets/dolar.png"
        currencyTwoName.innerText = "Dólar Americano"
        currencyTwoValue.innerText = new Intl.NumberFormat("en-US", {style:"currency", currency:"USD"}).format(valueEntered.value / dolarToday) 
    }
   
    if (secondOption.value == "euro"){
        currencyTwoIcon.src = "./assets/euro.png"
        currencyTwoName.innerText = "Euro"
        currencyTwoValue.innerText = new Intl.NumberFormat("en-UK", {style:"currency", currency:"EUR"}).format(valueEntered.value / euroToday)
    }

    if (secondOption.value == "libra"){
        currencyTwoIcon.src = "./assets/libra.png"
        currencyTwoName.innerText = "Libra Esterlina"
        currencyTwoValue.innerText = new Intl.NumberFormat("en-UK", {style:"currency", currency:"GBP"}).format(valueEntered.value / libraToday)
    }

    if (secondOption.value == "bitcoin"){
        currencyTwoIcon.src = "./assets/bitcoin.png"
        currencyTwoName.innerText = "Bitcoin"
        currencyTwoValue.innerText = new Intl.NumberFormat("en-US", {style:"currency", currency:"BTC"}).format(valueEntered.value / bitcoinToday)

       
    console.log("clicado")
}
}
function selectChanged(){buttonPressed()}

actionBtn.addEventListener("click",buttonPressed)
secondOption.addEventListener("change",selectChanged)
