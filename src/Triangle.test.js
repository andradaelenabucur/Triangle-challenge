const checkTriangleTypeBySideLengths = require("./Triangle");

describe('Test Triangle checkTriangleTypeBySideLengths function', function () {

    it('should throw an error if a triangle side is omitted', function () {
        const triangleSides = [2, 2];
        try {
            checkTriangleTypeBySideLengths(...triangleSides);
        } catch (error) {
            expect(error.message).toEqual(`Please make sure that you provided all triangle sides and all side values are numbers!`);
        }

    });


    it('should throw an error if a triangle side is not a number', function () {
        const triangleSides = ['2', 2, 2];
        try {
            checkTriangleTypeBySideLengths(...triangleSides);
        } catch (error) {
            expect(error.message).toEqual(`Please use only number values for the triangle's sides!`);
        }

    });

    it('should throw an error if the triangle rule is not met', function () {
        const triangleSides = [1, 1, 3];
        try {
            checkTriangleTypeBySideLengths(...triangleSides);
        } catch (error) {
            expect(error.message).toEqual(`Please provide some correct values for the triangle's sides.`);
        }

    });

    it('should return equilateral when all the sides have the same lengths', function () {
        const triangleSides = [2, 2, 2];
        expect(checkTriangleTypeBySideLengths(...triangleSides)).toEqual('equilateral');
    });

    it('should return isosceles when 2 sides have the same length', function () {
        const triangleSides = [2, 2, 3];
        expect(checkTriangleTypeBySideLengths(...triangleSides)).toEqual('isosceles');
    });

    it('should return scalene when all sides have the different lengths', function () {
        const triangleSides = [2, 1, 3];
        expect(checkTriangleTypeBySideLengths(...triangleSides)).toEqual('scalene');
    });
});