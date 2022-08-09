function convertScoreToGradeWithPlusAndMinus(score) {
    // your code here
    if(score > 100 || score < 0){
        return "INVALID SCORE";
    }
    if(score > 89){
        if(score <93){
            return 'A-';
        }
        if(score >97){
            return 'A+';
        }
        return 'A';
    }
    if(score > 79){
        if(score <83){
            return 'B-';
        }
        if(score >87){
            return 'B+';
        }
        return 'B';
    }
    if(score > 69){
        if(score <73){
            return 'C-';
        }
        if(score >77){
            return 'C+';
        }
        return 'C';
    }
    if(score > 59){
        if(score <63){
            return 'D-';
        }
        if(score >67){
            return 'D+';
        }
        return 'D';
    }
    
    return 'F';
}

