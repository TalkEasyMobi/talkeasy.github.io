/* Kodas skirtas css animacijai*/
$(function(){
  let addSomeClass = 'hinge';
  $('img').on('mouseover', function (){
   $('img').addClass(addSomeClass).one('webkitAnimationEnd, mozAnimationEnd, MSAnimationEnd, oanimationend, animationend', function(){
      $(this).removeClass(addSomeClass);
    }); 
  });
});