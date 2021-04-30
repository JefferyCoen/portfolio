//For Basic Calculator
function insert(num) {
    document.resultWindow.resultText.value = document.resultWindow.resultText.value+num
  }
  
  
  function clr() {
    document.resultWindow.resultText.value = "";
  }
  
  function del() {
    var exp = document.resultWindow.resultText.value;
    document.resultWindow.resultText.value = exp.substring(0, exp.length - 1)
  }
  
  function equals() {
    var exp = document.resultWindow.resultText.value;
    if(exp){
        document.resultWindow.resultText.value = eval(exp)
    }
  }
  
  function sqrRoot() {
    var squareRoot = Math.sqrt(document.resultWindow.resultText.value)
    document.resultWindow.resultText.value = squareRoot
  }
  
  //For BMI Calculator
  function hideMetric() {
    document.getElementById("metricForm").style.visibility="hidden";
    document.getElementById("USForm").style.visibility="visible";
  }
  
  function hideUS() {
    document.getElementById("metricForm").style.visibility="visible";
    document.getElementById("USForm").style.visibility="hidden";
  }
  
  //Metric Calculations for BMI Calculator
  function calMetric() {
    var mValue1 = document.getElementById('kg').value;
    var mValue2 = document.getElementById('cm').value;
    
    // calculate BMI 
    var bmiMetric = (mValue1 / Math.pow(mValue2, 2))* 10000;
    //round BMI
    var bmiRounded = bmiMetric.toFixed(0);
  
    //For converting to U.S. Measurements
    //weight convert to pounds
    var con1 = (mValue1 * 2.2).toFixed(1);
    //round number to 1 decimal
    var con1Rounded = (mValue1 * 2.2).toFixed(0);
    //height convert to inches
    var con2 = (mValue2 / 2.54).toFixed(0);
    var con3 = (mValue2 /2.54).toFixed(1)
    //height convert to feet and inches
    let feet = Math.floor(con2 / 12)
    let inches = (con2 - (feet * 12))
  
    document.getElementById('yourBMI').innerHTML = "Your BMI: " + bmiRounded; 
  
    document.getElementById('conversion1').innerHTML ='Your Converted Weight in U.S. Standard is: ' + con1Rounded + " lbs";
  
    document.getElementById('conversion2').innerHTML = 'Your Converted Hieght in U.S. Standard is: ' + con2 + " inches " + "or " + feet + "' " + inches + '"';
  
    //if inputs are left blank
    if(isNaN(bmiRounded))
    {
        document.getElementById('yourBMI').innerHTML = "We need your measurements to calculate your BMI";
  
        document.getElementById('conversion1').innerHTML="Sorry, we need your weight.";
  
        document.getElementById('conversion2').innerHTML="We will also need your height."
    }
  
    if(isNaN(bmiMetric)) {
        document.getElementById('yourBMI').innerHTML = "We need your measurements to calculate your BMI";
  
        document.getElementById('conversion1').innerHTML="Sorry, we need your weight.";
    }
  
    //additional information
    console.log('You entered measurements based on the metric measurement system.')
    console.log('Your BMI: ' + bmiRounded)
    console.log('Your Weight in pounds: ' + con1 + ' lbs')
    console.log('Your Rounded Weight in pounds: ' + con1Rounded + ' lbs')
    console.log('Your Converted Hieght in Inches: ' + con3 + ' in.')
    console.log('Your Rounded Hieght in Inches: ' + con2 + ' in.') 
    console.log('Your Converted Hieght Converted height in feet: ' + feet + "' " + inches + '"')
  }
  
  //US standard for BMI Cal
  function calUs() {
    let feet = document.getElementById('feet').value;
    let inches = document.getElementById('inches').value;
  
    var usValue1 = document.getElementById('lbs').value;
    
    //calculation to get total inches
    var usValue2 = (12 * feet) + parseInt(inches);
    
    //calcualtion to get bmi
    var usValue4 = (parseInt(usValue1) * 703) / (Math.pow(usValue2, 2));
    //round bmi
    var usValue5 = (usValue4).toFixed(0); 
  
    //For converting to meteric system
    //convert lbs to kg
    var usCon1 = (usValue1 / 2.2).toFixed(0);
    //convert in to cm rounded
    var usCon2 = (usValue2 * 2.54).toFixed(0);
  
    document.getElementById('yourUsBMI').innerHTML = "Your BMI: " + usValue5;
  
    document.getElementById('conversion1Us').innerHTML = 'Your converted weight in the Metric System is: ' + usCon1 + ' kg'
  
    document.getElementById('conversion2Us').innerHTML = 'Your converted height in the Metric System is: ' + usCon2 + ' cm';
  
    //if inputs are left blank
    if (isNaN(usValue4)) {
        document.getElementById('yourUsBMI').innerHTML = "We need your measurements to calculate your BMI";
  
        document.getElementById('conversion1Us').innerHTML = "Sorry, we need you weight"
  
        document.getElementById('conversion2Us').innerHTML = "We also need your height in feet."
    }
  
    //additional information
    console.log('You entered measurements based on the U.S. Standard measurement system.');
    console.log('Your BMI is: ' + usValue5 );
    console.log('Your height in total in inches: ' + usValue2 + ' inches');
    console.log('Your weight in kilograms: ' + usCon1 + ' kg')
    console.log('Your height in centimeters: ' + usCon2 +' cm')
  }
  
  