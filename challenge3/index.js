function calcSalary() {

    let basicSalary = document.querySelector("#basicSalary").value;
    let benefits = document.querySelector("#benefits").value;

    console.log(basicSalary);
    console.log(benefits);

//Deduct the benefits since they are not taxable
    let taxableIncome = (basicSalary - benefits);

    
    console.log("Taxable Income: ",taxableIncome);

    document.getElementById("taxIncome").innerHTML = taxableIncome;


    // Determines tax based on income brackets
    if (taxableIncome <= 24000) {
        tax = 0.1 * taxableIncome;

    }else if (taxableIncome <= 32333) {
        tax = 2400 + 0.25 * (taxableIncome - 24000);

    }else if (taxableIncome <= 40667) {
        tax = 5967.50 + 0.3 * (taxableIncome - 32333);

    } else if (taxableIncome <= 49000) {
        tax = 10960 + 0.32 * (taxableIncome - 40667);

    } else if (taxableIncome <= 57333) {
        tax = 16862.50 + 0.34 * (taxableIncome - 49000);
        
    } else if (taxableIncome <= 65667) {
        tax = 23575 + 0.36 * (taxableIncome - 57333);

    } else if (taxableIncome <= 74000) {
        tax = 31142 + 0.37 * (taxableIncome - 65667);

    } else {
        tax = 39675 + 0.4 * (taxableIncome - 74000);
    }
    return tax;
}
 
    console.log("tax",tax);

    document.getElementById("tax").innerHTML = tax;

    //Determine nhifdeductions based on taxableincome bracket

    if (taxableIncome <= 5999) {
        nhifDeduction = 150;

    } else if (taxableIncome <= 7999) {
        nhifDeduction = 300;

    } else if (taxableIncome <= 11999) {
        nhifDeduction = 400;

    } else if (taxableIncome <= 14999) {
        nhifDeduction = 500;

    } else if (taxableIncome <= 19999) {
        nhifDeduction = 600;

    } else if (taxableIncome <= 24999) {
        nhifDeduction = 750;

    } else if (taxableIncome <= 29999) {
        nhifDeduction = 850;

    } else if (taxableIncome <= 34999) {
        nhifDeduction = 900;

    } else if (taxableIncome <= 39999) {
        nhifDeduction = 950;

    } else {
        nhifDeduction = 1000;
    }

console.log("NHIF",nhifDeduction);

document.getElementById("nhif").innerHTML = nhifDeduction;


//Old rates tandard NSSF contributions is 1080

let nssfContribution = 1080;

console.log("NSSF", nssfContribution);

document.getElementById("nssf").innerHTML = nssfContribution;


//Net salary is calc by deducting all the above

let netSalary = taxableIncome - (nssfContribution+nhifDeduction+tax);

console.log("Net Salary",netSalary);

document.getElementById("netSalary").innerHTML = netSalary;

}

