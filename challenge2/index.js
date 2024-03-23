function checkSpeed() {

    let speedInput = document.querySelector("#speedInput").value;

    var speed = parseFloat(document.getElementById("speedInput").value);
    var resultElement = document.getElementById("result");
    var speedLimit = 70;
    var demeritPoints = 0;

    if (speed <= speedLimit) {
        resultElement.textContent = "Ok";
    } else {
        demeritPoints = Math.floor((speed - speedLimit) / 5);
        resultElement.textContent = "Points: " + demeritPoints;
        if (demeritPoints > 12) {
            resultElement.textContent += " - License suspended";
        }
    }
}
