//변수를 만드는 세가지 방법이 있다
const a = 10; //const는 값 업데이트 불가능
let b = 20; //let는 값 업데이트 가능
var c = 30; //이건 '구' 방식! 사용 X 권장


// player라는 Object를 만들었다. 그 안에는 여러 property가 있다
const player = {
    name: "Chanwoo",
    points: 100,
    handsome: true,
};


//null과 undefined의 차이
//undefined는 변수에 아무것도 대입하지 않았을때 가지는 값
//반면 null은 사용자가 따로 지정해주어야 가질 수 있는 값


//이런 식으로 property를 새로 추가할 수 있다
player.lastName = "Kim";


//배열을 만들고 그곳에 값을 추가할 수 있다
const d = [a, b, c];
d.push(3);
console.log(a+2);
console.log(a-2);
console.log(a*2);
console.log(d);


//property를 부르는 방법은 두 가지가 있다
console.log(player);
console.log(player.name);
console.log(player["name"]);


//함수 만들기
function sayHello(nameOfPerson, age){
    console.log("Hello! my name is " + nameOfPerson+ " and I'm "+ age);
}

function plus(firstNumber, secondNumber){
    console.log(firstNumber + secondNumber);
}

sayHello("Chanwoo", "21");
plus(1, 2);


//object의 함수 만들기
const human = {
    name: "chanwoo",
    sayHello: function(otherPerson){
        console.log("Hello! " + otherPerson);
    },
};

human.sayHello("nico");


//계산기 만들기, return 사용, 그래야 함수 안의 값을 밖에서 사용가능
const calculator = {
    add: function(a, b){
        return (a + b);
    },
    sub: function(a, b){
        return (a - b);
    },
    tim: function(a, b){
        return (a * b);
    },
    div: function(a, b){
        return (a / b);
    },
    pow: function(a, b){
        return (a ** b);
    },
}

console.log(calculator.add(1, 2));
console.log(calculator.sub(1, 2));
console.log(calculator.tim(1, 2));
console.log(calculator.div(1, 2));
console.log(calculator.pow(1, 2));


//사용자에게 묻기, 아무것도 안물으면 null 저장, string형태로 저장
const age = prompt("Hi! How old are you?");


//typeof를 통해 변수의 자료형을 알 수 있음
console.log(typeof age);


//변수의 자료형 변환, 숫자가 아닌 걸 넣으면 NaN(Not a Number)
console.log(typeof parseInt(15));


//isNaN을 통해 자료형이 숫자인지 아닌지를 알 수 있음, NaN이면 true
console.log(isNaN(age));


//조건문 예시
if (isNaN(age)) {
    console.log("Please write a number.");
} else if (age < 18) {
    console.log("You are too young.");
} else {
    console.log("You can drink.");
}

//document를 통해 JS로 HTML에 접근할 수 있다
//document.getElementById("아이디")를 통해 element를 가져올 수 있다
//console.dir()로 element를 더 자세히 볼 수 있다
//document.getElementByClassName("클래스")를 통해 element를 가져올 수 있다

//document.querySelector()는 element를 CSS방식으로 검색할 수 있다
//ex) documet.querySelector(.클래스이름 태그이름)
//querySelector는 위처럼 찾았을때 .클래스 안에 태그가 많아면 첫번째만 가져옴
//그래서 querySelectorAll을 사용하면 array 형태로 다 나옴

//addEventListener("액션", 함수명) 을 통해 액션감지마다 함수 실행가능
//title.addEventListener("click", 함수명) 과 title.onclick = 함수명은 같다 하지만 권장X


