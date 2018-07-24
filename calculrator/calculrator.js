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
      if(input.array.length <= 1){
        input.array = [0]
      } else {
        input.array.pop()
      }   
      break;
    case '+':
      input.array.push(' + ');
      break;
    case '-':
      input.array.push(' - ');
      break;
    case '*':
      input.array.push(' * ');
      break;
    case '/':
      input.array.push(' / ');
      break;
    default:
      input.array.push(str);
  }

  output.text.innerHTML = input.getInput();
  
  console.log("clickNum");
  console.log(input.getInput())
}

var showResult = function(event) {
  console.log("showResult")
  console.log(event.target.innerHTML)
}
