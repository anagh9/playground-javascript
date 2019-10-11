# playground-javascript
playground for javascript study

- [calculrator](./es3/calculrator)
- [example](./es3/example)
- [puzzle](./es3/puzzle)

<br/>

---

<br/>

# ES6+

## scope : block scope
- let
- const

<br/>

## String : new string method
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

<br/>

## Array
### for of
```javascript
var data = [1, 2, undefined, NaN, null, ""];

// for
for (var i = 0; i < data.length; i++) {
  console.log(i);
}

// forEach
data.forEach(function(value){
  console.log("value is", value)
});

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

### spread operator : 펼침연산자
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

### from
```javascript
function addMark() {
  let newData = [];
  let newArray = Array.from(arguments);

  for(let i = 0; i < arguments.length; i++) {
    newData.push(arguments[i] + "!");
  }

  let newData2 = newArray.map(function(value){
    return value + "!";
  });

  console.log(newData, newData2);
}

addMark(1, 2, 3, 4, 5); //["1!", "2!", "3!", "4!", "5!"]
```

<br/>

## Object
```javascript
function getObj() {
  let name = "crong";
  
  const getName = function(){
    return name;
  };
  
  const setName = function(newname) {
    name = newname;
  };
  
  const printName = function(){
    console.log(name);
  };
  
  return {getName, setName}
}

let obj = getObj();
console.log(obj.getName());
```

<br/>

## Destructuring
### Array
```javascript
let data = ["crong", "honux", "jk"];
let [jisu,,jung] = data;
console.log(jisu, jung);
```

### Object
```javascript
let obj = {
  name: 'crong',
  address: 'korea',
  age: 10
};
let {name, age} = obj;
let {name:myName, age:myAge} = obj;
console.log(myName, myAge);
```

### JSON parsing
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

### Event object
```javascript
document.querySelector('div').addEventListener('click', function({type, target}) {
  console.log(type, target.innerText);
})
```

<br/>

## Set & Map

### Set
- 중복 없이 유일한 값을 저장하려고 할때, 이미 존재하는지 체크할 때 유용.

```javascript
let mySet = new Set();
console.log(toString.call(mySet));

mySet.add("crong");
mySet.add("hary");
mySet.add("crong");

mySet.forEach(function(v){
  console.log(v);
});

console.log(mySet.has("crong"));
mySet.delete("crong");
```

### WeakSet
- 참조를 가지고 있는 객체만 저장이 가능하다.
- 객체 형태를 중복없이 저장하려고 할때 유용하다.

```javascript
let arr = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
let obj = {arr, arr2};
let ws = new WeakSet();

ws.add(arr);
ws.add(111);//invaled
ws.add("111");//invaled
ws.add(function(){});

ws.add(arr2);
ws.add(obj);

arr = null;
console.log(ws.has(arr))
```

### Map
- Array => Set, WeakSet
- Object => Map, WeakMap
- Map은 key value 구조
```javascript
let wm = new WeakMap();
let myfun = function(){};
//함수가 얼마나 실행됐는지 알려고 할때.

wm.set(myfun, 0);
console.log(wm);

let count = 0;
for(let i=0; i<10; i++){
  count = wm.get(myfun);
  count++;
  wm.set(myfun, count);
}

console.log(wm.get(myfun));
```

### WeakMap
```javascript
//WeakMap을 이용한 private variable 
const wm = new WeakMap();

function Area(height, width) {
  wm.set(this, {height, width});
}

Area.prototype.getArea = function() {
  const {height, width} = wm.get(this);
  return height * width;
};

let myarea = new Area(10, 20);
console.log(myarea.getArea());
```

<br/>

## Template
- json으로 응답을 받고, javascript object로 변환한 후에 어떠한 데이처리 조작을 한 후에 dom에 추가
- 데이터 + HTML 문자열의 결합이 필요하기 떄문에.

### Template
```javascript
const data = [
  {
    name: 'coffee-bean',
    order: true,
    items: ['americano', 'milk', 'green-tea']
  },
  {
    name: 'starbucks',
    order: false
  },
  {
    name: 'coffee-king',
    order: true,
    items: ['americano', 'latte']
  }
]
```

### Tagged template literals
```javascript
function fn(tags, name, items) {
  if(typeof items === "undefined") {
    items = '<span style="color:red">주문가능한 상품이 없습니다</span>';
  }
  return(tags[0] + name + tags[1] + items + tags[2])
}

data.forEach((v) => {
  const template = fn`<h1>Welcome ${v.name}!!</h1>
<h4>주문가능항목</h4><div>${v.items}</div>`;
  document.querySelector('#message').innerHTML += template;
  console.log(template);
})

```

<br/>

## function

### arrow function
```javascript
//arrow 예제
let newArr = [1, 2, 3, 4, 5].map(function(v, i, o){
  return v * 2;
});

let newArr2 = [1, 2, 3, 4, 5].map((v) => v * 2);

console.log(newArr, newArr2)
```

### this context of Arrow function
```javascript
//arrow function은 this context 유지
const myObj = {
  runTimeout() {
    setTimeout(function() {
      console.log(this === window);
      this.printData();
    }.bind(this), 200);
  },
  
  printData() {
    console.log('hi');
  }
};
myObj.runTimeout();

const myObj1 = {
  runTimeout() {
    setTimeout(() => {
      console.log(this === window);
      this.printData();
    }, 200);
  },
  
  printData() {
    console.log('hi');
  }
};
myObj1.runTimeout();

//with dom
const el = document.querySelector('p');

const myObj = {
  register() {
    el.addEventListener('click', (evt) => {
      this.printData(evt.target);
    });
  },
      
  printData(el) {
    console.log('clicked!', el.innerText);
  }
};

myObj.register();
```

### default parameters
```javascript
function sum(value, size={value:1}) {
  return value + size.value;
}

console.log(sum(3));
```

### rest parameters
```javascript
function checkNum1() {
  const argArray = Array.prototype.slice.call(arguments);
  const result = argArray.every((v) => typeof v === 'number');
}

function checkNum2(...argArray) {
  const result = argArray.every((v) => typeof v === 'number');
}

const result = checkNum(10, 2, 3, 4, 5, '55');
```

<br/>

## 객체

### class를 통한 객체생성
```javascript
//기존
function Health(name) {
  this.name = name;
}

Health.prototype.showHealth = function() {
  console.log(this.name + '님 안녕하세요!');
};

const h = new Health('crong');
h.showHealth();

//ES6+
class Health {
  constructor(name, lastTime) {
    this.name = name;
    this.lastTime = lastTime;
  }
  
  showHealth() {
    console.log('hello ' + this.name);
  }
}

const myHealth = new Health('crong');
myHealth.showHealth();
```

### Object assign 
```javascript
const healthObj = {
  showHealth: function() {
    console.log('health Time: ' + this.healthTime);
  }
};
const myHealth = Object.create(healthObj);
myHealth.healthTime = '11:20';
myHealth.name = 'crong';
console.log(myHealth);

const healthObj = {
  showHealth: function() {
    console.log('health Time: ' + this.healthTime);
  }
};

const myHealth = Object.assign(Object.create(healthObj), {
  name: 'crong',
  lastTime: '11:20'
});

console.log(myHealth);
```

```javascript
//immuterble
const previousObj = {
  name: 'crong',
  lastTime: '11:20'
};

const myAssign = Object.assign({}, previousObj, {});
console.log(previousObj === myAssign)//false
console.log(previousObj.name === myAssign.name)//true

const myHealth = Object.assign({}, previousObj, {
  "lastTime": "12:30",
  "age": 99
});
console.log(myHealth);
```

### setPrototypeOf
```javascript
const healthObj = {
  showHealth: function() {
    console.log('health Time: ' + this.healthTime);
  },
  setHealth: function(newTime) {
    this.healthTime = newTime;
  }
};

const newObj = Object.setPrototypeOf({
  name: 'crong',
  lastTime: '11:20'
}, healthObj);

console.log(newObj);
```
```javascript
//prototype chain

//parent obj
const healthObj = {
  showHealth: function() {
    console.log('health Time: ' + this.healthTime);
  },
  setHealth: function(newTime) {
    this.healthTime = newTime;
  }
};

//child obj
const healthChildObj = {
  getAge: function() {
    return this.age;
  }
};

const lastHealObj = Object.setPrototypeOf(healthChildObj, healthObj);

const childObj = Object.setPrototypeOf({
  age:22
}, healthChildObj);

childObj.setHealth("11:55");
childObj.showHealth();
```

<br/>

## module

### import export
```javascript
//app.js
import myLectures from './myLogger';
import _ from './utility';
_.log('test');

const cs = new myLectures();
_.log(`getTime ${cs.getTime()}`);


// utility.js
const _ = {
  log(data) {
    if(window.console) console.log(data);
  }
};

export default _;


//myLogger.js
export default class myLectures {
  constructor(props) {
    this.lectures = ['java', 'ios'];
  }

  getLectures() {
    return this.lectures;
  }

  getTime = () => {
    return Data.now();
  };

  getCurrentHour = () => {
    return (new Data).getHours();
  }   
}
```

<br/>

## Proxy

### about Proxy
- 어떤 오브젝트가 있을때 가로채서 다른작업을 할 수 있게 해줌.
```javascript
const myObj = {name:'crong'};
const proxy = new Proxy(myObj, {});

console.log(proxy === myObj) //false
console.log(proxy.name === myObj.name) //true

const proxy1 = new Proxy({
  name:'crong',
  changedValue: 0
  }, {
  get: function(target, property, receiver){
    console.log('get value');
    //return target[property];
    //return (property in target) ? target[property] : 'anonymous';
    return Reflect.get(target, property);
  },
  set: function(target, property, value){
    console.log('set value');
    target['changedValue']++;
    target[property] = value;
  }
});
```
