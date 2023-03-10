const colorCode = (colorName) => {
  let color 
  switch(colorName) {
     case 'black':
       color = 0
       break;
    case 'brown':
      color = 1
      break;
    case 'red':
      color = 2
      break;
    case 'orange':
      color = 3
      break;
    case 'yellow':
      color = 4
      break;
    case 'green':
      color = 5
      break;
    case 'blue':
      color = 6
      break;
    case 'violet':
      color = 7
      break;
    case 'grey':
      color = 8
      break;
    case 'white':
      color = 9
      break;
  }
  return color
};

export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]
