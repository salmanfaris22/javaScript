
let r=''



function reavers(s){

    for(let i=s.length-1;i>=0;i--){
        r += s[i]
      }
     return r; 
}


reavers(prompt("enter the string"))
console.log(r)