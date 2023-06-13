$(document).ready(function () {
  const slider = $(".slider__content");
  const customNextButton = $(".custom_next-btn > button");
  const exitButton = $(".menu__close");
  const openButton = $(".header__bar");

  // slick
  slider.slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-chevron-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fa-solid fa-chevron-right' aria-hidden='true'></i></button>",
  });

  const slickCounters = (_, slick) => {
    var totalSlides = slick.slideCount;
    var currentSlideIndex = slick.currentSlide + 1;

    // Hiển thị số thứ tự
    $(".slider__count").text(currentSlideIndex + "/" + totalSlides);
  };

  slider.on("beforeChange", slickCounters);

  customNextButton.on("click", function () {
    slider.slick("slickNext"); // Thực hiện chức năng "Next" của Slick Slider
  });

  const totalSlides = slider.slick("getSlick").slideCount;
  const currentSlideIndex = slider.slick("slickCurrentSlide") + 1;

  // Hiển thị số thứ tự
  $(".slider__count").text(currentSlideIndex + "/" + totalSlides);

  // end  slick


  //   event handle nav
  const handleToggleNav = () => {
    const navMenu = $(".menu__header");
    navMenu.toggleClass("active");
  };
  exitButton.on("click", handleToggleNav);
  openButton.on("click", handleToggleNav);


});
