let score = 85;

// Evaluate score range using if...else statements to group into categories (e.g., tens)
let gradeCategory;
if (score >= 90 && score <= 100) {
    gradeCategory = "A";
} else if (score >= 80 && score < 90) {
    gradeCategory = "B";
} else if (score >= 70 && score < 80) {
    gradeCategory = "C";
} else if (score >= 60 && score < 70) {
    gradeCategory = "D";
} else {
    gradeCategory = "F";
}

// Determine the final letter grade using a switch statement
let grade;
switch (gradeCategory) {
    case "A":
        grade = "A";
        break;
    case "B":
        grade = "B";
        break;
    case "C":
        grade = "C";
        break;
    case "D":
        grade = "D";
        break;
    default:
        grade = "F";
}

// Use a ternary operator to check if the student passed (score >= 60) or failed
let status = (score >= 60) ? "Passed" : "Failed";

// Log the expected output
console.log(`Score: ${score}`);
console.log(`Grade: ${grade}`);
console.log(`Status: ${status}`);