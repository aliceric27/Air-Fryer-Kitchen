




var mySwiper = new Swiper ('.swiper', {
    autoplay:true, //自動切換slider開關
    delay:1000,//切換slider延遲
    speed:1000, 
    slidesPerView :'1',
    direction: 'horizontal', // 垂直切换选项
    effect: "cards",
    slideShadows:true,
    loop: true, // 循环模式选项
    grabCursor:true,
    freeMode: false,
    mousewheel: false,
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // 如果需要滚动条
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  })        
  
  var foodSwiper = new Swiper ('.modalswiper', {
    autoplay:false, //自動切換slider開關
     delay:1000,//切換slider延遲
    speed:500, 
    slidesPerView :'1',
    direction: 'horizontal', // 垂直切换选项
    effect: "fade",
    slideShadows:true,
    loop: false, // 循环模式选项
    grabCursor:false,
    freeMode: false,
    mousewheel: false,
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // 如果需要滚动条
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  })        


$(document).ready(function(){

    //重整後回到頂部
    
    // window.onbeforeunload = function () {
    //     window.scrollTo(0, 0);
    //   }

    $('#email').hover( function(){
        $('.tooltiptext').html('點擊複製email');
    })

    $('#email').click (function () {
        // Get the text field
        var copymail = document.getElementById("email");
      
        // Select the text field
        // copymail.select();
        // copymail.setSelectionRange(0, 99999); // For mobile devices
      
         // Copy the text inside the text field
        navigator.clipboard.writeText('johncookkitchen@gmail.com');
        $('.tooltiptext').html('<i class="fa-solid fa-check" style="color:green;"></i>已複製');
        // Alert the copied text
        // alert("Copied the text: " + 'johncookkitchen@gmail.com');
        toastr.options = {
            "closeButton": false,
            "debug": false,
            "newestOnTop": false,
            "progressBar": true,
            "positionClass": "toast-bottom-right",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "2000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
          }
        toastr["success"]("已成功複製")


    })

       window.onscroll = function() {myFunction()};
  
       function myFunction() {
         var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
         var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
         var scrolled = (winScroll / height) * 100;
         document.getElementById("myBar").style.height = scrolled + "%";
       }


       if($(window).width() > 992)
       {
           // JavaScript here 
           // 當視窗寬度大於767px時執行
           
           window.addEventListener('scroll',function(){
            // console.log(this.window.scrollY);
            let A=window.scrollY;
            $('#scrollY').text(A);
            if (A>=250){
              
               $('#logog').css('display','none');
               $('#logoa').css('display','block');
                  $('.topbtn').css('display','block');
                  $('.progress-bar').css('display','block');
                   $('.header').addClass('header-scroll');
                   $('.header-in').css('border-radius','10px');
                   
                
                if (A>=555){
                   $('.inner-box').css('display', 'flex');
                   $('.inner-box').css('opacity','1');
                   // $('.tiny-item div').css('opacity','1'); 
                   
                   // $('.tiny-item div img ').css('opacity','1'); 
                }
                if (A>=1500){
                   $('.foodbox').css('opacity','1');
                   $('.foodbox-1').css('opacity','1');
                   $('.foodimg-1').css('opacity','1');
                   $('.foodimg-1 img').css('display','block'); 
                   $('.foodtext-1').css('display','flex'); 
                }
   
                if (A>=2000){
                   $('.foodbox-2').css('opacity','1');
                   $('.foodbox-2').css('opacity','1');
                   $('.foodimg-2').css('opacity','1');
                   $('.foodimg-2 img').css('display','block'); 
                   $('.foodtext-2').css('display','flex');
                }
                if (A>=2400){
                   $('.foodbox-3').css('opacity','1');
                   $('.foodbox-3').css('opacity','1');
                   $('.foodimg-3').css('opacity','1');
                   $('.foodimg-3 img').css('display','block'); 
                   $('.foodtext-3').css('display','flex');
                }
                if (A>=3000){
                   $('.eat-show').css('opacity','1');
                   $('.eat-show div').css('display','block');
                   $('.eat-show div img').css('display','block'); 
                }
               //  if (A>=3300){
               //     $('.swiper').css('opacity','1');
               //     $('.eat-show div img').css('display','flex');
               //     $('.eat-show div img').css('opacity','1'); 
               //  }
   
                if (A>=3700){
                   $('.swiper').css('opacity','1');
                   $('.bottom').css('opacity','1'); 
                    $('.warp-box').css('display','block'); 
                   // $('.warp-box').css('display','flex'); 
                   $('.review-box').css('display','block'); 
                   // $('.eat-show div img').css('display','flex');
                   // $('.eat-show div img').css('opacity','1'); 
                }
                if (A>=2000){
                   $('.bottom').css('opacity','1'); 
                }
                
            }
            else if(A==0){
              $('.logo').css('display','block')
              $('.topbtn').css('background-color', '#ffc400db')
              $('.topbtn').css('animation','');
              $('#fire').css('animation','');
            $('#smoke').css('visibility','hidden')
             $('#logog').css('display','block');
             $('#logoa').css('display','none');
               $('.topbtn').css('display','none');
               $('.header').removeClass('header-scroll');
               $('.header-in').css('border-radius','0px');
               $('.progress-bar').css('display','none');
               $('.header-in').removeClass('shine')
               $('.header-in').css('background-color','rgba(245, 192, 68)')
               // $('.inner-box').css('opacity','0');
               // $('.inner-h1').css('opacity','0');
               
  //  console.log('removed')
            }
               
   
            else{
              //  console.log('else');
            }
        })




       } else if($(window).width() < 992){
           // JavaScript here
           // 當視窗寬度不小於767px時執行
          //  console.log('mobile');
           $('.bottom').css('opacity','1'); 
           $('#logoa').css('display','block');
           $('.topbtn').css('display','block');
           $('.inner-box').css('display', 'flex');
                   $('.inner-box').css('opacity','1');
                   $('.foodbox').css('opacity','1');
                   $('.foodbox-1').css('opacity','1');
                   $('.foodimg-1').css('opacity','1');
                   $('.foodimg-1 img').css('display','block'); 
                   $('.foodtext-1').css('display','flex'); 
                   $('.foodbox-2').css('opacity','1');
                   $('.foodbox-2').css('opacity','1');
                   $('.foodimg-2').css('opacity','1');
                   $('.foodimg-2 img').css('display','block'); 
                   $('.foodtext-2').css('display','flex');
                   $('.foodbox-3').css('opacity','1');
                   $('.foodbox-3').css('opacity','1');
                   $('.foodimg-3').css('opacity','1');
                   $('.foodimg-3 img').css('display','block'); 
                   $('.foodtext-3').css('display','flex');
                   $('.eat-show').css('opacity','1');
                   $('.eat-show div').css('display','block');
                   $('.eat-show div img').css('display','block'); 
                   $('.swiper').css('opacity','1');
                   $('.bottom').css('opacity','1'); 
                    $('.warp-box').css('display','block'); 
                   // $('.warp-box').css('display','flex'); 
                   $('.review-box').css('display','block'); 
       }


// 切換border小按鈕
$('#toolbtn').click(function(){
$('*').toggleClass('allitemborder');
})

$('.mobile-menu').click(function(){
  
  
  if($('.menu').css('display')=='none'){
    $('.menu').css('display','contents');}
else if ($('.menu').css('display')=='contens'){
  $('.menu').css('display','none');}

})





// https://www.youtube.com/watch?v=f7PgUPNKMkI&t
// 取得itemDom元素
// let btn=document.querySelectorAll('.foodimg-1');
// //使用foreach將所有結果回傳並執行函數
// btn.forEach((btn) => {
//     //監聽滑鼠移動並執行function 
//     btn.addEventListener("mousemove",function(e){
//         btn.style.transitionDelay="0";
// let position = btn.getBoundingClientRect();
//  let x=e.pageX-position.right - position.width;
//  let y=e.pageY-position.bottom - position.height;
// btn.style.transform="translate(" + x*0.1+"px,"+y*0.1+"px)";
//     });

//     btn.addEventListener("mouseout",(function(e){
//         btn.style.transform="translate(0px,0px)";

//             }));
    
// });

//使用jquery控制移入.移出變更a元素顏色

// $(function () {
// $('a').addClass('hoverlink');
// $('.item').on("mouseenter mouseleave",function(){
//     console.log('ok')
//     $(this).find('a').toggleClass('hoverlink');
// })

// $('.item').on("mouseout",function(){
//     $(this).find('a').css('color','black');
// })

// })


// 評論滑塊功能

var mySwiper = new Swiper ('.swiper', {
    autoplay:true, //自動切換slider開關
    delay:1000,//切換slider延遲
    speed:1000, 
    slidesPerView :'1',
    direction: 'horizontal', // 垂直切换选项
    effect: "cards",
    slideShadows:true,
    loop: true, // 循环模式选项
    grabCursor:true,
    freeMode: false,
    mousewheel: false,
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // 如果需要滚动条
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  })        
  

})




// var foodSwiper = new Swiper ('.modalswiper', {
//     // autoplay:true, //自動切換slider開關
//     // delay:1000,//切換slider延遲
//     speed:500, 
//     slidesPerView :'1',
//     direction: 'horizontal', // 垂直切换选项
//     effect: "fade",
//     slideShadows:true,
//     loop: false, // 循环模式选项
//     grabCursor:false,
//     freeMode: false,
//     mousewheel: false,
    
//     // 如果需要分页器
//     pagination: {
//       el: '.swiper-pagination',
//     },
    
//     // 如果需要前进后退按钮
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
    
//     // 如果需要滚动条
//     // scrollbar: {
//     //   el: '.swiper-scrollbar',
//     // },
//   })        
  



var foodimg1=document.querySelector('.foodimg-1');
var foodimg2=document.querySelector('.foodimg-2');
var foodimg3=document.querySelector('.foodimg-3');
var eatshow1=document.querySelector('.eatshow-1');
var eatshow2=document.querySelector('.eatshow-2');
var eatshow3=document.querySelector('.eatshow-3');
var chart=document.querySelector('foodChart-1');
var fmodal = document.querySelector('.modal');
var ove=document.querySelector('#overlay');
var aaa=document.querySelector('.warp-box');
// 檢測點擊所回傳的目標
// aaa.addEventListener('click',function(e){
// console.log(e.target);

// },false)

$('.close-button').on('click',function(){
    $('#food-modal-1').css("display","none");
    $('#food-modal-2').css("display","none");
    $('#food-modal-3').css("display","none");
    $('#food-modal-4').css("display","none");
    $('#food-modal-5').css("display","none");
    $('#food-modal-6').css("display","none");
    $('#modal').css("opacity","0");
    $('#modal').css("z-index","-1");
   $('#overlay').css("opacity","0");
   $('*').removeClass("lockscroll");
  //  console.log("ok");

})


window.addEventListener('click', function(e){

	if (foodimg1.contains(e.target)){
        // $('#food-modal-2').css("display","none");
        // $('#food-modal-3').css("display","none");
        // $('#food-modal-4').css("display","none");
        // $('#food-modal-5').css("display","none");
        // $('#food-modal-6').css("display","none");
        $('#food-modal-1').css("display","block");
        $('#modal').css("opacity","1");
        $('#modal').css("z-index","10");
        // $('*').addClass("lockscroll");
        $('#modal').addClass("animate__animated animate__zoomIn");
        $('#overlay').css("opacity","1");
        // console.log("ok1");
        $("#modal").on("animationend", function (){
                    $(this).removeClass("animate__animated animate__zoomIn");
                })

  } 
  
else if (foodimg2.contains(e.target)){
    // $('#food-modal-1').css("display","none");
    // $('#food-modal-3').css("display","none");
    // $('#food-modal-4').css("display","none");
    // $('#food-modal-5').css("display","none");
    // $('#food-modal-6').css("display","none");
    $('#food-modal-2').css("display","block");
    $('#modal').css("opacity","1");
    $('#modal').css("z-index","10");
    // $('*').addClass("lockscroll");
    $('#modal').addClass("animate__animated animate__zoomIn");
    $('#overlay').css("opacity","1");
    // console.log("ok1");
    $("#modal").on("animationend", function (){
                $(this).removeClass("animate__animated animate__zoomIn");
            })
}
else if (foodimg3.contains(e.target)){
    // $('#food-modal-1').css("display","none");
    // $('#food-modal-2').css("display","none");
    // $('#food-modal-4').css("display","none");
    $('#food-modal-3').css("display","block");
    $('#modal').css("opacity","1");
    $('#modal').css("z-index","10");
    // $('*').addClass("lockscroll");
    $('#modal').addClass("animate__animated animate__zoomIn");
    $('#overlay').css("opacity","1");
    // console.log("ok1");
    $("#modal").on("animationend", function (){
                $(this).removeClass("animate__animated animate__zoomIn");
            })
}

else if (eatshow1.contains(e.target)){
    // $('#food-modal-1').css("display","none");
    // $('#food-modal-2').css("display","none");
    // $('#food-modal-3').css("display","none");
    $('#food-modal-5').css("display","none");
    $('#food-modal-6').css("display","none");
    $('#food-modal-4').css("display","block");
   
    $('#modal').css("opacity","1");
    $('#modal').css("z-index","10");
    // $('*').addClass("lockscroll");
    $('#modal').addClass("animate__animated animate__zoomIn");
    $('#overlay').css("opacity","1");
    // console.log("ok1");
    $("#modal").on("animationend", function (){
                $(this).removeClass("animate__animated animate__zoomIn");
            })
}

else if (eatshow2.contains(e.target)){
    // $('#food-modal-1').css("display","none");
    // $('#food-modal-2').css("display","none");
    // $('#food-modal-3').css("display","none");
     $('#food-modal-4').css("display","none");
     $('#food-modal-6').css("display","none");
    $('#food-modal-5').css("display","block");
    
    $('#modal').css("opacity","1");
    $('#modal').css("z-index","10");
    // $('*').addClass("lockscroll");
    $('#modal').addClass("animate__animated animate__zoomIn");
    $('#overlay').css("opacity","1");
    // console.log("ok1");
    $("#modal").on("animationend", function (){
                $(this).removeClass("animate__animated animate__zoomIn");
            })
}


else if (eatshow3.contains(e.target)){
    // $('#food-modal-1').css("display","none");
    // $('#food-modal-2').css("display","none");
    // $('#food-modal-3').css("display","none");
     $('#food-modal-4').css("display","none");
     $('#food-modal-5').css("display","none");
    $('#food-modal-6').css("display","block");
    $('#modal').css("opacity","1");
    $('#modal').css("z-index","10");
    // $('*').addClass("lockscroll");
    $('#modal').addClass("animate__animated animate__zoomIn");
    $('#overlay').css("opacity","1");
    // console.log("ok1");
    $("#modal").on("animationend", function (){
                $(this).removeClass("animate__animated animate__zoomIn");
            })
}


else if(fmodal.contains(e.target)) {
    // console.log('modal')
}
  
  else{
    $('#food-modal-1').css("display","none");
    $('#food-modal-2').css("display","none");
    $('#food-modal-3').css("display","none");
    $('#food-modal-4').css("display","none");
    $('#food-modal-5').css("display","none");
    $('#food-modal-6').css("display","none");
    $('*').removeClass("lockscroll");
    $('#modal').css("opacity","0");
         $('#modal').css("z-index","-1");
        $('#overlay').css("opacity","0");
        // console.log("ok");
 } }
)



// $(".foodimg-1").on('click',function(){
//     $('#food-modal-1').css("display","block");
//     $('#modal').css("opacity","1");
//     $('#modal').css("z-index","10");
//     $('*').addClass("lockscroll");
//     $('#modal').addClass("animate__animated animate__zoomIn");
//     $('#overlay').css("opacity","1");
//     console.log("ok1");
//     $("#modal").on("animationend", function (){
//         $(this).removeClass("animate__animated animate__zoomIn");
//     })
//   })
  




//   $(document).click(function() {
     
//     if ($('#overlay').css("opacity")=="1"){
//         $('*').removeClass("lockscroll");
//     $('#modal').css("opacity","0");
//     $('#modal').css("z-index","-1");
//     $('#overlay').css("opacity","0");}
//     console.log("ok")
//   });



const labels = [
 '每日建議',
 '嘉義雞肉飯',
 '初炸橄欖油蔥雞',
 '台式花雕雞',
 '焙香胡麻雞胸',
'奶油菇菇雞'
];


const data = {
  labels: labels,
  datasets: [{
    axis:'y',
    label: '熱量(大卡)',
    backgroundColor:  [
        'rgba(212, 200, 29,0.5)',
      'rgba(255, 145, 0, 0.5)',
      'rgba(4, 104, 255, 0.5)',
      'rgba(203, 63, 242,0.5)',
      'rgba(255, 48, 90, 0.5)',
      'rgba(93, 181, 39, 0.5)'
    ],
    borderColor: [
       'rgb(212, 200, 29)',
      'rgb(255, 145, 0)',
      'rgb(4, 104, 255)',
      'rgb(203, 63, 242)',
      'rgb(255, 48, 90)',
      'rgb(93, 181, 39)'],borderWidth: 1,

    data: [2000,480,470,484,495,500],
    fill:false
  },{
    backgroundColor:  [
        'rgba(181, 202, 160,0.5)',
        'rgba(255, 145, 0, 0.5)',
        'rgba(4, 104, 255, 0.5)',
        'rgba(203, 63, 242,0.5)',
        'rgba(255, 48, 90, 0.5)',
        'rgba(93, 181, 39, 0.5)'
    ],
    label: '蛋白質(公克)',
    borderColor: [
        'rgb(181, 202, 160)',
       'rgb(255, 145, 0)',
       'rgb(4, 104, 255)',
       'rgb(203, 63, 242)',
       'rgb(255, 48, 90)',
       'rgb(93, 181, 39)'],borderWidth: 1,
    data: [60, 30.2, 28,30.3,30.7,30.6]
  },
  {
    backgroundColor:  [
        'rgba(120, 125, 123,0.5)',
        'rgba(255, 145, 0, 0.5)',
        'rgba(4, 104, 255, 0.5)',
        'rgba(203, 63, 242,0.5)',
        'rgba(255, 48, 90, 0.5)',
        'rgba(93, 181, 39, 0.5)'
    ],
    label: '鈉含量(毫克)',
    borderColor: [
        'rgb(120, 125, 123)',
       'rgb(255, 145, 0)',
       'rgb(4, 104, 255)',
       'rgb(203, 63, 242)',
       'rgb(255, 48, 90)',
       'rgb(93, 181, 39)'],borderWidth: 1,
    data: [1200, 193, 167,206,394,159]
  }

]
  
};

const labels2 = [
    '每日建議',
    '嘉義雞肉飯',
    '初炸橄欖油蔥雞',
    '台式花雕雞',
    '焙香胡麻雞胸',
   '奶油菇菇雞'
   ];


   const data2 = {
    labels: labels2,
    datasets: [{
      axis:'y',
      label: '熱量(大卡)',
      backgroundColor:  [
          'rgba(212, 200, 29,0.5)',
        'rgba(255, 145, 0, 0.5)',
        'rgba(4, 104, 255, 0.5)',
        'rgba(203, 63, 242,0.5)',
        'rgba(255, 48, 90, 0.5)',
        'rgba(93, 181, 39, 0.5)'
      ],
      borderColor: [
         'rgb(212, 200, 29)',
        'rgb(255, 145, 0)',
        'rgb(4, 104, 255)',
        'rgb(203, 63, 242)',
        'rgb(255, 48, 90)',
        'rgb(93, 181, 39)'],borderWidth: 1,
  
      data: [2000,430,420,434,445,450],
      fill:false
    },{
      backgroundColor:  [
          'rgba(181, 202, 160,0.5)',
          'rgba(255, 145, 0, 0.5)',
          'rgba(4, 104, 255, 0.5)',
          'rgba(203, 63, 242,0.5)',
          'rgba(255, 48, 90, 0.5)',
          'rgba(93, 181, 39, 0.5)'
      ],
      label: '蛋白質(公克)',
      borderColor: [
          'rgb(181, 202, 160)',
         'rgb(255, 145, 0)',
         'rgb(4, 104, 255)',
         'rgb(203, 63, 242)',
         'rgb(255, 48, 90)',
         'rgb(93, 181, 39)'],borderWidth: 1,
      data: [60, 29.5, 27.3,29.6,30,29.9]
    },
    {
      backgroundColor:  [
          'rgba(120, 125, 123,0.5)',
          'rgba(255, 145, 0, 0.5)',
          'rgba(4, 104, 255, 0.5)',
          'rgba(203, 63, 242,0.5)',
          'rgba(255, 48, 90, 0.5)',
          'rgba(93, 181, 39, 0.5)'
      ],
      label: '鈉含量(毫克)',
      borderColor: [
          'rgb(120, 125, 123)',
         'rgb(255, 145, 0)',
         'rgb(4, 104, 255)',
         'rgb(203, 63, 242)',
         'rgb(255, 48, 90)',
         'rgb(93, 181, 39)'],borderWidth: 1,
      data: [1200, 238, 211,250,438,203]
    }
  
  ]
    
  };

  const labels3 = [
    '每日建議',
    '慢烤味噌魚',
    '大紅袍滷雞腿',
    '炙燒明太子雞腿'
   ];


   const data3 = {
    labels: labels3,
    datasets: [{
      axis:'y',
      label: '熱量(大卡)',
      backgroundColor:  [
          'rgba(212, 200, 29,0.5)',
        'rgba(255, 145, 0, 0.5)',
        'rgba(4, 104, 255, 0.5)',
        'rgba(203, 63, 242,0.5)',
      ],
      borderColor: [
         'rgb(212, 200, 29)',
        'rgb(255, 145, 0)',
        'rgb(4, 104, 255)',
        'rgb(203, 63, 242)'],borderWidth: 1,
  
      data: [2000,430,420,434,445,450],
      fill:false
    },{
      backgroundColor:  [
          'rgba(181, 202, 160,0.5)',
          'rgba(255, 145, 0, 0.5)',
          'rgba(4, 104, 255, 0.5)',
          'rgba(203, 63, 242,0.5)',
      ],
      label: '蛋白質(公克)',
      borderColor: [
          'rgb(181, 202, 160)',
         'rgb(255, 145, 0)',
         'rgb(4, 104, 255)',
         'rgb(203, 63, 242)'],borderWidth: 1,
      data: [60, 29.5, 27.3,29.6,30,29.9]
    },
    {
      backgroundColor:  [
          'rgba(120, 125, 123,0.5)',
          'rgba(255, 145, 0, 0.5)',
          'rgba(4, 104, 255, 0.5)',
          'rgba(203, 63, 242,0.5)'
      ],
      label: '鈉含量(毫克)',
      borderColor: [
          'rgb(120, 125, 123)',
         'rgb(255, 145, 0)',
         'rgb(4, 104, 255)',
         'rgb(203, 63, 242)'],borderWidth: 1,
      data: [1200, 238, 211,250,438,203]
    }
  
  ]
    
  };


const config = {
  type: 'bar',
  data: data,
  options: {
    indexAxis:'y',
  }
};

const config2 = {
    type: 'bar',
    data: data2,
    options: {
      indexAxis:'y',
    }
  };

  const config3 = {
    type: 'bar',
    data: data3,
    options: {
      indexAxis:'y',
    }
  };

const myChart = new Chart(
  document.getElementById('foodChart-1'),
  config
);

const myChart2 = new Chart(
    document.getElementById('foodChart-2'),
    config2
  );

  const myChart3 = new Chart(
    document.getElementById('foodChart-3'),
    config3
  );

  $('.topbtn').on('click',function () {


    $('.topbtn').css('animation','quake 0.5s infinite')
    $('.topbtn').css('background-color', '#d10202a3')
    $('#fire').css('animation','fquake 0.5s infinite')
    $('.header-in').addClass('shine')
    $('.header-in').css('background-color','#000')
    $('.logo').css('display','none')
    setTimeout(function(){

// console.log('time')
      window.scrollTo(0, 0);
    // $('.progress-bar').css('display','block');

    $('#smoke').css('visibility','initial')
 






    },1000)

  })