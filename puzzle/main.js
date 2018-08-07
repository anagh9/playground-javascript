//html elements
var word1 = document.getElementById('word1')
var word2 = document.getElementById('word2');
var check = document.getElementById('check');
var progess = document.getElementById('progress');
var time = document.getElementById('time');

//game object
var game = {
  btns: [],
  maxPlay: 3,
  current: 0
};

game.startTime = Date.now();
game.words = 'apple,linux,javascript,tutorial,codesquad,baby,girlfriend,legrnd'.split(',');


game.choose = function() {
  var idx = Math.floor(Math.random() * this.words.length);
  this.answer = this.words[idx];
  this.letters = this.answer.split('');
  word1.innerHTML = this.answer;
}

game.addButtons = function() {
  for (var i = 0; i < this.letters.length; i++) {
    var btn = document.createElement('button');
    btn.innerHTML = this.letters[i];
    word2.appendChild(btn);
    this.btns.push(btn);
  }
}

game.removeButtons = function() {
  for (var i = 0; i < this.btns.length; i++) {
    word2.removeChild(this.btns[i]);
  }
  this.btns = [];
}

game.checkGood = function() {
  return this.answer === this.letters.join('');
}

game.updateDisplay = function() {
  if(this.checkGood()) {
    check.innerHTML = '일치';
  } else {
    check.innerHTML = '불일치';
  }
}

game.init = function() {
  this.choose();
  this.addButtons();
  this.updateDisplay();
}
game.init();


game.copyBtnText = function() {
  for(var i = 0; i < this.letters.length; i++) {
    this.btns[i].innerHTML = this.letters[i];
  }
}

game.swap = function() {
  var temp = [];
  while (game.letters.length != 0) {
    var s = game.letters.pop();
    temp.push(s);
  }

  game.letters = temp;
  game.copyBtnText();
  game.updateDisplay();
}

game.rshift = function() {
  var s = this.letters.pop();
  this.letters.unshift(s);
  this.copyBtnText();
  this.updateDisplay();
}

game.lshift = function() {
  var s = this.letters.shift();
  this.letters.push(s);
  this.copyBtnText();
  this.updateDisplay();
}

game.progress = function() {
  if(this.checkGood()) {
    this.current++;
    this.removeButtons();
    this.init();
    this.shuffle();

    var str = "";
    for(var i = 0; i < game.current; i++) {
      str += "0";
    }
    progress.innerHTML = str;
  }

  if(this.current === game.maxPlay) {
    var sec = (Date.now() - game.startTime) / 1000;
    alert('end' + sec);
    clearInterval(x);
  } 

}

var swap = function(event) {
  game.swap();
  game.progress();
}

var rshift = function(event) {
  game.rshift();
  game.progress();
}

var lshift = function(event) {
  game.lshift();
  game.progress();
}

game.shuffle = function() {
  var toggle = Math.floor(Math.random() * 2) === 0;
  if(toggle) {
    game.swap();
  }
  
  var rmax = Math.max(game.answer.length - 2, 1);
  var n = Math.floor(Math.random() * rmax) + 1;
  for (var i = 0; i < n; i++) {
    game.rshift();
  }
}
game.shuffle();

var updateTime = function() {
  now = Date.now() - game.startTime;
  time.innerHTML = (now / 1000) + " s";
}

var x = setInterval(updateTime, 50);
