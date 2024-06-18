


let r=''



function reavers(s){

    for(let i=s.length-1;i>=0;i--){
        r += s[i]
      }
     if(s===r){
        console.log("its a Palindrome")
     }else{
        console.log("its Not a Palindrome")
     }
}


reavers(prompt("enter the string"))
