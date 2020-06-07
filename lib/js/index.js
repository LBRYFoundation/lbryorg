// Parallax
const depthFactor = 5; // Depth of the image wrt to the 0 z-index. 1 being at the same distance as the rest of the content and Infinity being as far away as possible.
$(window).on('scroll', () => {
  const movedBy = window.scrollY;

  $('.parallax .parallax-img').css({
    transform: `translateY(${movedBy / depthFactor}px)` // Move differently than the rest of the window
  })
})
// /Parallax

// Transparent Navbar
$(window).on('scroll', () => {
  if (window.scrollY !== 0) $('nav').removeClass('nav-transparent')
  else $('nav').addClass('nav-transparent')
})
// /Transparent Navbar