let mood = 'sleepy';
let tirednessLevel = 6;

if(mood === 'sleepy' && tirednessLevel > 8){
  console.log('time to sleep');
}else{
  console.log('not bed time yet');
}


if(mood === 'sleepy' || tirednessLevel > 8){
  console.log('time to sleep');
}else{
  console.log('not bed time yet');
}

if(mood === 'sleepy' && !tirednessLevel > 5){
  console.log('time to sleep');
}else{
  console.log('not bed time yet');
}

/*
There are three logical operators:
the and operator (&&)
the or operator (||)
the not operator, otherwise known as the bang operator (!)
*/
