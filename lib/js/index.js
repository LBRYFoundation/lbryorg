// Parallax
const depthFactor = 5; // Depth of the image wrt to the 0 z-index. Infinity being at the same distance as the rest of the content and 1 being as far away as possible.
$(window).on('scroll', () => {
  const movedBy = window.scrollY;

  $('.parallax').each((i, parallax) => {
    $(parallax).find('.parallax-layer').each((i, layer) => {
      const depth = $(layer).attr('data-depth-factor') || depthFactor; // dynamically get depthFactor

      $(layer).css({
        transform: `translateY(+${movedBy / depth}px)` // Move differently than the rest of the window
      })
    })
  })
})
// /Parallax

// Transparent Navbar
$(window).on('scroll', () => {
  if (window.scrollY !== 0) $('nav').removeClass('nav-transparent')
  else $('nav').addClass('nav-transparent')
})
// /Transparent Navbar

// ScrollFade Anim
const fadeOffset = 50;
const fadeDuration = 500;

$(window).on('scroll', () => {
  $('.scroll-fade').each((i, elem) => {
    const offset = $(elem).attr('data-fade-offset') || fadeOffset;
    const duration = $(elem).attr('data-fade-duration') || fadeDuration;

    if ($(window).height() - elem.getBoundingClientRect().top >= offset) {
      $(elem).animate({opacity: 1}, duration).css({transition: `transform ${duration / 1000}s`}).css({transform: 'scale(1)'});
    }
  })
})
// /ScrollFade Anim