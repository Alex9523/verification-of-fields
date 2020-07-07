const selectMonth = document.querySelector('#month')
const selectYear = document.querySelector('#year')
let inputNumber = document.querySelector('#number')
let inputCVV = document.querySelector('#cvv')

function month() {
    const allMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    for (let i = 0; i < 12; i++) {
        let newMonth = document.createElement('option')
        newMonth.innerHTML = `${allMonth[i]}`
        selectMonth.appendChild(newMonth)
    }
}

function year() {
    for (let i = 16; i < 21; i++) {
        let newYear = document.createElement('option')
        newYear.innerHTML = `${i}`
        selectYear.appendChild(newYear)
    }
}

function checkNumber(event) {
    let numberLength = inputNumber.value.split('').length
    if (isNaN(event.key)) {
        alert("This line should be just number!!!")
        inputNumber.value = ""
    }
    else if (numberLength == 4 || numberLength == 9 || numberLength == 14) {
        inputNumber.value += " "
    }
}

function checkCVV(event) {
    if (isNaN(event.key)) {
        alert("This line should be just number!!!")
        inputCVV.value = ""
    }
}

function btn() {
    let cvvLength = inputCVV.value.split('').length
    let numberLength = inputNumber.value.split('').length

    if (numberLength == 19 && cvvLength == 3) {
        alert("Well done!!")
        inputCVV.value = ""
        inputNumber.value = ""
    }
    else {
        alert("Fill in all fields")
    }
}

function start() {
    month()
    year()
}
start()

