

const numberChecker = (arr)=>{
      return function (num) {
          if(arr.includes(num)){
                  return true;
          }
          else{
            return false;
          }
      }
}
const arr = [5,1,2,3,7,8,5,6];
const checkNum = numberChecker(arr);
console.log(checkNum(2));
console.log(checkNum(10));