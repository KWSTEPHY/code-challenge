function showResult() {

    let studentMarks = document.querySelector("#studentMarks").value;

    console.log(studentMarks);

    if(studentMarks >= 79){
        
        grade = "A";

    }
    else if(studentMarks >=60 ){
        
        grade = "B";

    }
    else if(studentMarks >=49 ){
        
        grade = "C";

    }
   else if(studentMarks >=40 ){
        
        grade = "D";

    }
    else {
        
        grade = "E";
    }
    
console.log(grade);











}
