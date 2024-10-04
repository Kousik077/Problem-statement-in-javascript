let arr=[10,9,0,7,6,4,0,2,0,1];
let arr1= new Array(arr.length).fill(0);

let j=0;
let count=0;
for(let i=0;i<arr.length;i++){
if(arr[i]!=0){
    arr1[j]=arr[i];
    j=j+1;
}else{count++;
}}console.log(count);
