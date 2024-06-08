let n = prompt("How many elment the array")
let arr=[]


for(let i=0;i<n;i++){
  let number= prompt(`enter the number ${i+1} position`)
  arr[i]=Number(number)
}




let x=0;
for(let i=0;i<6;i++){
    if(arr[i]>x){
        x=arr[i]
    }
}
console.log("the largest elements is" + x)