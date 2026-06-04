export function decodedResistorValue(bands: string[]){
  let multipled: number
  let finalName
  
  let color1: number = COLOR.indexOf(bands[0]);
  let color2: number = COLOR.indexOf(bands[1]);
  let color3: number = COLOR.indexOf(bands[2]);

  let number1: number = (color1 * 10) + color2;
  if(color3 < 1){
    multipled = 1;
  }
  else{
    multipled =  Math.pow(10, color3);
  }
  
  let final: number = number1 * multipled;

  if( final < 1000){
    finalName = final + ' ohms';
  }else if(final < 1000000){
    final = final / 1000;
    finalName = final + ' kiloohms'
  }
  else if( final <  1000000000){
    final = final / 1000000;
    finalName = final + ' megaohms'
  }
  else{
    final = final / 1000000000;
    finalName = final + ' gigaohms'
  }
  
  return finalName;
}


export const COLOR = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white"
];