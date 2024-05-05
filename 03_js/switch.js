const value1 = 30;
const value2 = 50;
let code = '+'
function calc(num1, num2, code) {
    let calc;
    switch(code){
        case '+':
            calc = num1 + num2;
            break;
        case '-':
            calc = num1 - num2;
            break;
        case '*':
            calc = num1 * num2;
            break;
        case '/':
            calc = num1 / num2;
            break;
        default:
            alert("잘못된 코드 입력입니다.");
            break;
    }
    return calc;
}
const a = calc(value1, value2, code);
console.log(`a: ${a}`); 