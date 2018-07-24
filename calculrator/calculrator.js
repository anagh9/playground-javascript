var input = {
  array: [],
  getInput: function(){
    return this.array.join(' ');
  }
}

var output = {
  text: document.getElementById('output')
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

  output.text.innerHTML = input.array.length <= 0 ? "Empty" : input.getInput();
  
  console.log("clickNum");
  console.log(input.getInput())
}

var showResult = function(event) {
  console.log("showResult")
  console.log(event.target.innerHTML)
}
