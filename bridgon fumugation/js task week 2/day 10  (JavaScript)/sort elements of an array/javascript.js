let n = prompt("How many elment the array")
let arr=[]


for(let i=0;i<n;i++){
  let number= prompt(`enter the number ${i+1} position`)
  arr[i]=Number(number)
}


for(let i=0;i<n;i++){
   for(j=i+1;j<=n;j++){
        if(arr[i]<arr[j]){
            let temp = arr[i];
            arr[i]=arr[j]
            arr[j]=temp
        }
   }
}

console.log("sort elements of an array in descending order " +arr)