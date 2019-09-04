//Scroll to top Button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var upButton = document.getElementById("btnScrollToTop");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    upButton.style.display = "block";
  } else {
    upButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// function setCopyrightDate(){
//   year=new Date().getYear();
//   if (year<1900)
//     year+=1900;
//   document.getElementById("currentYear").innerHTML = year;
// }
//
// setCopyrightDate();
//
//
// function getDate(){
//   var today = new Date();
//   var year = today.getFullYear();
//   document.getElementById("currentDate").innerHTML = year;
// }
//
// getDate();
