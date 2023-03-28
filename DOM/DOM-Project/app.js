const redColor = document.querySelector(".red");

const blackColor = document.querySelector(".black");

const imageCard = document.querySelector(".product-image");

const feedbackBtn = document.querySelector(".feedback");

const grayColor = document.querySelector("gray");

const cartButton = document.getElementById("button");

const itemTag = document.getElementsByTagName("h3")[0];

cartButton.addEventListener("click", function(){
    cartButton.style.backgroundColor = "crimson"
})

redColor.addEventListener("click", function(){
    cartButton.style.backgroundColor = "red";
    itemTag.style.backgroundColor = "red";
    imageCard.style.backgroundImage = 'url("benz-3.webp")';
});

blackColor.addEventListener("click",function(){
    cartButton.style.backgroundColor = "black";
    itemTag.style.backgroundColor = "black";
    imageCard.style.backgroundImage = 'url("benz-2.jpg")';
});

grayColor.addEventListener("click",function(){
    cartButton.style.backgroundColor = "blue";
    itemTag.style.backgroundColor = "yellow";
    imageCard.style.backgroundImage = 'url("benz-3.webp")';
})