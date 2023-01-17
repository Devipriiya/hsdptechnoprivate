let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

var swiper = new Swiper(".course-slider", {
    spaceBetween: 20,
    grabcursor:true,
    loop:true,
   
    pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
     
    },
    768: {
      slidesPerView: 2,
      
    },
    1024: {
      slidesPerView: 3,
    
    },
  },

});
var swiper = new Swiper(".teachers-slider", {
    spaceBetween: 20,
    grabcursor:true,
    loop:true,
   
    pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
     
    },
    768: {
      slidesPerView: 2,
      
    },
    1024: {
      slidesPerView: 3,
    
    },
  },

});
var swiper = new Swiper(".reviews-slider", {
    spaceBetween: 20,
    grabCursor:true,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
       540: {
         slidesPerView: 1,
       },
       768: {
         slidesPerView: 2,
       },
       1024: {
         slidesPerView: 3,
       },
    },
 });
 function sendEmail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    number: document.getElementById("number").value,
    course: document.getElementById("course").value,
    gender: document.getElementById("gender").value,
  };

  const serviceID = "service_xe4ujtx";        
  const templateID = "template_q2co52a";

    emailjs.
    send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("number").value = "";
        document.getElementById("course").value = "";
        document.getElementById("gender").value = "";
        console.log(res);
        alert("your message sent successsfully!!");

    })
    .catch(err=>console.log(err));

}
var slideImg=document.getElementById("slideImg");
   var images=new Array(
      "images/img1.jpeg",
      // "images/img2.jpeg",
      "images/img3.jpeg",
      "images/img4.jpeg"
      
);
   var len=images.length;
   var i=0;
   function slider(){
       if(i>len-1){
         i=0;
       }
       slideImg.src=images[i];
       i++;
       setTimeout('slider()',1500);
  }