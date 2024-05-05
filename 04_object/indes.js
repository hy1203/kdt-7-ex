var cat = {
    name:'나비',
    age:1,
    mew: function() {
        return"야옹"
    } 
}
cat['gender'] = 'boy';

console.log(cat.age);
console.log(cat.mew());
console.log(cat.gender);
console.log(cat);

var arr1 = [1,2,3,"안녕","반가워"];
console.log(arr1.length);
console.log(arr1.push("추가"));
console.log(arr1.pop());
console.log(arr1.unshift("앞으로"));
console.log(arr1.shift());
console.log("3찾기 : ",arr1.indexOf(3));
console.log(arr1);

const dog={
    name:'토니',
    age:2,
    gender:'boy'
}
for(var i in dog){
    console.log(dog[i]);
}
var arr1 = [1,2,3,"안녕","반가워"];
for(var i of arr1){
    console.log(i);
}
const date = new Date();

console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getMonth()+1);
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getTime());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.toLocaleString());
document.write(date.getDate());

console.log(Math.min(10,20,30,40,50));
console.log(Math.max(10,20,30,40,50));
console.log(Math.floor(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.round(Math.random() * 10));