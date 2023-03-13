/*
If you want to build something using a Raspberry Pi, you'll probably use resistors. 
For this exercise, you need to know two things about them:

Each resistor has a resistance value.
Resistors are small - so small in fact that if you printed the resistance value on them, it would be hard to read.
To get around this problem, manufacturers print color-coded bands onto the resistors to denote their resistance values. 
Each band has a position and a numeric value.

The first 2 bands of a resistor have a simple encoding scheme: each color maps to a single number. 
For example, if they printed a brown band (value 1) followed by a green band (value 5), it would translate to the number 15.

In this exercise you are going to create a helpful program so that you don't have to remember the values of the bands. 
The program will take color names as input and output a two digit number, even if the input is more than two colors!
*/

const decodedValue = (colors) => {
  const bandsArr = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white']
  const band1 = bandsArr.indexOf(colors[0]).toString()
  const band2 = bandsArr.indexOf(colors[1]).toString()
  return +(band1 + band2)
}
