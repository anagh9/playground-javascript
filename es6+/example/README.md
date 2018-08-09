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