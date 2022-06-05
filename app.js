MarkWeight = 78
MarkHeight = 1.69
JohnWeight = 92
JohnHeight = 1.95
MarkBMI =  MarkWeight/MarkHeight**2
JohnBMI = JohnWeight/JohnHeight**2
var MarkBiggerBMI = MarkBMI>JohnBMI
var MarkWeight; var MarkHeight; var JohnWeight; var JohnHeight; var MarkBMI; var JohnBMI;
console.log(MarkBMI, JohnBMI);
if(MarkBMI > JohnBMI){
    console.log('Mark\'s BMI is bigger than John\'s');
  }
  else {
    console.log('John\'s BMI is bigger than Mark\'s');
  }

