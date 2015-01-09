describe("Statistic Calculator", function () {
    var calculator;
    var numbers = [3, 4, 8, 19, 15];

    beforeEach(function () {
        calculator = new StatisticCalculator();
    });

    describe("#max", function () {
        it("should return 19 when max of [3, 4, 8, 19, 15]", function () {
            expect(calculator.max(numbers)).toEqual(19);
        });
    });

    describe("#min", function () {
        it("should return 3 when min of[3, 4, 8, 19, 15]", function () {
            expect(calculator.min(numbers)).toEqual(3);
        });
    });

    describe("#average", function () {
        it("should return 8 when average of [3, 4, 8, 19, 15]", function () {
            expect(calculator.average(numbers)).toEqual(9.8);
        });
    });

    describe("#len", function () {
        it("should return 5 when length of [3, 4, 8, 19, 15]", function () {
            expect(calculator.len(numbers)).toEqual(5);
        });
    });
});
