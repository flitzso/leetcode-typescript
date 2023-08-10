// No terminal primeiro: tsc solution.ts depois: node solutiom.js
function romanToInt(s) {
    var romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    var result = 0;
    var prevValue = 0;
    for (var i = s.length - 1; i >= 0; i--) {
        var currentValue = romanValues[s.charAt(i)];
        if (currentValue >= prevValue) {
            result += currentValue;
        }
        else {
            result -= currentValue;
        }
        prevValue = currentValue;
    }
    return result;
}
console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
