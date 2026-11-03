(function(){
  var bar=document.querySelector('.mobile-cta');
  var hero=document.querySelector('.hero-cta');
  var end=document.querySelector('#download');
  if(!bar || !hero || !end) return;
  function update(){
    var heroBottom=hero.getBoundingClientRect().bottom;
    var endRect=end.getBoundingClientRect();
    var endVisible=endRect.top<window.innerHeight && endRect.bottom>0;
    bar.classList.toggle('show',heroBottom<0 && !endVisible);
  }
  window.addEventListener('scroll',update,{passive:true});
  window.addEventListener('resize',update);
  update();
})();
