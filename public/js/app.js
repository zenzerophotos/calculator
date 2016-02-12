$(document).ready(function(){
  var calculator = Object.create(Calculator);
  var $display = $('#display');
  var lastOperation = '';


  $('#clear').on('click', clear);
  $('#plus').on('click', plus);
  $('#equal').on('click', equal);
  $('#subtract').on('click', subtract);
  $('#multiply').on('click', multiply);
  $('#divide').on('click', divide);
  $('.num').on('click', updateDisplay);
  $('#mem-plus').on('click', memAdd);
  $('#mem-minus').on('click', memSub);
  $('#mem-recall').on('click', memDisplay);
  $('#mem-clear').on('click', memClear);
  // $('#deadpool').on('click',deadpool);
  //
  // function deadpool(){
  //   var deadpool = "https://youtu.be/rE4y4a8hqwY";
  // }

  function updateDisplay(){
  var num = $(this).text();
    var displayText = $display.text();
    if($display.text() === "0"){
      $display.text(num);
    } else {
      var output = $display.text()+num;
      $display.text(output);
    }
  }
    //TODO: Keep it from allowing multiple decimal points.

  function divide(){
    lastOperation = '/';
    var displayText = $display.text();
    var displayNum = parseFloat(displayText);
    calculator.add(displayNum);
    console.log('divide');
    $display.text(0);
  }

  function multiply(){
      lastOperation = 'X';
      var displayText = $display.text();
      var displayNum = parseFloat(displayText);
      calculator.add(displayNum);
      console.log('multply');
      $display.text(0);
  }

  function subtract(){
    lastOperation = '-';
    var displayText = $display.text();
    var displayNum = parseFloat(displayText);
    calculator.add(displayNum);
    console.log('sub');
    $display.text(0);
  }

  function equal(){
    var displayText = $display.text();
    var displayNum = parseFloat(displayText);
    if(lastOperation === '+'){
      calculator.add(displayNum);
      var result = calculator.result();
      $display.text(result);
      calculator.reset();
    }
     else if(lastOperation === '-'){
      calculator.subtract(displayNum);
      var result = calculator.result();
      $display.text(result);
      calculator.reset();
    }
    else if(lastOperation === 'X'){
      calculator.multiply(displayNum);
      var result = calculator.result();
      $display.text(result);
      calculator.reset();
    }
    else if(lastOperation === '/'){
      calculator.divide(displayNum);
      var result = calculator.result();
      $display.text(result);
      calculator.reset();
    }
  }

  function plus(){
    lastOperation = '+';
    var displayText = $display.text();
    var displayNum = parseFloat(displayText);
    calculator.add(displayNum);
    console.log('adding!');
    $display.text(0);
  }

  function clear(){
    lastOperation= '';
    $display.text(0);
    calculator.reset();
  }

  function memAdd(){
    var disText = $display.text();
    console.log($(this).text());
    calculator.addToMemory(parseFloat(disText));
    $display.text(0);
    console.log(calculator.memory);
    lastOperation = 'memAdd';

  }

  function memSub(){
    var disText = $display.text();
    calculator.subtractFromMemory(parseFloat(disText));
    $display.text(0);
    console.log(calculator.memory);
    lastOperation = 'memSub';

  }

  function memClear(){
    lastOperation= '';
    $display.text(0);

  }

  function memDisplay(){
    $display.text(calculator.memory);

  }

// button.on('click',updateDisplay);

});
