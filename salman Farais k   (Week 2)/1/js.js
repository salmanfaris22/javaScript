str ="aabbcc"

b=str.split("")
for(i=0;i<b.length;i++){
    for(j=i+1;j<b.length;j++){
       if(b[i]==b[j]){
        b[i] = 0
   
       }
       
    }
}
c=""
for(k=0;k<b.length;k++){
     if(b[k] != 0){
        c+=b[k]
     }
}
console.log(c)

