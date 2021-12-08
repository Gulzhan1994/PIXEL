$(function(){
    $('.item__slider').slick({
        autoplay: true,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        speed: 1500,
        responsive: [{
            breakpoint: 880,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 650,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
        },
        {
            breakpoint: 450,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
        },
        ]
    });

    $('.news__slider').slick({
        autoplay: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        speed: 1500,
        responsive: [{
            breakpoint: 650,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
        },
        {
            breakpoint: 650,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
    });


    $('.news__slider-img').slick({
        autoplay: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        speed: 1500,
    });

    $('.comment__slider').slick({
        autoplay: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        speed: 1500,
        responsive: [{
            breakpoint: 1100,
            settings: {
              arrows: false,
            }
        }]
    });
  
    //Pop-up1

    const openPopUp = document.getElementsByClassName('open_pop_up');
    const closePopUp = document.getElementById('pop_up_close');
    const popUp = document.getElementById('pop_up');

    if(openPopUp?.length) {
        for(let i = 0; i < openPopUp.length; i++) {
            openPopUp[i].addEventListener('click', function(e) {
                e.preventDefault();
                popUp.classList.add('active');

            })
        }
    }

    if(closePopUp) {
        closePopUp.addEventListener('click', () => {
            popUp.classList.remove('active');
        })
    }

    $('input[type="tel"]').click(function(){
        $(this).setCursorPosition(3);
      }).mask("+7 (999) 999 99 99");

      let hamb = document.querySelector(".burger")
      let headerMenu = document.querySelector(".header__nav")
      
      if(hamb) {
          hamb.addEventListener("click", function (event) {
          document.body.classList.toggle('lock');
          hamb.classList.toggle("burger__active");
          headerMenu.classList.toggle("header__nav--active")
      });
      }

});



