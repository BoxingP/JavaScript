window.onload = function () {
    function getValue() {
        var ele = document.getElementById("input-box");
        return ele.value;
    }

    function stringToArray(string) {
        var result = [];

        string.split(',').forEach(function (item) {
            result.push(+item);
        });

        return result;
    }

    function appendResult(result) {
        var ele = document.getElementById("result-value");
        ele.innerText = result;
    }

    function calculate() {
        var statisticCalculator = new StatisticCalculator();
        var numbers;

        return {
            max: function () {
                numbers = stringToArray(getValue());
                appendResult(statisticCalculator.max(numbers));
            },

            min: function () {
                numbers = stringToArray(getValue());
                appendResult(statisticCalculator.min(numbers));
            },

            average: function () {
                numbers = stringToArray(getValue());
                appendResult(statisticCalculator.average(numbers));
            },
            len: function () {
                numbers = stringToArray(getValue());
                appendResult(statisticCalculator.len(numbers));
            }
        }
    }


    function addClickEvent(id, handler) {
        var ele = document.getElementById(id);
        ele.addEventListener("click", handler);
    }

    var calc = new calculate();
    addClickEvent("max", calc.max);
    addClickEvent("min", calc.min);
    addClickEvent("average", calc.average);
    addClickEvent("length", calc.len);
};