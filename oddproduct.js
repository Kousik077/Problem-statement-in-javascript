let m=5;
let n=10;
if(m>n){
    console.log(-1);
}
let prod=1;
for(let i=m;i<=n;i++){
    if(i%2!=0){
        prod*=i;
    }
}
console.log(prod);