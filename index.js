arrA = [1,1,2,2,3,3,4]

//1how many time only only num 1 appear on array
// var count = 0
// for(i=0; i<arrA.length; i++){
// if(arrA[i] == 1){
// count++
// }
// }
// document.getElementById('show').innerText = ' '+ count
// document.getElementById('showStyle').innerHTML =  '<b>' + count + '</b>'

//2 how many match on all number
var number = []// what number already count
for (j=0; j<arrA.length;j++){
var num = arrA[j]

var count = 0
for(i=0; i<arrA.length; i++){
if(arrA[i] == num){
count++
}
}

if (number.indexOf(num)== -1){
    document.getElementById('show').innerText += ' '+ count
    document.getElementById('showStyle').innerHTML +=  '<b>' + count + '</b>'
    number.push(num)
}

}
