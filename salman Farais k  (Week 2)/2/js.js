function middleChar(str){
   b=str.length
   var c =0
   var p = ""
   if(b%2 ==0){
    p+= str[b/2-1]
    p+=str[b/2]
     return p
    
   }else{
    c=b-1
    return str[c/2]
   }
}

console.log(middleChar("ABC"))