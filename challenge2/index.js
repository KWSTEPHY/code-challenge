function checkSpeed() {

    let carSpeed = document.querySelector("#carSpeed").value;


    console.log(carSpeed);


    let result = "OK";
//Any speed below 70 is considerd ok

    if (carSpeed > 70) {

        //Every 5 km/s above the speed limit (70),gives one demerit point 
        let demeritPoints = (carSpeed - 70) / 5;


        console.log(demeritPoints);


        result = "Demerit  " + Math.floor(demeritPoints);

        if (demeritPoints > 11) {
            result = "License Suspended";
        }

    }

    console.log(result);

    document.getElementById("result").innerHTML = result;


}

