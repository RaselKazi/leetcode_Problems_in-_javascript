///1480 running sum 

const running =(num)=>{

    for(let i =1;i<num.length;i++){
      num[i]=num[i-1]+num[i];
    }return num;
    }
    