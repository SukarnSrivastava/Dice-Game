function dice(){
    let randomNumber1 = Math.floor(Math.random()*6) + 1;
let randomNumber2 = Math.floor(Math.random()*6) + 1;

let randomImage1 = "/dice_img/dice" + randomNumber1 + ".png"
let image1 = document.getElementById("img1").setAttribute("src", randomImage1)

let randomImage2 = "/dice_img/dice" + randomNumber2 + ".png"
let image2 = document.getElementById("img2").setAttribute("src", randomImage2)

console.log(randomNumber1,randomNumber2);
}
let button = document.getElementsByClassName("btn")[0];
button.addEventListener(("click"), e => dice());