# ES6+

## ES2015

### scope : block scope
- let
- const


### String : new string method
- startsWith(str)
- endsWith(str)
- includes(str)
```javascript
let str = "hrllo world ! ^^ ~~";
let matchstr = "^ ~~";

console.log(str.startWith(matchstr));
console.log(str.endWith(matchstr));
console.log("include test ", str.inclides("^^^"));
```


### Array
- for of
```javascript
var data = [1, 2, undefined, NaN, null, ""];

// for
for (var i = 0; i < data.length; i++) {
  console.log(i);
}

// forEach
data.forEach(function(value){
  console.log("value is", value)
})

// for in : 상위에서 추가된 값도 순회하게됨
for(let idx in data) {
  console.log(data[idx]);
}

// for of : for in 의 단점 극복 가능
for(let value of data) {
  console.log(value);
}

var str = "hello world!!!";
for(let value of str) {
  console.log(value);
}
```

- spread operator : 펼침연산자
```javascript
// ...연산자 : 참조가 아닌 복사를 하게 된다.
let pre = ["apple", "orange", 100];
let newDate = [...pre];
console.log(pre === newData); //false

let pre2 = [100, 200, "hello", null];
let newData2 = [0, 1, 2, 3, ...pre2, 4];
console.log(newData2); //[0, 1, 2, 3, 100, 200, "hello", null, 4]

function sum(a, b, c) {
  return a+b+c;
}
let pre3 = [100, 200, 300];
console.log(sum.apply(null, pre3)); //600
console.log(sum(...pre3)); //600
```

- from
```javascript
function addMark() {
  let newData = [];
  let newArray = Array.from(arguments);

  for(let i = 0; i < arguments.length; i++) {
    newData.push(arguments[i] + "!");
  }

  let newData2 = newArray.map(function(value){
    return value + "!";
  })

  console.log(newData, newData2);
}

addMark(1, 2, 3, 4, 5); //["1!", "2!", "3!", "4!", "5!"]
```

### Object
```javascript
function getObj() {
  let name = "crong";
  
  const getName = function(){
    return name;
  }
  
  const setName = function(newname) {
    name = newname;
  }
  
  const printName = function(){
    console.log(name);
  }
  
  return {getName, setName}
}

let obj = getObj();
console.log(obj.getName());
```

### Destructuring
- Array
```javascript
let data = ["crong", "honux", "jk"];
let [jisu,,jung] = data;
console.log(jisu, jung);
```

- Object
```javascript
let obj = {
  name: 'crong',
  address: 'korea',
  age: 10
}
let {name, age} = obj;
let {name:myName, age:myAge} = obj;
console.log(myName, myAge);
```

- JSON parsing
```javascript
let news = [
  {
    "title": "sbs",
    "imgurl": "www.snaps.com",
    "newslist": [
      "a",
      "b",
      "c"
    ]
  },
  {
    "title": "mbc",
    "imgurl": "www.ohprint.me",
    "newslist": [
      "aa",
      "bb",
      "cc"
    ]
  }
];
//let [, mbc] = news;
//let {title, imgurl} = mbc;
let [, {title, imgurl}] = news;
console.log(title, imgurl);
```

- Event object
```javascript
document.querySelector('div').addEventListener('click', function({type, target}) {
  console.log(type, target.innerText);
})
```