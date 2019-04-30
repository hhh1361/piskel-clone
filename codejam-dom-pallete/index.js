var paintBucket = document.getElementById("paint-bucket");
var choseColor = document.getElementById("chose-color");
var move = document.getElementById("move");
var transform = document.getElementById("transform");
var currentColorIcon = document.getElementById("cur");
var previousColorIcon = document.getElementById("prev");

var currentColor, choseColorStatus, state, tempColor;
choseColorStatus = 0;

paintBucket.onclick = function() {
    state = 'paintBucket';
    console.log(state)
}
choseColor.onclick = function() {
    state = 'choseColor';
    if (choseColorStatus < 1) {
        choseColorStatus++;
        choseColor.style.backgroundColor = "gray"
        choseColor.style.width = "590px";
        console.log(state)
    } else {
        choseColorStatus = 0;
        choseColor.style.backgroundColor = "rgb(50, 50, 50)";
        choseColor.style.width = "228px";
    }
    
}
move.onclick = function() {
    state = 'move';
    console.log(state)
}
transform.onclick = function() {
    state = 'transform';
    console.log(state)
}

color1.onclick = function(event) {
    currentColor = getComputedStyle(event.currentTarget).backgroundColor;
    tempColor = cur.style.backgroundColor;
    cur.style.backgroundColor = currentColor;
    prev.style.backgroundColor = tempColor;
}
color2.onclick = function(event) {
    currentColor = getComputedStyle(event.currentTarget).backgroundColor;
    tempColor = cur.style.backgroundColor;
    cur.style.backgroundColor = currentColor;
    prev.style.backgroundColor = tempColor;
}
color3.onclick = function(event) {
    currentColor = getComputedStyle(event.currentTarget).backgroundColor;
    tempColor = cur.style.backgroundColor;
    cur.style.backgroundColor = currentColor;
    prev.style.backgroundColor = tempColor;
}
color4.onclick = function(event) {
    currentColor = getComputedStyle(event.currentTarget).backgroundColor;
    tempColor = cur.style.backgroundColor;
    cur.style.backgroundColor = currentColor;
    prev.style.backgroundColor = tempColor;
}
color5.onclick = function(event) {
    prev.style.backgroundColor = currentColor;
    currentColor = getComputedStyle(event.currentTarget).backgroundColor;
    cur.style.backgroundColor = currentColor;
    prev.style.backgroundColor = tempColor;
}
color6.onclick = function(event) {
    currentColor = getComputedStyle(event.currentTarget).backgroundColor;
    tempColor = cur.style.backgroundColor;
    cur.style.backgroundColor = currentColor;
    prev.style.backgroundColor = tempColor;
}
color7.onclick = function(event) {
    currentColor = getComputedStyle(event.currentTarget).backgroundColor;
    tempColor = cur.style.backgroundColor;
    cur.style.backgroundColor = currentColor;
    prev.style.backgroundColor = tempColor;
}
color8.onclick = function(event) {
    currentColor = getComputedStyle(event.currentTarget).backgroundColor;
    tempColor = cur.style.backgroundColor;
    cur.style.backgroundColor = currentColor;
    prev.style.backgroundColor = tempColor;
}
color9.onclick = function(event) {
    currentColor = getComputedStyle(event.currentTarget).backgroundColor;
    tempColor = cur.style.backgroundColor;
    cur.style.backgroundColor = currentColor;
    prev.style.backgroundColor = tempColor;
}
prev.onclick = function(event) {
    currentColor = getComputedStyle(event.currentTarget).backgroundColor;
    tempColor = cur.style.backgroundColor;
    cur.style.backgroundColor = currentColor;
    prev.style.backgroundColor = tempColor;
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
var i = 0;
item1.onclick = function(event) {
    if (state == 'paintBucket') {
        item1.style.backgroundColor = currentColor;
    } else if (state == 'transform') {
        if ( i < 1 ) {
            item1.style.borderRadius = "90%";
            i++;
        } else if ( i < 2 ) {
            item1.style.borderRadius = "0%";
            item1.style.transform = "rotate(-45deg)"
            item1.style.width = "176px";
            item1.style.height = "176px";
            item1.style.margin = " 34px";
            i++;
        } else {
            item1.style.transform = "rotate(0deg)"
            item1.style.width = "234px";    
            item1.style.height = "234px";
            item1.style.margin = "5px";
            i = 0;
        }
    }
}
item2.onclick = function(event) {
    item2.style.backgroundColor = currentColor;
}
item3.onclick = function(event) {
    item3.style.backgroundColor = currentColor;
}
item4.onclick = function(event) {
    item4.style.backgroundColor = currentColor;
}
item5.onclick = function(event) {
    item5.style.backgroundColor = currentColor;
}
item6.onclick = function(event) {
    item6.style.backgroundColor = currentColor;
}
item7.onclick = function(event) {
    item7.style.backgroundColor = currentColor;
}
item8.onclick = function(event) {
    item8.style.backgroundColor = currentColor;
}
item9.onclick = function(event) {
    item9.style.backgroundColor = currentColor;
}

//var elementList = document.querySelectorAll(".items");
//let x = 0;
//while (i < elementList.length) {
//    elementList[x].addEventListener("click", function(event) {
//        var target = event.target
//        action(target);
//        x++;
//    })
//}