$(document).ready(function() {
    $('.slider-track').slick({
        arrows: false,
        dots: true,
        speed: 1000,
        fade: true,
        easing: 'linear',
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: '10px'
    });
    $('.slider-main').slick({
        arrows: true,
        dots: false,
        easing: 'linear',
        autoplay: true,
        autoplaySpeed: 8000,
        centerMode: true,
        centerPadding: '10px',
    });
});

 // MODAL

 $(function () {
    $('#callback-button').click(function () {
      $('#modal').addClass('modal-active');
      $('body').addClass('hidden');
    });
   
    $('#close-button').click(function () {
      $('#modal').removeClass('modal-active');
      $('body').removeClass('hidden');
    });
   
    $('#modal').mouseup(function (e) {
      let modalContent = $(".modal-content");
      if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
        $(this).removeClass('modal-active');
        $('body').removeClass('hidden');
      }
    });
  });


