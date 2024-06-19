


let n = prompt("How many elment the array")
let arr=[]


for(let i=0;i<n;i++){
  let number= prompt(`enter the number ${i+1} position`)
  arr[i]=Number(number)
}

let num = prompt ("enter the removing element the array")




let a=[]
let k=0;
for(let i=0;i<n;i++){
   if(arr[i] != num){
    a[k]=arr[i]
    k++;
   }
}
console.log(a)