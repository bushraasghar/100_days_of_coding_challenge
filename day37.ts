// *Question 109:* Write an if statement that logs "Good Morning" if the current time is before 12 PM.
let time = new Date();
if(time.getHours() < 12){
    console.log("Good Morning");
    
}else {
    console.log("Good Night");
    
}

// Question 110:* Create a function that assigns a grade (A, B, C, D, F) based on a student's score.
function assignsGrade(marks: number):string{
    if(marks >= 90){
        return "A+"
    } else if(marks >= 80){
        return "A"
    }else if (marks >= 70){
        return "A"
    }else if (marks >= 60){
        return "B"
    }else if (marks >= 50){
        return  "C"
    }else if (marks >= 40){
        return "D"
    } else{
        return "F"
    }
}
console.log(assignsGrade(67));


// Question 111:* Use an if-else-if chain to categorize a person's age group (child, teenager, adult).
function categorize(age: number): string{
    if ( age <= 10){
        return "child"
    }else if( age <= 20){
        return "teenager"
    }else{
        return "adult"
    }
}
console.log(categorize(10));
console.log(categorize(11));
console.log(categorize(21));
