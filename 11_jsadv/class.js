//클래스
class Cat {
    //생성자
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    mew() {
        console.log("야옹")
    }
    eat() {
        console.log("먹이를 먹습니다.")
    }
    test() {
        this.mew()
    }
}

let cat1 = new Cat('나비', 10)
cat1.mew()
cat1.eat()
cat1.test()

//추상화 - 핵심적인 코드만 보여주는 것
//캡슐화 - (클래스의 내용) 보호
//다양성 - 변경이 용이
//상속 - 코드 재사용

//상속
//부모 = 상위 클래스 = 슈퍼클래스
//자식 = 하위 클래스 = 서브클래스

//부모 클래스
class Product {
    name = ''; //써도 되고 안써도됨
    price = 0; //써도 되고 안써도됨
    constructor(name, price){
        this.name = name
        this.price = price
    }
    getPrice() {
        return this.price + '만원'
    }
    setPrice(price){
        this.price = price
    }
}

//자식클래스
class TV extends Product {
    constructor(name, price, weight){
        super(name, price)
        this.weight = weight
    }
    getWeight() {
        return this.weight
    }
}

//자식 인스턴스
const tv1 = new TV('samsung TV', 200, '27inch')
console.log(tv1)
console.log(tv1.getPrice())
tv1.setPrice(150)
console.log(tv1.getPrice())
console.log(tv1.getWeight())

//부모 인스턴스
const prod1 = new Product('LG TV', 300)
console.log(prod1)
