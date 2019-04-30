var paintBucket = document.getElementById("paint-bucket");
var choseColor = document.getElementById("chose-color");
var move = document.getElementById("move");
var transform = document.getElementById("transform");
var currentColorIcon = document.getElementById("cur");
var previousColorIcon = document.getElementById("prev");

var currentColor, state, tempColor;
choseColorStatus = 0;
paintBucketStatus = 0;
transformStatus = 0;
moveStatus = 0;

// Ивенты на кнопке Paint bucket
paintBucket.onclick = function() {
    if (paintBucketStatus < 1) {
        paintBucketStatus++;
        state = 'paintBucket';
        paintBucket.style.backgroundColor = "gray"
        paintBucket.style.fontSize = "14pt"
    } else {
        paintBucketStatus = 0;
        paintBucket.style.backgroundColor = "rgb(50, 50, 50)";
        paintBucket.style.fontSize = "11pt"
        state = 0;
    }
}

// Ивенты на кнопке Chose color
choseColor.onclick = function() {
    state = 'choseColor';
    if (choseColorStatus < 1) {
        choseColorStatus++;
        choseColor.style.backgroundColor = "gray"
        choseColor.style.width = "590px";
        choseColor.style.fontSize = "14pt"
    } else {
        choseColorStatus = 0;
        choseColor.style.backgroundColor = "rgb(50, 50, 50)";
        choseColor.style.fontSize = "11pt"
        choseColor.style.width = "228px";
    }
    
}

// Ивенты на кнопке Move
move.onclick = function() {
    if (moveStatus < 1) {
        moveStatus++;
        state = 'move';
        move.style.backgroundColor = "gray"
        move.style.fontSize = "14pt"
    } else {
        moveStatus = 0;
        move.style.backgroundColor = "rgb(50, 50, 50)";
        move.style.fontSize = "11pt"
        state = 0;
    }
}

// Ивенты на кнопке Transform
transform.onclick = function() {
    if (transformStatus < 1) {
        transformStatus++;
        state = 'transform';
        transform.style.backgroundColor = "gray"
        transform.style.fontSize = "14pt"
    } else {
        transformStatus = 0;
        transform.style.backgroundColor = "rgb(50, 50, 50)";
        transform.style.fontSize = "11pt"
        state = 0;
    }
}

// Присвоение ивентов для кнопок палитры и предыдущего цветов
var elements = document.querySelectorAll(".colors");
for (var i = 0; i < elements.length; i++) {
    elements[i].onclick = function(event) {
        currentColor = getComputedStyle(event.currentTarget).backgroundColor;
        tempColor = cur.style.backgroundColor;
        cur.style.backgroundColor = currentColor;
        prev.style.backgroundColor = tempColor;
    }
}


var item1 = document.getElementById("item-1");
var item2 = document.getElementById("item-2");
var item3 = document.getElementById("item-3");
var item4 = document.getElementById("item-4");
var item5 = document.getElementById("item-5");
var item6 = document.getElementById("item-6");
var item7 = document.getElementById("item-7");
var item8 = document.getElementById("item-8");
var item9 = document.getElementById("item-9");

// Присвоение ивентов на 9 элеентов канваса
var elements = document.querySelectorAll(".items");
for (var i = 0; i < elements.length; i++) {
    elements[i].onclick = function(event) {
        if (paintBucketStatus == 1) {
            paintBucketFunction(event.target);
        } 
        if (transformStatus == 1) {
            transformFunction(event.target);
        }
    }
}









function paintBucketFunction(item) {
    item.style.backgroundColor = currentColor;
}
function transformFunction(item) {
    if ( i < 1 ) {
        item.style.borderRadius = "90%";
        i++;
    } else if ( i < 2 ) {
        item.style.borderRadius = "0%";
        item.style.transform = "rotate(-45deg)"
        item.style.width = "176px";
        item.style.height = "176px";
        item.style.margin = " 34px";
        i++;
    } else {
        item.style.transform = "rotate(0deg)"
        item.style.width = "234px";    
        item.style.height = "234px";
        item.style.margin = "5px";
        i = 0;
    }
}





// Присвоение ивента на кнопки T/t
document.addEventListener('keypress', (event) => {
    const keyName = event.key;
    if (keyName == 't' || keyName == 'T') {
        if (transformStatus < 1) {
            transformStatus++;
            state = 'transform';
            transform.style.backgroundColor = "gray"
            transform.style.fontSize = "14pt"
        } else {
            transformStatus = 0;
            transform.style.backgroundColor = "rgb(50, 50, 50)";
            transform.style.fontSize = "11pt"
            state = 0;
        };
    }
  });

