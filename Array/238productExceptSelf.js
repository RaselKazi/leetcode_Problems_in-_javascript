// 238 Product except self
const  productExcept =()=>{

    const result =[1],n=nums.length;
    for (let i =1; i<n;i++){
  
      result[i]=result[i-1]*nums[i-1]
    }
    for (let i = n-1,right=1; i>=0;i--){
  
      result[i]*=right;
      right *=nums[i]
    }return result;
  }