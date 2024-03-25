function calcSalary() {

    let basicSalary = document.querySelector("#basicSalary").value;
    let benefits = document.querySelector("#benefits").value;

    console.log(basicSalary);
    console.log(benefits);

//Deduct the benefits since they are not taxable
    let taxableIncome = (basicSalary - benefits);

    
    console.log("Taxable Income: ",taxableIncome);

    document.getElementById("taxIncome").innerHTML = taxableIncome;




// Calculate Tax based on the tax bracket
if(taxableIncome <= 24000) {
    tax = Math.floor(taxableIncome * 0.1);
}
else if(taxableIncome > 24000 && taxableIncome <= 32333) {
    tax = Math.floor(taxableIncome * 0.25);
}
else if(taxableIncome > 32333 && taxableIncome <= 500000) {
    tax = Math.floor(taxableIncome * 0.3);
}
else if(taxableIncome > 500000 && taxableIncome <= 800000) {
    tax = Math.floor(taxableIncome * 0.325);
}
else {
    tax = Math.floor(taxableIncome * 0.35);

    
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


//Old rates standard NSSF contributions is 1080

let nssfContribution = 1080;

console.log("NSSF", nssfContribution);

document.getElementById("nssf").innerHTML = nssfContribution;


//Net salary is calc by deducting all the above

let netSalary = taxableIncome - (nssfContribution+nhifDeduction+tax);

console.log("Net Salary",netSalary);

document.getElementById("netSalary").innerHTML = netSalary;

}

