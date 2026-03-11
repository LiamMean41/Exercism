export function isLeap(year: number) {
  
  if ((Number.isInteger(year / 400)) == true ){
    return (Number.isInteger(year / 400));
  }
  else if ((Number.isInteger(year / 100)) == true ){
    return !(Number.isInteger(year / 100));
  }
  else{
    return (Number.isInteger(year / 4));
  }

}
