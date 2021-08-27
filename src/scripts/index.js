import '@styles/main.css';
import '@styles/color-sheme.css';
import '@styles/index.css';
import '@styles/reset.css';
import '@fonts/montserrat.css';
import '@fonts/fontawesome/all.min.css';
import '@fonts/iconfont/material-icons.css';
import '@fancyapps/fancybox/dist/jquery.fancybox.min.css';

const supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;
console.log('supportTouch is ' + supportsTouch);


// if(supportsTouch){
//     showHeader();
// }else{
//     header.addEventListener('mouseover', onHeaderHoverHandler);
// }

// function onHeaderHoverHandler() {
//     header.classList.add('header__hover');
// }

// function showHeader(){
//     header.classList.add('header__hover');
// }