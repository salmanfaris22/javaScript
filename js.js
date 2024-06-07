var patern =""
var n=5

for(var i=1;i<=n;i++){
  for(var k=1;k<=i;k++){
    patern +=" "
   }
   for(var j=1;j<=(n-i)*2+1;j++){
    if(i==1 || j==1|| j== (n-i)*2+1){
    patern+="*"
    }else{
      patern+=" "
    }
     }
  


    patern +="\n"
}
console.log(patern)