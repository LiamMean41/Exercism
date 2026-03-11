export function decodedValue(bands: string[]) {
  let color1: number = COLOR.indexOf(bands[0]);
  let color2: number = COLOR.indexOf(bands[1]);
  let color3: number = COLOR.indexOf(bands[3]); //Just here to not get error for third band

  return (color1 * 10) + color2;
  
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