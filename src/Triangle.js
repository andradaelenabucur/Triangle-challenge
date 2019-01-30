/*  The function checkTriangleTypeBySideLengths checks the type of a triangle by side lengths.
    All triangle's sides have the same unit measure
    The triangle is considered not a degenerate one 
*/
const TRIANGLE= require("./enums/Triangle");

const checkTriangleTypeBySideLengths = (sideA, sideB, sideC) => {
    if (typeof sideA !== "number" || typeof sideB !== "number" || typeof sideC !== "number") {
        throw new Error(`Please use only number values for the triangle's sides!`);
    }
    if (
        sideA > 0 && sideB > 0 && sideC > 0 && sideA + sideB >= sideC && 
        sideA + sideC >= sideB && sideB + sideC >= sideA) {
        console.log(`This is a triangle with: sideA: ${sideA}, sideB: ${sideB} and sideC: ${sideC}.`);
    } else {
        throw new Error(`Please provide some correct values for the triangle's sides.`);
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

checkTriangleTypeBySideLengths(2, 2, 2);