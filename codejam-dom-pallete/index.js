const paintBucket = document.getElementById('paint-bucket');
const choseColor = document.getElementById('chose-color');
const move = document.getElementById('move');
const transform = document.getElementById('transform');

let currentColor; let state; let
  tempColor;
let choseColorStatus = 0;
let paintBucketStatus = 0;
let transformStatus = 0;
let moveStatus = 0;


// Ивенты на кнопке Paint bucket
paintBucket.onclick = function () {
  if (paintBucketStatus < 1) {
    paintBucketStatus++;
    state = 'paintBucket';
    paintBucket.style.backgroundColor = 'gray';
    paintBucket.style.fontSize = '14pt';
  } else {
    paintBucketStatus = 0;
    paintBucket.style.backgroundColor = 'rgb(50, 50, 50)';
    paintBucket.style.fontSize = '11pt';
    state = 0;
  }
};


// Ивенты на кнопке Chose color
choseColor.onclick = function () {
  state = 'choseColor';
  if (choseColorStatus < 1) {
    choseColorStatus++;
    choseColor.style.backgroundColor = 'gray';
    choseColor.style.width = '590px';
    choseColor.style.fontSize = '14pt';
  } else {
    choseColorStatus = 0;
    choseColor.style.backgroundColor = 'rgb(50, 50, 50)';
    choseColor.style.fontSize = '11pt';
    choseColor.style.width = '228px';
  }
};


// Ивенты на кнопке Move
move.onclick = function () {
  if (moveStatus < 1) {
    moveStatus++;
    state = 'move';
    move.style.backgroundColor = 'gray';
    move.style.fontSize = '14pt';
  } else {
    moveStatus = 0;
    move.style.backgroundColor = 'rgb(50, 50, 50)';
    move.style.fontSize = '11pt';
    state = 0;
  }
};


// Ивенты на кнопке Transform
transform.onclick = function () {
  if (transformStatus < 1) {
    transformStatus++;
    state = 'transform';
    transform.style.backgroundColor = 'gray';
    transform.style.fontSize = '14pt';
  } else {
    transformStatus = 0;
    transform.style.backgroundColor = 'rgb(50, 50, 50)';
    transform.style.fontSize = '11pt';
    state = 0;
  }
};


// Присвоение ивентов для кнопок палитры и предыдущего цветов
var elements = document.querySelectorAll('.colors');
for (var i = 0; i < elements.length; i++) {
  elements[i].onclick = function (event) {
    currentColor = getComputedStyle(event.target).backgroundColor;
    tempColor = cur.style.backgroundColor;
    cur.style.backgroundColor = currentColor;
    prev.style.backgroundColor = tempColor;
  };
}


// Присвоение ивентов на 9 элеентов канваса
var elements = document.querySelectorAll('.items');
for (var i = 0; i < elements.length; i++) {
  elements[i].onclick = function (event) {
    if (paintBucketStatus == 1) {
      paintBucketFunction(event.target);
    }
    if (transformStatus == 1) {
      transformFunction(event.target);
    }
    if (moveStatus == 1) {
      moveFunction(event.target);
    }
  };
}


function paintBucketFunction(item) {
  item.style.backgroundColor = currentColor;
}
function transformFunction(item) {
  if (i < 1) {
    item.style.borderRadius = '90%';
    i++;
  } else if (i < 2) {
    item.style.borderRadius = '0%';
    item.style.transform = 'rotate(-45deg)';
    item.style.width = '176px';
    item.style.height = '176px';
    item.style.margin = ' 34px';
    i++;
  } else {
    item.style.transform = 'rotate(0deg)';
    item.style.width = '234px';
    item.style.height = '234px';
    item.style.margin = '5px';
    i = 0;
  }
}




// Присвоение ивентов на кнопки
document.addEventListener('keypress', (event) => {
  const keyName = event.key;

  // Transform на кнопки T/t
  if (keyName == 't' || keyName == 'T') {
    if (transformStatus < 1) {
      transformStatus++;
      state = 'transform';
      transform.style.backgroundColor = 'gray';
      transform.style.fontSize = '14pt';
    } else {
      transformStatus = 0;
      transform.style.backgroundColor = 'rgb(50, 50, 50)';
      transform.style.fontSize = '11pt';
      state = 0;
    }
  }

  // Transform на кнопки P/p
  if (keyName == 'P' || keyName == 'p') {
    if (paintBucketStatus < 1) {
      paintBucketStatus++;
      state = 'paintBucket';
      paintBucket.style.backgroundColor = 'gray';
      paintBucket.style.fontSize = '14pt';
    } else {
      paintBucketStatus = 0;
      paintBucket.style.backgroundColor = 'rgb(50, 50, 50)';
      paintBucket.style.fontSize = '11pt';
      state = 0;
    }
  }

  // Transform на кнопки M/m
  if (keyName == 'M' || keyName == 'm') {
    if (moveStatus < 1) {
      moveStatus++;
      state = 'paintBucket';
      move.style.backgroundColor = 'gray';
      move.style.fontSize = '14pt';
    } else {
      moveStatus = 0;
      move.style.backgroundColor = 'rgb(50, 50, 50)';
      move.style.fontSize = '11pt';
      state = 0;
    }
  }
});


function moveFunction(item) {
  item.onmousedown = function (e) {

    const coords = getCoords(item);
    const shiftX = e.pageX - coords.left;
    const shiftY = e.pageY - coords.top;

    item.style.position = 'absolute';
    document.body.appendChild(item);
    moveAt(e);

    item.style.zIndex = 99;

    function moveAt(e) {
      item.style.left = `${e.pageX - shiftX}px`;
      item.style.top = `${e.pageY - shiftY}px`;
    }

    document.onmousemove = function (e) {
      moveAt(e);
    };

    item.onmouseup = function () {
      document.onmousemove = null;
      item.onmouseup = null;
    };

  };

  item.ondragstart = function () {
    return false;
  };

  function getCoords(elem) {
    const box = elem.getBoundingClientRect();
    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset,
    };
  }
}
if (foo) { console.log(foo); }
