$(document).ready(function() {
	$('.hed_btn').click(function(event) {
		$('.headline_container').toggleClass('fish')
	});
});



const faqs = document.querySelectorAll(".faq_questions");
faqs.forEach(faq_questions => {
	faq_questions.addEventListener("click", () =>{
		faq_questions.classList.toggle("active");
	})
})




$(document).ready(function() {
  $('.btn_main').click(function(event) {
    $('.modal').toggleClass('modal_visible')
  });
});
$(document).ready(function() {
  $('.close_icon').click(function(event) {
    $('.modal').removeClass('modal_visible')
  });
});



$(document).ready(function() {
  $('.burger').click(function(event) {
    $('.header_navigation').toggleClass('flex_display')
  });
});












    // $(window).scroll(function() {
    //     if ($(this).scrollTop() > 100){
            // jQuery('header').addClass("smoled");
            // jQuery('.header_container-navigation').addClass("smoled");
    //     }else{
            // jQuery('header').removeClass("smoled");
            // jQuery('.header_container-navigation').removeClass("smoled");
    //     }
    // });



var previousPosition = window.pageYOffset || document.documentElement.scrollTop;
window.onscroll = function() {
  var currentPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (previousPosition < currentPosition) {
    jQuery('header').addClass("smoled");
    jQuery('.header_container-navigation').addClass("smoled");
    jQuery('.header_navigation').addClass("header_navigation_margin");
  } else {
    jQuery('header').removeClass("smoled");
    jQuery('.header_container-navigation').removeClass("smoled");
    jQuery('.header_navigation').removeClass("header_navigation_margin");
  }

  previousPosition = currentPosition;
};


  


// window.onscroll = function() {scrollFunction()};
// function scrollFunction(){
//   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//     document.getElementById("navbar").style.padding = "30px 10px";
//     document.getElementById("logo").style.fontSize = "25px";
//   } else {
//     document.getElementById("navbar").style.padding = "80px 10px";
//     document.getElementById("logo").style.fontSize = "35px";
//   }




