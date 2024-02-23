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
var pair = 0
var number = []// what number already countn but not include on display
for (j=0; j<arrA.length;j++){
var num = arrA[j]

var count = 0
for(i=0; i<arrA.length; i++){
if(arrA[i] == num){
count++
}
}
//below we donot count the same digit again
//line 26 check whatever repeat donot show again
//index of if find repeat put in number array-- if not find repeat -1
if (number.indexOf(num)== -1){
    document.getElementById('show').innerText += 'Number: '+ num+' repeat '+ count + 'time,'
    document.getElementById('showStyle').innerHTML +=  '<b>'+ num+' , ' + count+ ' , ' + '</b>'
    number.push(num)
    // push number already count in array line 14
pair += Math.floor(count/2)// how may pair is match

}

}
document.getElementById('pair').innerHTML = "pair of socks = " + pair