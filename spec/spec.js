//test page
var myGrades = require('./../grader.js');

// TESTS
describe("#letterGrader()", function () {
  it("Takes in a test score and returns the letter grade", function () {
    expect(myGrades.letterGrader(98)).toEqual("A+");
    expect(myGrades.letterGrader(95)).toEqual("A");
    expect(myGrades.letterGrader(90)).toEqual("A-");
    expect(myGrades.letterGrader(87)).toEqual("B+");
    expect(myGrades.letterGrader(84)).toEqual("B");
    expect(myGrades.letterGrader(82)).toEqual("B-");
    expect(myGrades.letterGrader(79)).toEqual("C+");
    expect(myGrades.letterGrader(76)).toEqual("C");
    expect(myGrades.letterGrader(70)).toEqual("C-");
    expect(myGrades.letterGrader(67)).toEqual("D+");
    expect(myGrades.letterGrader(65)).toEqual("D");
    expect(myGrades.letterGrader(62)).toEqual("D-");
    expect(myGrades.letterGrader(50)).toEqual("F");
  });
});

describe("#averageScore()", function() {
    it("Takes in an array and returns the average", function () {
        expect(myGrades.averageScore([90, 95, 87, 60])).toEqual(83);
        expect(myGrades.averageScore([90, 95])).toEqual(92.5);
        expect(myGrades.averageScore([0, 7, 45, 99, 76])).toEqual(45.4);
        expect(myGrades.averageScore([90, 95, 60, 99, 74, 86])).toEqual(84);
    });
});

describe("#medianScore()", function() {
    it("Takes in an array and calculates the median score", function () {
        expect(myGrades.medianScore([52,80,80,86,94])).toEqual(80);
        expect(myGrades.medianScore([52,80,86,94])).toEqual(83);
        expect(myGrades.medianScore([52,84,90])).toEqual(84);
        expect(myGrades.medianScore([52,73])).toEqual(62.5);
    });
});

describe("#modeScore()", function() {
    it("Takes in an array and calculates the mode score", function () {
        expect(myGrades.modeScore([82, 92, 75, 91, 92, 89, 95, 100, 86])).toEqual(92);
        expect(myGrades.modeScore([82, 92, 75, 91, 92, 89, 95, 100, 86, 100, 100, 92, 92, 92, 101, 101, 100, 100, 100])).toEqual(100);
    });
    xit("Throws an error if there is no mode", function () {
        expect(myGrades.modeScore([1,2,3,4])).toThrowError("No mode found");
    });
});
