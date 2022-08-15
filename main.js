
//   function myFunction() {
//     var x = document.getElementById("mySidenav");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";

}
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    
  }
 

  let image = document.querySelector(".image");

  let imageWidth = image.clientWidth
  console.log(imageWidth);

  let imageCont = document.querySelector(".images-content");
  console.log(typeof imageCont);

  let rightArrow = document.getElementById("right-arrow");
  rightArrow.addEventListener("click", function(){
    let imageCont = document.querySelector(".images-content");
    imageCont.scrollLeft -= imageWidth
    console.log("gello");
    
  })




 