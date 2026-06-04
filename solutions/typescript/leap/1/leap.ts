export function isLeap(year: number) {
  
  let year400: number = year / 400;
  let year100: number = year / 100;
  let year4: number = year / 4;

  if ((Number.isInteger(year400)) == true ){
    return (Number.isInteger(year400));
  }
  else if ((Number.isInteger(year100)) == true ){
    return !(Number.isInteger(year100));
  }
  else{
    return (Number.isInteger(year4));
  }

}
