str = "Bridgeon is good"

arr =str.split(" ")
str2= 'Bridgeon'
c="Bridgeon not font"
for(i=0;i<arr.length;i++){
    if(arr[i] == str2){
       c=i
    }

}
console.log("I found Bridgeon at " + (c+1))