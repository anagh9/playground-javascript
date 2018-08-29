## 실습. Destructuring and Set

### lotto 번호 만들기
1. 유일한 값을 추출하는 과정에서 Set을 사용합니다.
2. getRandomNumber 함수에 변수를 전달하는 과정에서 destructuring을 사용해 봅니다.

```javascript
const SETTING = {
  name: 'LUCKY LOTTO',
  count: 6,
  maxNumber: 45
}

function getRandomNumber(maxNumber) {
  //랜덤한 유일한 숫자값을 추출
}
```

```javascript
const SETTING = {
  name: 'LUCKY LOTTO',
  count: 6,
  maxNumber: 45
}
let lotteSet = new Set();

function getRandomNumber(maxNumber) {
  return Math.floor(Math.random()*maxNumber)+1;
}

for (let i = 0; i < SETTING.count; i++){
  lotteSet.add(getRandomNumber(SETTING.maxNumber));
}

console.log(lotteSet);
```