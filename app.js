// https://www.omnicalculator.com/construction/ft2-yd3

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const volumeRadio = document.getElementById('volumeRadio');
const areaRadio = document.getElementById('areaRadio');
const heightdepthRadio = document.getElementById('heightdepthRadio');

let volume;
let area = v1;
let heightdepth = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

volumeRadio.addEventListener('click', function() {
  variable1.textContent = 'Area';
  variable2.textContent = 'Height/depth';
  area = v1;
  heightdepth = v2;
  result.textContent = '';
});

areaRadio.addEventListener('click', function() {
  variable1.textContent = 'Volume';
  variable2.textContent = 'Height/depth';
  volume = v1;
  heightdepth = v2;
  result.textContent = '';
});

heightdepthRadio.addEventListener('click', function() {
  variable1.textContent = 'Volume';
  variable2.textContent = 'Area';
  volume = v1;
  area = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(volumeRadio.checked)
    result.textContent = `Volume = ${computevolume().toFixed(2)}`;

  else if(areaRadio.checked)
    result.textContent = `Area = ${computearea().toFixed(2)}`;

  else if(heightdepthRadio.checked)
    result.textContent = `Height/depth = ${computeheightdepth().toFixed(2)}`;
})

// calculation

// Volume = Area * depth

// area = ft²
// Height/depth = ft
// Volume = cu yd

function computevolume() {
  return (Number(area.value) * Number(heightdepth.value)) / 27;
}

function computearea() {
  return (Number(volume.value) * 27) / Number(heightdepth.value);
}

function computeheightdepth() {
  return (Number(volume.value) * 27) / Number(area.value);
}