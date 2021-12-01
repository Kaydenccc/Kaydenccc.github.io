const btn = document.querySelector('.btn');
const sec = document.querySelector('.section-one');
const con = document.querySelector('.container');
const up = document.querySelector('.the-wedding');
const middle = document.querySelector('.the-wedding-middle');
const bottom = document.querySelector('.the-wedding-bottom');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const bismillah = document.querySelector('.bismillah');
const kata1 = document.querySelector('.katak.kata-1');
const kata2 = document.querySelector('.katak.kata-2');
const bungkus = document.querySelector('.bungkus');
function scrollAppear(parms, parameter, bagi = 1) {
  let introPositions = parms.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / bagi;
  //   console.log(screenPosition);
  //   console.log(Math.floor(introPositions));
  if (Math.floor(introPositions) < screenPosition) {
    parms.classList.add(`${parameter}`);
  }
}

btn.addEventListener('click', () => {
  sec.classList.add('active');
  bungkus.classList.add('bungkus-active');
  //   var num = 0;
  //   var func = setInterval(() => {
  // num++;
  // if (num === 5) {
  scrollAppear(middle, 'intro-appear2');
  // }
  // if (num === 8) {
  scrollAppear(up, 'intro-appear');
  scrollAppear(bottom, 'intro-appear3');
  // }
  // if (num === 10) {
  //   clearInterval(func);
  // }
  //   }, 100);
  window.addEventListener('scroll', () => {
    scrollAppear(one, 'muncul1', 1.2);
    scrollAppear(two, 'muncul2', 1.2);
    scrollAppear(bismillah, 'bismillah-active', 1.3);
    scrollAppear(kata1, 'kata-active', 1.3);
    scrollAppear(kata2, 'kata-active', 1.3);
  });
});
