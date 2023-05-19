
const running =(num)=>{

for(let i =0;i<num.length;i++){
  num[i]=num[i-1]+num[i];
}return num;
}
