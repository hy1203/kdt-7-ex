//배열 구조 분해
//특징 : 구조 분해 당시 순서가 중요!
const lists = ["apple", "grape"];
console.log(lists[0]);
[item1, item2, item3 = "peach"] = lists;
console.log(item1,item2, item3);


function test() {
    return ['one', 'two', 'three'];
}
const [one, two, three, four = 'four'] = ['one', 'two','three'];
console.log(one, two, three, four);

//swap
let a = 10;
let b = 20;
console.log(a, b);
[a, b] = [b, a];
console.log(a, b);

//객체 구조 분해
//특징 : 키값이 중요!!
const obj = {
    key1: 'one',
    key2: 'two'
}
console.log(obj.key1);
console.log(obj['key1']);

const{key1:newkey1, key2,key3='three'} = obj
console.log(newkey1, key2, key3)//key2, key1로 써도됨(키값이 중요하기 때문)

const {a:a2, b:b2} = {a:10, b:20}

//spread 연산자
const i = [10,20,30]
const j = [40,50]
const  concat = i.concat(j)
console.log(concat)
const spread =[...i,...j]
console.log(spread)

const z = [..."hello"]
function spreadFunc(a,b,c) {
    console.log(a+b+c)
}
//spread는 함수를 호출 할때!
//기존방식
spreadFunc(...i)

//rest 파라미터
function restFunc(a, ...rest) {
     console.log(a)
    console.log(rest)
}
restFunc(...i)