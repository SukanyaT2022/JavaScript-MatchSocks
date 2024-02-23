arr2 = [1,1,1,2,2,2,2,3,3,3,3,3,4,5]
arr3 =[6,7,8,9,10]

//how many time of number one
let count = 0
for (i=0; i<arr2.length; i++){
    if (arr2[i]==1){
count++
    }
}
document.getElementById('showIndex2').innerText = ' ' + count

//connect array
let mergeArrray = [...arr2,...arr3]
document.getElementById('merge').innerText = mergeArrray

// how many time each number match

for(j=0;j<arr2.length;j++){
    let num = arr2[j]

var count2 = 0
for(i=0;i<arr2.length;i++){
if (arr2[i]==num){
    count2++
}
}



}