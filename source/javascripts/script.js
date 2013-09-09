/* Author:

*/

$(function(){
  $('.avatar').fadeIn(3500).rotate({
    angle: 0,
    animateTo: 360,
    duration: 4500,
    callback: function(){
      $('.description h2').show('slide', {direction: 'right'}, 300, function(){
       $('.description p').show('slide', {direction: 'up'}, 200);
      });
    }
  });

});





















