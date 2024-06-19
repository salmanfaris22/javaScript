let a = [1, 2, 1, 5, 1];

for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
        if (a[i] === a[j]) {
            if(a[i]==a[0]){
                a[i] = 0; 
            }else{
                a[j]=0
            }
            a[i]=0
            
        }
    }
}

console.log(a); 