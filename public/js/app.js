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
  $('mem-plus').on('click', memAdd);
  $('mem-minus').on('click', memSub);
  $('mem-recall').on('click', memDisplay);
  $('mem-clear').on('click', memClear);




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
  }

  function memAdd(){

  }

  function memSub(){

  }

  function memClear(){

  }

  function memDisplay(){

  }

// button.on('click',updateDisplay);

});
