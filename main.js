
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";

}
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    
  }
 
  let valueCount = document.querySelectorAll(".item-count");

const plusBtn = document.getElementById("plus");
window.plus = (e)=>{

 
   
  
  

    const addOne = Number(valueCount[1].innerHTML) + 1 ;
    valueCount[1].innerHTML = addOne;
 
  
  

  

}



window.minus = (e) =>{


 
   if (Number(valueCount[1].innerHTML)> 0 ){ const minusOne = Number(valueCount[1].innerHTML) - 1 ;
    
    valueCount[1].innerHTML = minusOne;
   }
  }




valueCount.forEach((count) => {
       
});


const addToCart = document.querySelector(".add-to-card");
addToCart.addEventListener("click" , ()=>{
  if (Number(valueCount[1].innerHTML)> 0 ){
  document.querySelector(".count-div-cart").style.display = "flex";
  if (document.querySelector(".cart").style.display = "block"){
  document.querySelector(".cart-items").style.display= "block"
}
}
  valueCount[0].innerHTML = valueCount[1].innerHTML;
  valueCount[2].innerHTML = valueCount[1].innerHTML;

  const overAllPrice = document.querySelector(".overall-price");
  overAllPrice.innerHTML = 125 * valueCount[2].innerHTML + ".00 $";
  
})

const cart1 = document.getElementById("icon-cart");
cart1.addEventListener("click", ()=>{
 const cart = document.querySelector(".cart");
 
  const cartItems= document.querySelector(".cart-items");
  if( cart.style.display  === "" && cartItems.style.display  === "" ){
  
    cart.style.display  = "block" 
    if (+valueCount[2].innerHTML > 0){
    cartItems.style.display = "block"
  }
  }else{
    cart.style.display  = "" 
    cartItems.style.display = ""

  }
})

const deleteBtn = document.getElementById("trash");
deleteBtn.addEventListener("click",()=>{
  document.querySelector(".cart-items").style.display = "none";
  document.querySelector(".count-div-cart").innerHTML = "0";
})
const images = document.querySelector(".image");


const rightArrow = document.querySelector(".right-arrow");
rightArrow.addEventListener("click", ()=>{

  
  let number = document.querySelector(".image").src.length-5;
 let imgIndex= Number((document.querySelector(".image").src[number]))+1;
 if (imgIndex === 4){
  imgIndex = 1;
 }
 images.src =` ./images/image-product-${(imgIndex) }.jpg `
})

const leftArrow = document.querySelector(".left-arrow");
leftArrow.addEventListener("click", ()=>{
  let number = document.querySelector(".image").src.length-5;
 let imgIndex= Number((document.querySelector(".image").src[number]))-1;
 if (Number((document.querySelector(".image").src[number])) === 1){
 imgIndex = 4 
 }else{
  imgIndex = Number((document.querySelector(".image").src[number]))-1; ;
 }
 images.src =` ./images/image-product-${(imgIndex) }.jpg `
})


const lilImage = document.querySelectorAll(".lil-image");
for (let i = 0; i < lilImage.length; i++) {
  lilImage[i].addEventListener("click", function(event) {
    images.src =` ./images/image-product-${(i + 1) }.jpg `
  });
}


const zoomImg = document.querySelector('.image-content')
const background = document.querySelector(".background");
zoomImg.addEventListener("click",()=>{
    background.style.display = "flex";
})

const closeIt = document.getElementById("closeit")
closeIt.addEventListener("click", ()=>{
  background.style.display ="none";
})
const images1 = document.querySelector(".bgd-image");
const lilImage1 = document.querySelectorAll(".lil-image1");
for (let i = 0; i < lilImage1.length; i++) {
  lilImage1[i].addEventListener("click", function(event) {
    images1.src =` ./images/image-product-${(i + 1) }.jpg `
  });
}


const rightArrow1 = document.querySelector(".right-arrow1");
rightArrow1.addEventListener("click", ()=>{

  
  let number = document.querySelector(".bgd-image").src.length-5;
 
 let imgIndex= Number((document.querySelector(".bgd-image").src[number]))+1;

 if (imgIndex === 4){
  imgIndex = 1;
 }
 images1.src =` ./images/image-product-${(imgIndex) }.jpg `
})

const leftArrow1 = document.querySelector(".left-arrow1");
leftArrow1.addEventListener("click", ()=>{
  let number = document.querySelector(".bgd-image").src.length-5;
 let imgIndex= Number((document.querySelector(".bgd-image").src[number]))-1;
 if (Number((document.querySelector(".bgd-image").src[number])) === 1){
 imgIndex = 4 
 }else{
  imgIndex = Number((document.querySelector(".bgd-image").src[number]))-1; ;
 }
 images1.src =` ./images/image-product-${(imgIndex) }.jpg `
})
