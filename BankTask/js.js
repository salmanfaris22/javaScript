let balance = 0


document.getElementById('depo').style = "display:none"
 document.getElementById('wid').style = "display:none"


function deposit() {
    let deposit = document.getElementById('deposit')
    let depo = document.getElementById('depo').value
    depo = Number(depo)
   
    if (!isNaN(depo) && depo > 0) {
        balance += depo;
      
        document.getElementById('depo').value = "";
        alert(`Thanks For deposit 
            deposited ammount : ${depo}
            `)
       
    } else if(isNaN(depo)){
        alert('Please enter a valid deposit amount');
        document.getElementById('depo').value = "";
    }

}

function widow() {
    let widrow = document.getElementById('widrow')
    let wid = document.getElementById('wid').value
    wid = Number(wid)

    if (!isNaN(wid) && wid > 0 && balance>wid) {
        alert(`Thanks For widrow 
            widrow ammount : ${wid}
            `)
        balance -= wid
        document.getElementById("wid").value = "";
    }else if(isNaN(wid)){
        alert(`
            Please enter a valid deposit amount
            pleas cheack your bacnk Balance
            `);
        
        document.getElementById("wid").value = "";
    }
}

function cheackBalance() {
    console.log("current balacnce id :" + balance)
    document.getElementById("bankBalance").innerHTML="Your Balace Is : "+balance;
    
}




//open Clode Input Box{}


var depoOpen= 3

function displayInputDepo(){

    if(depoOpen==2){
        document.getElementById('depo').style = "display:none"
        
        depoOpen=3  
    }else{
         document.getElementById('depo').style = "display:block"
          
         depoOpen=2
    }
    
}

var widOpen =3

function displayInputWid(){

    if(widOpen==2){
        document.getElementById('wid').style = "display:none"
        
        widOpen=3  
    }else{
         document.getElementById('wid').style = "display:block"
          
         widOpen=2
    }
    
}
