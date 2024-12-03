$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    //slide up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // slide show script
    $('.slideshow > div').hide();

    setInterval(function(){ //SetInterval for setting duration of slideshow effects 
       $('.slideshow > div:first')
       .fadeOut(1000) // 1000 mili secon
       .next()
       .fadeIn(1000)
       .end() //end of slide show effects
       .appendTo('.slideshow'); //continuously running the slideshow
    }, 4000)

    // carousel script
   /* $('.main-carousel').flickity({
        // options
        cellAlign: 'left',
        wrapAround:true,
        freeScroll: true
      });*/

    
   

});

/*const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");

let formStepsNum = 0;

nextBtns.forEach((btn) => {
   btn.addEventListener("click", () => {
       formStepsNum++;
       updateFormSteps();
   });
});

function updateFormSteps(){
    formSteps[formStepsNum].classList.add("form-step-active");
}*/