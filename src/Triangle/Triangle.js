/*  The function checkTriangleTypeBySideLengths checks the type of a triangle by side lengths.
    All triangle's sides have the same unit measure
    The triangle is considered not a degenerate one 
*/
const TRIANGLE = require("../enums/Triangle");
const TriangleError = require("../errors/TriangleError");
const areTheNumbersAlmostEqual = require("../utility/checkEquality");

const checkTriangleTypeBySideLengths = (sideA, sideB, sideC) => {

    if (sideA === undefined || sideB === undefined || sideC === undefined) {
        throw new Error(TriangleError.sideNotDefined);
    }
    if (typeof sideA !== "number" || typeof sideB !== "number" || typeof sideC !== "number" ||
        Number.isNaN(sideA) || Number.isNaN(sideB) || Number.isNaN(sideC)) {
        throw new Error(TriangleError.sideNotANumber);
    }
    if (
        sideA > 0 && sideB > 0 && sideC > 0 &&
        sideA + sideB > sideC && !areTheNumbersAlmostEqual(sideA + sideB, sideC) &&
        sideA + sideC > sideB && !areTheNumbersAlmostEqual(sideA + sideC, sideB) &&
        sideB + sideC > sideA && !areTheNumbersAlmostEqual(sideB + sideC, sideA)) {
        console.log(`This is a triangle with: sideA: ${sideA}, sideB: ${sideB} and sideC: ${sideC}.`);
    } else {
        throw new Error(TriangleError.notATriangle);
    }
    if (sideA === sideB && sideB === sideC) {
        console.log('This is an equilateral triangle.');
        return TRIANGLE.EQUILATERAL;
    } else if (sideA === sideB || sideA === sideC || sideB === sideC) {
        console.log('This ia an isosceles triangle.');
        return TRIANGLE.ISOSCELES;
    } else {
        console.log('This a scalene triangle.');
        return TRIANGLE.SCALENE;
    }
};

module.exports = checkTriangleTypeBySideLengths;