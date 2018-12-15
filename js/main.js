
const catImageOne = document.querySelector('.cat-one');
const catImageTwo = document.querySelector('.cat-two');
const clickContainerOne = document.getElementById('image-one-counted');
const clickContainerTwo = document.getElementById('image-two-counted');
let countClicksOne = 0;
let countClicksTwo = 0;
catImageOne.addEventListener('click', function(){
  countClicksOne++;
  clickContainerOne.innerHTML = countClicksOne;
}, false);

catImageTwo.addEventListener('click', function(){
  countClicksTwo++;
  clickContainerTwo.innerHTML = countClicksTwo;
}, false);
