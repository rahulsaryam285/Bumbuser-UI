//  Text Fade-in-up
const appearOptions = {
  threshold: 1,
  rootMargin: "0px 0px -50px 0px",
};
const fader = document.querySelectorAll(".fade-in");
const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);
fader.forEach((faders) => {
  appearOnScroll.observe(faders);
});




// Background Color
function changBg(){
  let a  = window.scrollY;
  if (a >= 710 && a <= 1890){
    document.body.classList.add("bg-color");

    document.querySelector("#p-same-1").classList.add("one-p")
    document.querySelector(".buser").classList.add("one-p");
    document.querySelector("#p-same-2").classList.add("one-p")
    document.querySelector("#p-same-3").classList.add("one-p")
    document.querySelector("#p-same-4").classList.add("one-p")
    document.querySelector("#p-same-5").classList.add("one-p")
    document.querySelector("#p-same-6").classList.add("one-p")
    document.querySelector("#p-same-7").classList.add("one-p")
    
    document.querySelector(".data-h1-3").classList.add("one-p");
    document.querySelector(".best-p").classList.add("two-p");
    document.querySelector(".list").classList.add("list-li");
    document.querySelector("#btn-black").classList.add("list-again-btn");
    document.querySelector("#btn-black-1").classList.add("list-again-btn");
  

    document.getElementById("time-id-1").classList.add("time-1-again");
    document.getElementById("time-id-2").classList.add("time-1-again");
    document.querySelector(".time-1-2").classList.add("time-1-again");

    document.getElementById("time-id-3").classList.add("time-1-again");
    document.getElementById("time-id-4").classList.add("time-1-again");
    document.querySelector(".time-2").classList.add("time-1-again");

    document.getElementById("time-id-5").classList.add("time-1-again");
    document.getElementById("time-id-6").classList.add("time-1-again");
    document.querySelector("#time-2-id").classList.add("time-1-again");

    document.querySelector(".card-p-1").classList.add("time-1-again");

    document.querySelector("#foter-again-1").classList.add("time-1-again");
    document.querySelector("#foter-again-2").classList.add("time-1-again");
    document.querySelector("#foter-again-3").classList.add("time-1-again");
    document.querySelector("#foter-again-4").classList.add("time-1-again");
    document.querySelector("#foter-again-5").classList.add("time-1-again");
    document.querySelector("#foter-again-6").classList.add("time-1-again");
    document.querySelector("#foter-again-7").classList.add("time-1-again");
    document.querySelector("#foter-again-8").classList.add("time-1-again");

  } else{
    document.body.classList.remove("bg-color");

    document.querySelector("#p-same-1").classList.remove("one-p")
    document.querySelector(".buser").classList.remove("one-p");
    document.querySelector("#p-same-2").classList.remove("one-p")
    document.querySelector("#p-same-3").classList.remove("one-p")
    document.querySelector("#p-same-4").classList.remove("one-p")
    document.querySelector("#p-same-5").classList.remove("one-p")
    document.querySelector("#p-same-6").classList.remove("one-p")
    document.querySelector("#p-same-7").classList.remove("one-p")

    document.querySelector(".data-h1-3").classList.remove("one-p");
    document.querySelector(".best-p").classList.remove("two-p");
    document.querySelector(".list").classList.remove("list-li")
    document.querySelector("#foter-again-1").classList.remove("time-1-again");
    document.querySelector("#foter-again-2").classList.remove("time-1-again");
    document.querySelector("#foter-again-3").classList.remove("time-1-again");
    document.querySelector("#foter-again-4").classList.remove("time-1-again");
    document.querySelector("#foter-again-5").classList.remove("time-1-again");
    document.querySelector("#foter-again-6").classList.remove("time-1-again");
    document.querySelector("#foter-again-7").classList.remove("time-1-again");
    document.querySelector("#foter-again-8").classList.remove("time-1-again");
  }
}


window.addEventListener("scroll", changBg);

$(document).ready(function () {
  $("#Inovation-data-1").mouseenter(function () {
    $("#Inovation-p-1").css({"padding-top":"5px","transition":"0.5s","opacity":"0.6"});
  });

  $("#Inovation-data-1").mouseleave(function () {
    $("#Inovation-p-1").css({"padding-top":"30px","transition":"0.5s","opacity": "1"});
  });

  $("#Inovation-data-2").mouseenter(function () {
    $("#Inovation-p-2").css({"padding-top":"5px","transition":"0.5s","opacity":"0.6"});
  });

  $("#Inovation-data-2").mouseleave(function () {
    $("#Inovation-p-2").css({"padding-top":"30px","transition":"0.5s","opacity": "1"});
  });

  $("#Inovation-data-3").mouseenter(function () {
    $("#Inovation-p-3").css({"padding-top":"5px","transition":"0.5s","opacity":"0.6"});
  });

  $("#Inovation-data-3").mouseleave(function () {
    $("#Inovation-p-3").css({"padding-top":"30px","transition":"0.5s","opacity": "1"});
  });
});



// Card Slide
function slide (direction){
  let scollCompleted = 0;
  let slideLet = setInterval(() => {
    if (direction == "left"){
      let d = document.getElementById("container").scrollLeft -=40;
      if (d == 12){
        document.querySelector(".prev").style.opacity = 0.3;
      }
      document.querySelector(".next").style.opacity = 1;
  
    } else {
      let a = document.getElementById("container").scrollLeft +=40; 
      if (a == 1840){
        document.querySelector(".next").style.opacity = 0.3;
      }
      document.querySelector(".prev").style.opacity = 1;
    }
    scollCompleted +=10;
    if (scollCompleted >=100){
      window.clearInterval(slideLet);
    }
  }, 40);
}


// Large Image Slide
function move (direction){
  let scollCompleted = 0;
  let slideLet = setInterval(() => {
    if (direction == "left"){
      let c =  document.getElementById("card-girl").scrollLeft -=40;
      if(c == 9){
        document.querySelector(".Previous-img").style.opacity = 0.3;
      }
      console.log(c)
      document.querySelector(".Next-img").style.opacity = 1;
    } else {
      let b = document.getElementById("card-girl").scrollLeft +=40;
      document.querySelector(".Previous-img").style.opacity = 1;
      if (b == 1680){
        document.querySelector(".Next-img").style.opacity = 0.3;
      }
    }
    
    scollCompleted +=10;
    if (scollCompleted >=210){
      window.clearInterval(slideLet);
    }
  }, 40); 

}



// Progress Bar
var totalQuestions = 66.67;
var currentQuestion = 33.33;
var $progressbar = $("#myBar");
$(document).ready(function(){
  $progressbar.css("width",`${currentQuestion}%`)
  $("#main-btn").on("click", function(){
    if (currentQuestion >= totalQuestions){ return; }
    currentQuestion +=33.33;
    $progressbar.css("width",`${currentQuestion}%`)
    
  });
  
  $("#main-btn-1").on("click", function(){
    if (currentQuestion <= 33.33){ return; }
    currentQuestion -=33.33;
    $progressbar.css("width",`${currentQuestion}%`)
  });

});



(function(){
  let doc = document.documentElement;
  let wind = window;
  
  let curScroll = prevScroll = wind.scrollY || doc.scrollTop;
  let curDirection = prevDirection = 0;

  let header = document.getElementById("site-header");

  let checkScroll = function(){
    curScroll = wind.scrollY || doc.scrollTop;

    if(curScroll > prevScroll){
      // scrolled down
      curDirection = 2;
    }
    else {
      // scrolled up
      curDirection = 1;
    }

    if (curDirection !== prevDirection){
      toggleHeader();
    }

    prevDirection = curDirection;
    prevScroll = curScroll

  };

  let toggleHeader = function(){
      if (curDirection == 2){
        header.classList.add("hide");
        document.querySelector(".btn").classList.add("btn-again");
        document.querySelector(".bam-buser").classList.add("bam-buser-again")
      }
      else if (curDirection == 1){
        header.classList.remove("hide");
        document.querySelector(".btn").classList.remove("btn-again");
        document.querySelector(".bam-buser").classList.remove("bam-buser-again")
      }
  };

  window.addEventListener("scroll", checkScroll);
})();




const icon = document.querySelector(".icon");

icon.addEventListener("click", ()=>{
  icon.classList.toggle("iconClick");
})