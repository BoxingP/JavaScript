describe("Calculator", function () {
    var calculator;

    beforeEach(function () {
        calculator = new Calculator();
    });

    describe("#add", function () {
        it("should return 5 when add 2 + 3", function () {
            expect(calculator.add(2, 3)).toEqual(5);
        });

        it("should return -5 when add -7 + 2", function () {
            expect(calculator.add(-7, 2)).toEqual(-5);
        });
    });

    describe("#subtraction", function () {
        it("should return 1 when subtract 8 from 9", function () {
            expect(calculator.subtract(9, 8)).toEqual(1);
        });

        it("should return -1 when subtract 9 from 8", function () {
            expect(calculator.subtract(8, 9)).toEqual(-1);
        });
    });

    describe("#multiply", function () {
        it("should return 20 when multiply 2 times 10", function () {
            expect(calculator.multiply(2, 10)).toEqual(20);
        });

        it("should return -10 when multiply 5 times -2", function () {
            expect(calculator.multiply(5, -2)).toEqual(-10);
        });
    });
});



