(function() {
  var itemClassName = "slider__photo";
  (items = document.getElementsByClassName(itemClassName)),
    (totalItems = items.length),
    (slide = 0);

  // Set event listeners
  function setEventListeners() {
    var next = $(".slider__button--next")[0],
      prev = $(".slider__button--prev")[0];
    $(next).on("click", getNext);
    $(prev).on("click", getPrev);
  }

  function getNext() {
    // TODO
    //if (items[slide].classList.contains("active")) {
    //items[slide].classList.remove("active");
    //}
    //slide++;
    //items[slide].classList.add("active");
    $(".slider__photo")
      .eq(slide)
      .removeClass("active");
    if (slide === totalItems - 1) {
      slide = 0;
      //slide = slide === totalItems - 1 ? 0 : slide++;
    } else slide++;
    $(".slider__photo")
      .eq(slide)
      .addClass("active");
  }

  function getPrev() {
    // TODO
    //if (items[slide].classList.contains("active")) {
    //items[slide].classList.remove("active");
    //}
    //slide--;
    //items[slide].classList.add("active");
    $(".slider__photo")
      .eq(slide)
      .removeClass("active");
    if (slide === 0) {
      slide = totalItems - 1;
    } else slide--;
    $(".slider__photo")
      .eq(slide)
      .addClass("active");
  }

  function initSlider() {
    // setInitialClasses();
    setEventListeners();

    // Set moving to false so that the slider becomes interactive
    moving = false;
  }

  initSlider();
})();
