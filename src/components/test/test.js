
// creating 32x32/64x64/128x128 Array
let array;
function arrayCreator(n) {
  array = new Array(n);
  for (let i = 0; i < n; i++) {
    array[i] = new Array(n);
    for (let j = 0; j < n; j++) {
      array[i][j] = { color: '?' };
    }
  }
  return array[0].length;
}
test('creating array of Nth arrays', () => {
  expect(arrayCreator(32)).toBe(32);
});
test('creating array of Nth arrays', () => {
  expect(arrayCreator(128)).toBe(128);
});



function paintOver(array, y, x, colorToFill, penSize) {

  arrayCreator(4);

  for (let m = 0; m < penSize; m++) {
    for (let f = 0; f < penSize; f++) {
      array[y + m][x + f] = { color: colorToFill };
    }
  }
  return array[3][3]
}

test('Fulfilling arrays / test of pensize', () => {
  expect(paintOver(array, 0, 0, 'black', 1)).toStrictEqual( {"color": "?"});
});

test('Fulfilling arrays / test of pensize', () => {
  expect(paintOver(array, 0, 0, 'black', 4)).toStrictEqual( {"color": "black"});
});
