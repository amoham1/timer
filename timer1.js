let user = process.argv.slice(2);

for(let i of user){
if (i < 0){
  console.log("Input only postive numbers");
}
else if  (typeof i === "string"){
  console.log( "Input only postive numbers" );
} else {
  setTimeout(() => {
    process.stdout.write('The first alarm ring \x07');
  }, i); 
}
}