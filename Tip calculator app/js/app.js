"use strict"
const BILL_EL = document.getElementById("bill-cost");
const NUM_OF_PEOPLE_EL = document.getElementById("num-of-people");
const TIPS_EL = document.querySelector(".tip-section");
const CUSTOM_TIP_EL = document.getElementById("customTips");
const TIPS_BUTTON = document.querySelectorAll(".tip-buttons .tip-btn");
const TIPS_RESULT = document.getElementById("tipsForeveryPerosn");
const TOTAL_RESULT = document.getElementById("totalForeveryPerson");
const NOT_NUM_MESSAGE = "Is not a number";
const NOT_ZERO_MESSAGE = "Can not be a zero";
let tipsValue = 15;
document.getElementById("inittip").style.backgroundColor = "#26c0ab";
let billValue;
let numOfPeople = NUM_OF_PEOPLE_EL.value;

function costOfeveryPerson() {
    let tipsforperson = (((billValue * tipsValue) / 100) / numOfPeople).toFixed(2);
    let totalForperson = ((billValue / numOfPeople)).toFixed(2)
    TIPS_RESULT.textContent = tipsforperson;
    TOTAL_RESULT.textContent = Number(totalForperson) + Number(tipsforperson);
}

BILL_EL.addEventListener("blur", function(e) {
    let billerror = document.querySelector(".bill-section .errorMessage");
    let x = Number(e.target.value);
    if (x === 0) {
        billerror.textContent = NOT_ZERO_MESSAGE;

    } else if (isNaN(Number(e.target.value))) {
        billerror.textContent = NOT_NUM_MESSAGE;

    } else {
        billValue = e.target.value;
        costOfeveryPerson();
    }
})
TIPS_EL.addEventListener("click", function(e) {
    if (e.target.tagName === "BUTTON") {
        TIPS_BUTTON.forEach(button => {
            button.style.backgroundColor = "#00494d";
        })
        CUSTOM_TIP_EL.style.backgroundColor = '#c5e4e7'
        e.target.style.backgroundColor = "#26c0ab";
        tipsValue = e.target.value;
        costOfeveryPerson()
    } else if (e.target.tagName == "INPUT") {
        CUSTOM_TIP_EL.addEventListener("blur", function(e) {
            TIPS_BUTTON.forEach(button => {
                button.style.backgroundColor = "#00494d";
            })
            e.target.style.backgroundColor = "#c5e4e7";
            tipsValue = e.target.value;
            costOfeveryPerson();
        })
    } else {
        return;
    }
})


NUM_OF_PEOPLE_EL.addEventListener("blur", function(e) {
    let billerror = document.querySelector(".number-of-people .errorMessage");
    let x = Number(e.target.value);
    if (x === 0) {
        // billerror.classList.remove("hidden");
        billerror.textContent = NOT_ZERO_MESSAGE;

    } else if (isNaN(Number(e.target.value))) {
        billerror.textContent = NOT_NUM_MESSAGE

    } else {
        numOfPeople = e.target.value;
        costOfeveryPerson();
    }

})
let resetButton = document.querySelector(".resetbtn");
console.log(resetButton)
resetButton.addEventListener("click", function(e) {
    BILL_EL.value = 0;
    numOfPeople = 1;
    NUM_OF_PEOPLE_EL.value = 1;
    tipsValue = 15;
    console.log("clicked");
    TIPS_RESULT.textContent = "000";
    TOTAL_RESULT.textContent = "000";

})