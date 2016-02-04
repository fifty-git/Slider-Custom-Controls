var slideData = function() {
  // onLoad
  this.sliderOnLoad = function(data, triggerArea, prevButton, nextButton) {
    // onLoad set default opacity
    prevButton.css( "opacity", '0.0');
    nextButton.css( "opacity", '0.0');
    var numOfSlides = data.data.numberOfSlides;
    var curSlide = 1;
    var btnObj = getSliderState(data, curSlide, numOfSlides);
    mouseEnterField(btnObj, triggerArea, prevButton, nextButton);
  };

  // get info from iosSlider
  this.sliderOnChange = function(data, triggerArea, prevButton, nextButton) {
    var numOfSlides = data.data.numberOfSlides;
    var curSlide = (data.currentSlideNumber) ? data.currentSlideNumber : 1;
    var btnObj = getSliderState(data, curSlide, numOfSlides);
    // set the current onClick opacity
    prevButton.css( "opacity", btnObj.prevO);
    nextButton.css( "opacity", btnObj.nextO);
    // give the opacity state to mouse in/out
    mouseEnterField(btnObj, triggerArea, prevButton, nextButton);
  };

  /*
  Get slide state and the opacity values
  Need to know the opacity upon mouseleave
  so when mouseenter again the opacity will match the state of the slide
  */
  function mouseEnterField(btnObj, triggerArea, prevButton, nextButton) {

    $(triggerArea).unbind().mouseenter(function() {
      prevButton.fadeTo( "slow", btnObj.prevO);
      nextButton.fadeTo( "slow", btnObj.nextO);
    }).mouseleave(function() {
      prevButton.fadeTo( "slow", "0.0");
      nextButton.fadeTo( "slow", "0.0");
    });
  }

  function getSliderState(data, curSlide, numOfSlides) {

    var prevSlide = data.prevSlideNumber;
    var prevOpacity, nextOpacity;

    if (curSlide === 1) {
      prevOpacity = '0.5';
      nextOpacity = '1.0';
    }
    else if (curSlide != numOfSlides && prevSlide != undefined) {
      prevOpacity = '1.0';
      nextOpacity = '1.0';
    }
    else if (curSlide === numOfSlides) {
      prevOpacity = '1.0';
      nextOpacity = '0.5';
    }
    var buttonObj = {
      prevO: prevOpacity,
      nextO: nextOpacity
    };

    return buttonObj;
  }


};
