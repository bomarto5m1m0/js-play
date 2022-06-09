// Import stylesheets
import './style.css';

//example link, Array Carousel looping % :https://benfrain.com/looping-infinitely-around-an-array-in-javascript/

// Write Javascript code!
var item = document.querySelector('.item');
var readout = document.querySelector('.readout');
var colours = [
  'EC6060',
  '4DB52E',
  '31D1B3',
  '1D9DCB',
  '1D3ACB',
  'AD70CC',
  'E84F82',
  'CB1212',
];

var count = 0;
setInterval((e) => {
  var randomNumber = Math.floor(Math.random() * 11);
  count = (count + randomNumber) % colours.length;
  var newColour = colours[count];
  readout.innerHTML = `We added <b>${randomNumber}</b>, meaning the new slot number to display is <b>${count}</b>, meaning a colour value of <b>${newColour}</b>`;
  item.style.backgroundColor = `#${newColour}`;
}, 3000);
