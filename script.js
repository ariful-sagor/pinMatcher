// Hide Match not matched bar
var matchArea = document.getElementById("matched");
var notMatchArea = document.getElementById("notMatched");

matchArea.style.display = "none";
notMatchArea.style.display = "none";

// Call variables for Trials
var trial = document.getElementById("trial");
var trialNumber = 3;

var contain1 = document.getElementById("contain1");
var contain2 = document.getElementById("contain2");



// Generate pins:
var randomNumber;
var pinGenerate = document.getElementById("generateButton");
pinGenerate.addEventListener("click", function() {
    randomNumber = Math.floor(Math.random().toFixed(4) * 10000);
    document.getElementById("form").value = randomNumber;

})


// Pin Matcher Box

var total = "";
var len = document.querySelectorAll(".numberButton").length;
for (var i = 0; i < len; i++) {
    document.querySelectorAll(".numberButton")[i].addEventListener("click", function() {
        var num = this.innerText;
        total += num;
        document.getElementById("formMatch").value = total;
    })
}
// For Clean Button
const clean = document.querySelector(".clear");
clean.addEventListener("click", function() {
        total = "";
        document.getElementById("formMatch").value = total;
    })
    // For Backspace Button
const backspace = document.querySelector(".backspace");
backspace.addEventListener("click", function() {
    total = total.slice(0, -1);
    document.getElementById("formMatch").value = total;
})

// For Submit button
var submit = document.getElementById("submit");
var pinCode;

submit.addEventListener("click", function() {

    if (total == "" || total.length < 4 || total.length > 4) {
        alert("Enter your four digit pin.");

    } else {
        pinCode = total;
        pinMatched();
    }
})

function pinMatched() {
    // First disable Submit button if no try left
    if (trialNumber == 0) {
        document.getElementById("submit").disable = true;

        // Match Number

    } else if (randomNumber == total) {
        // Display Matched
        matchArea.style.display = "block";
        // only show one item once
        notMatchArea.style.display = "none";
        contain1.style.display = "none";
        contain2.style.display = "none";

    } else {
        trialNumber -= 1;
        trial.innerHTML = trialNumber + " try left";
        // Display Not Matched
        notMatchArea.style.display = "block";
        // only show one item once
        matchArea.style.display = "none";


    }
}