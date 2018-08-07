//html elements
var word1 = document.getElementById('word1')
var word2 = document.getElementById('word2');
var check = document.getElementById('check');
var progess = document.getElementById('progress');

//game object
var game = {
  btns: [],
  maxPlay: 3,
  current: 0
};
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

  this.current === game.maxPlay && alert('end');

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
  
  var n = Math.floor(Math.random() * (game.answer.length - 1));
  for (var i = 0; i < n; i++) {
    game.rshift();
  }
}
game.shuffle();
