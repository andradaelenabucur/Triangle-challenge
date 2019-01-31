const areTheNumbersAlmostEqual = (num1, num2) => {
	return Math.abs( num1 - num2 ) < Number.EPSILON;
};

module.exports = areTheNumbersAlmostEqual;