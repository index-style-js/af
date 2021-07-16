canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
backgroundImg = "racetrack.jpg";
car1Img = "car1.png";
car1X = -5;
car1Y = 10;
car1Width = 150;
car1Height = 100;
car2Img = "car2.png";
car2X = 10;
car2Y = 100;
car2Width = 120;
car2Height = 90;
function add() {
    backgroundImgTag = new Image();
    backgroundImgTag.onload = uploadBackground;
    backgroundImgTag.src = backgroundImg;
    car1ImgTag = new Image();
    car1ImgTag.onload = uploadCar1;
    car1ImgTag.src = car1Img;
    car2ImgTag = new Image();
    car2ImgTag.onload = uploadCar2;
    car2ImgTag.src = car2Img;
}
function uploadBackground() {
    ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);
}
function uploadCar1() {
    ctx.drawImage(car1ImgTag, car1X, car1Y, car1Width, car1Height);
}
function uploadCar2() {
    ctx.drawImage(car2ImgTag, car2X, car2Y, car2Width, car2Height);
}
window.addEventListener("keydown", myKeydown);
function myKeydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == "37") {
        console.log("left");
        Car1Left();
    }
    if (keyPressed == "38") {
        console.log("up");
        Car1Up();
    }
    if (keyPressed == "39") {
        console.log("right");
        Car1Right();
    }
    if (keyPressed == "40") {
        console.log("down");
        Car1Down();
    }


    if (keyPressed == "65") {
        console.log("A");
        Car2Left();
    }
    if (keyPressed == "87") {
        console.log("W");
        Car2Up();
    }
    if (keyPressed == "68") {
        console.log("D");
        Car2Right();
    }
    if (keyPressed == "83") {
        console.log("S");
        Car2Down();
    }
}