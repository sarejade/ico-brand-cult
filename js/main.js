/*
** Function that runs when the website has been loaded
*/
function init() {

  // Log
  console.log('Yoo!');

  // Scroll reveal
  window.sr = ScrollReveal({
    reset: false,
    distance: '40px',
    scale: 1,
    viewFactor: 0.5,
    duration: 1000
  });
  sr.reveal('.fade-in-element');

  // Filter
  var filterizd = $('.filtr-container').filterizr();

}


// When document is ready run the function Init
$(document).ready(init);
