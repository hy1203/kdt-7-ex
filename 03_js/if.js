const value1 = 30;
const value2 = 50;
let code = '+'
function calc(num1, num2, code) {
    if(code === '+') {
        return num1 + num2;
    } else if(code === '-') {
        return num1 -num2;
    } else if( code === '*') {
        return num1 * num2;
    } else if( code === '/') {
        return num1 / num2;
    } else  {
        alert("잘못된 코드입력입니다.")
    }
}
const a = calc(value1, value2, code);
code = '-'
const b = calc(value1, value2, code);
console.log(`a: ${a}`);
console.log(`b: ${b}`);