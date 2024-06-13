
str=""
b=1
for(i=1;i<=3;i++){
    for(k=i;k<3;k++){
        str+="  "
    }
    for(j=1;j<=i*2-1;j++){
        str+=b + " "
        b++
    }
    str+="\n"
}
console.log(str)