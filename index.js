function showResult() {
    let m = document.querySelector("#m").value;
    let s = document.querySelector("#s").value;

    let total = parseFloat(m) + parseFloat(s);
    let percentage = (total * 100) / 200;

    let gradeElement = document.querySelector(".grade");

    if (percentage >= 79) {
        gradeElement.innerHTML = "A";
    } else if (percentage >= 60) {
        gradeElement.innerHTML = "B";
    } else if (percentage >= 49) { 
        gradeElement.innerHTML = "C";
    } else if (percentage >= 40) {
        gradeElement.innerHTML = "D";
    } else {
        gradeElement.innerHTML = "E";
    }

    document.querySelector(".total").textContent = total;
    document.querySelector(".percentage").textContent = percentage.toFixed(2) + "%";

    if (percentage > 40) {
        document.querySelector(".result h2").innerHTML = "PASS";
    } else {
        document.querySelector(".result h2").innerHTML = "FAIL";
    }
}