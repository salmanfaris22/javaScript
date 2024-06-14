const arr = ["salman","faris","from","indai"]


arr.forEach(upperCase)
x =arr.forEach(display)

function upperCase(element ,index, arr){
    return arr[index] = element.charAt(0).toUpperCase()  + element.slice(1)
}

function display(element){
  return console.log(element)
}


console.log()