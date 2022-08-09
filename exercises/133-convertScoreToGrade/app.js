function convertScoreToGrade(score) {
    // your code here
    if(score > 100 || score < 0){
        return "INVALID SCORE";
    }
    if(score > 89){
        return 'A';
    }
    if(score > 79){
        return 'B';
    }
    if(score > 69){
        return 'C';
    }
    if(score > 59){
        return 'D';
    }
    
    return 'F';
}

var output = convertScoreToGrade(91);
console.log(output); // --> 'A'