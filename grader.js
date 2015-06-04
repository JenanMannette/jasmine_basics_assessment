//functions page
module.exports = {
    letterGrader: function (num) {
        if (num <= 100 && num >= 97) {
            return "A+";
        }
        else if (num <= 96 && num >= 94) {
            return "A";
        }
        else if (num <= 93 && num >= 90) {
            return "A-";
        }
        else if (num <= 89 && num >= 87) {
            return "B+";
        }
        else if (num <= 86 && num >= 84) {
            return "B";
        }
        else if (num <= 83 && num >= 80) {
            return "B-";
        }
        else if (num <= 79 && num >= 77) {
            return "C+";
        }
        else if (num <= 76 && num >= 74) {
            return "C";
        }
        else if (num <= 73 && num >= 70) {
            return "C-";
        }
        else if (num <= 69 && num >= 67) {
            return "D+";
        }
        else if (num <= 66 && num >= 64) {
            return "D";
        }
        else if (num <= 63 && num >= 60) {
            return "D-";
        }
        else if (num <= 59 && num >= 0) {
            return "F";
        }
    },
    averageScore: function (arr) {
        var grade = 0;
        for (var i = 0; i < arr.length; i++) {
            grade += arr[i];
        }
        return grade/arr.length;
    },
    medianScore: function (arr) {
        arr.sort( function(num1,num2) {return num1 - num2;} );

        var middleNumber = Math.floor(arr.length/2);

        if (arr.length % 2 !== 0) {
            return arr[middleNumber];
        }
        else {
            return (arr[middleNumber-1] + arr[middleNumber]) / 2;
        }
    },
    modeScore: function (arr) {
        var newObj = {}; //creates a new obj
        var counter = 0; //creates a counter
        var modeValue; //creates an empty variable
        arr.forEach(function findMode(num){
          newObj[num] = (newObj[num] || 0) + 1;
          if(counter < newObj[num]){
             counter = newObj[num];
             modeValue = num;
          }
        });
        return modeValue;
      }
}
