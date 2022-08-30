
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
}
  valueCount[0].innerHTML = valueCount[1].innerHTML;
  valueCount[2].innerHTML = valueCount[1].innerHTML;

  const overAllPrice = document.querySelector(".overall-price");
  overAllPrice.innerHTML = 125 * valueCount[2].innerHTML + ".00 $";
  
})

const cart = document.getElementById("icon-cart");
cart.addEventListener("click", ()=>{
  document.querySelector(".cart").style.display = "block"
  document.querySelector("")
})


