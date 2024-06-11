str = "salman faris from azhinhilam inindia hokaya"
c=''
arr=str.split(" ")

s=str.charAt(0).toUpperCase()+str.slice(1)

for(i=0;i<arr.length;i++){
    c+= arr[i].charAt(0).toUpperCase()+ arr[i].slice(1) + " "
}
console.log(c)