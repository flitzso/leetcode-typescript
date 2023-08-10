// No terminal primeiro: tsc solution.ts depois: node solutiom.js
function romanToInt(s: string): number {
        const romanValues: { [key: string]: number } = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let result: number = 0;
    let prevValue: number = 0;
    
    for (let i: number = s.length - 1; i >= 0; i--) {
        const currentValue: number = romanValues[s.charAt(i)];
        if (currentValue >= prevValue) {
            result += currentValue;
        } else {
            result -= currentValue;
        }
        prevValue = currentValue;
    }
    
    return result;
}

console.log(romanToInt("III")); 
console.log(romanToInt("LVIII")); 
console.log(romanToInt("MCMXCIV")); 

