// Question 115:* Use a switch statement to log the days of the week based on a number (1-7).
function logthedays(dayNumber) {
    switch (dayNumber) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("monday");
            break;
        case 3:
            console.log("tuesday");
            break;
        case 4:
            console.log("wednesday");
            break;
        case 5:
            console.log("thursday");
            break;
        case 6:
            console.log("friday");
            break;
        case 7:
            console.log("saturday");
            break;
        default:
            console.log("invalid day number");
            break;
    }
}
logthedays(6);
logthedays(1);
//Question 116:* Create a switch case that matches several cases to the same code block, representing seasons.
function seasons(months) {
    switch (months) {
        case 12:
        case 1:
        case 2:
            console.log("Winter");
            break;
        case 3:
        case 4:
        case 5:
            console.log("Spring");
            break;
        case 6:
        case 7:
        case 8:
            console.log("Summer");
            break;
        case 9:
        case 10:
        case 11:
            console.log("Autumn");
            break;
        default:
            console.log("invalid month number");
            break;
    }
}
seasons(5);
// Question 117:* Implement a switch statement that evaluates an expression and uses the default case if none of the cases match.
function anExpression(grade) {
    switch (grade) {
        case "A":
            console.log("great job");
            break;
        case "B":
            console.log("excellent");
            break;
        case "C":
            console.log("Good");
            break;
        case "D":
            console.log("Poor");
            break;
        case "E":
            console.log("Fail");
            break;
        default:
            console.log("invalid grade");
            break;
    }
}
anExpression("A");
export {};
