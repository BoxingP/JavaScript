function StatisticCalculator() {
}

StatisticCalculator.prototype.max = function (numbers) {
    return numbers.reduce(function(previousValue, currentValue) {
        return previousValue > currentValue? previousValue:currentValue;
    })
};

StatisticCalculator.prototype.min = function (numbers) {
    return numbers.reduce(function(previousValue, currentValue) {
        return previousValue < currentValue? previousValue:currentValue;
    })
};

StatisticCalculator.prototype.average = function (numbers) {
    var sum = numbers.reduce(function (pre, current) {
        return pre + current;
    });

    return sum / numbers.length;
};

StatisticCalculator.prototype.len = function (numbers) {
    return numbers.length;
};