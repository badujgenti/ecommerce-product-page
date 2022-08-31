
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
       console.log (count.innerHTML)
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


const rightArrow = document.querySelector(".right-arrow");
rightArrow.addEventListener("click", ()=>{
  const imageWidth = document.querySelector(".image").clientWidth;
  document.querySelector(".image-content").scrollLeft += imageWidth;
})

const leftArrow = document.querySelector(".left-arrow");
leftArrow.addEventListener("click", ()=>{
  const imageWidth = document.querySelector(".image").clientWidth;
  document.querySelector(".image-content").scrollLeft -= imageWidth;
})