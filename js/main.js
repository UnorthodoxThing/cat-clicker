
const catImage = document.querySelector('img');
const clickContainer = document.getElementById('click-counted');
let countClicks = 0;
catImage.addEventListener('click', function(){
  countClicks++;
  clickContainer.innerHTML = countClicks;
}, false);
