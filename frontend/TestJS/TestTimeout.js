// for (let i=0;i<=5;i++){
//     setTimeout(()=>{
//         console.log('i',i)
//     },i)
// }

for (var i = 0; i <= 5; i++) {
  setTimeout(
    (function(i) {
      return function() {
        console.log("i>>>>", i);
      };
    })(i),
    i
  );
}
