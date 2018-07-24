var input = {
  array: [],
  getInput: function(){
    return this.array.join(' ');
  },
  removeAll: function(str){
    this.array = [];
    this.array.push(str);
  },
  isEmpty: function() {
    return this.array.length === 0;
  },
  getValue: function(){
    var str = this.array.shift();
    var num = Number(str);
    return num;
  },
  getOperator: function(){
    var op = this.array.shift();
    switch(op){
      case '+':
      case '-':
      case '*':
      case '/':
        return op;
        break;
      default:
        return "$";
    }
  },
  ready: function() {
    this.array = this.array.join('').split(' ');
  }
}

var output = {
  out: document.getElementById('output'),
  print: function(value) {
    this.out.innerHTML = value;
  }
}

var calculrator = {
  calculrate: function(first, second, op) {
    switch(op) {
      case '+':
        return first + second;
        break;
      case '-':
        return first - second;
        break;
      case '*':
        return first * second;
        break;
      case '/':
        return second === 0 ? NaN : first / second;
        break;
      default:
        return NaN;
    }
  }
}

var clickNum = function(event) {
  var str = event.target.innerHTML;
  switch(str) {
    case 'BS':  
      input.array.pop()    
      break;
    case '+':
    case '-':
    case '*':
    case '/':
      input.array.push(' ' + str + ' ');
      break;
    default:
      input.array.push(str);
  }

  output.print(input.array.length <= 0 ? "Empty" : input.getInput());
}

var showResult = function(event) {
  input.ready();
  var result = input.getValue();
  while(!input.isEmpty()) {
    var op = input.getOperator();
    var second = input.getValue();
    result = calculrator.calculrate(result, second, op);
  }
  
  output.print(result);
  input.removeAll(result);
}
