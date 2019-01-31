const checkTriangleTypeBySideLengths = require("./Triangle");
const TRIANGLE = require('./enums/Triangle');
const Error = require('./errors/Error');

describe('Test Triangle checkTriangleTypeBySideLengths function', function () {

    it('should throw an error if a triangle side is omitted', function () {
        const triangleSides = [2, 2];
        try {
            checkTriangleTypeBySideLengths(...triangleSides);
        } catch (error) {
            expect(error.message).toEqual(Error.sideNotDefined);
        }

    });


    it('should throw an error if a triangle side is not a number', function () {
        const triangleSides = ['2', 2, 2];
        try {
            checkTriangleTypeBySideLengths(...triangleSides);
        } catch (error) {
            expect(error.message).toEqual(Error.sideNotANumber);
        }

    });

    it('should throw an error if the triangle rule is not met', function () {
        const triangleSides = [1, 1, 3];
        try {
            checkTriangleTypeBySideLengths(...triangleSides);
        } catch (error) {
            expect(error.message).toEqual(Error.notATriangle);
        }

    });

    it('should return equilateral when all the sides have the same lengths', function () {
        const triangleSides = [2, 2, 2];
        expect(checkTriangleTypeBySideLengths(...triangleSides)).toEqual(TRIANGLE.EQUILATERAL);
    });

    it('should return isosceles when 2 sides have the same length', function () {
        const triangleSides = [2, 2, 3];
        expect(checkTriangleTypeBySideLengths(...triangleSides)).toEqual(TRIANGLE.ISOSCELES);
    });

    it('should return scalene when all sides have the different lengths', function () {
        const triangleSides = [2, 1, 3];
        expect(checkTriangleTypeBySideLengths(...triangleSides)).toEqual(TRIANGLE.SCALENE);
    });
});