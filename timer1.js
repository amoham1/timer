let user = process.argv.slice(2);
Number(user);

for(let val of user){
if (val >= 0){
  setTimeout(() => {
    process.stdout.write('The first alarm ring \x07');
  }, (val*1000)); 
}
 else {
  console.log("your input is invild only put in secs ")
}
}