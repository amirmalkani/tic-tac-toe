// const initialGameBoard = [
//   [null, null, null],
//   [null, null, null],
//   [null, null, null],
// ];
// console.log(initialGameBoard)
// const arr = initialGameBoard.map((col) => {
//   console.log(col);
//   return col.map((a) => {
//     return a
//   });
// });

// arr[0][0] = 1
// console.log(arr)

let a = [1,2,3];
console.log(...a)

const b = a.map((a,o)=>{
    console.log(o)
    return a*2;
})
console.log(b)

a = null;
if(a){
    console.log(a);
}else{
    console.log('n')
}