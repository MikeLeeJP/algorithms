// Name
// Problem Description

const solution  = (n) => {
  if(n<=2){
    return false;
  }
  else{
    for(let i =2;i<n;i++){
      if(n%i==0){
	return false;
      }
    }
    return true;	
  }
};

module.exports = {
  solution
};

