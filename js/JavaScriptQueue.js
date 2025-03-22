$(document).ready(function(){
    let boxes = document.querySelectorAll('.box');
    console.log(boxes);

    let interval;

    function changeColor() {

        let lastBoxColor = $(boxes[boxes.length - 1]).css("background-color");

        for (let index = boxes.length - 1; index > 0; index--) {
            $(boxes[index]).css("background-color", $(boxes[index - 1]).css("background-color"));
        }

        $(boxes[0]).css("background-color", lastBoxColor);
        
    }

    setInterval(changeColor,1000);
});

