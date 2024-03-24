function checkSpeed() {

    let carSpeed = document.querySelector("#carSpeed").value;






    console.log(carSpeed);



    let result = "OK";



    if (carSpeed > 70) {

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

