import '@styles/main.css';
import '@styles/color-sheme.css';
import '@styles/content.css';
import '@styles/reset.css';
import '@fonts/geometria.css';
import '@fonts/fontawesome/all.min.css';
import '@fonts/iconfont/material-icons.css';
import '@fancyapps/fancybox/dist/jquery.fancybox.min.css';

import { onArrowLoad } from '@blocks/arrow/arrow';
import { loadData } from '@blocks/info/info';

const supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;
console.log('supportTouch is ' + supportsTouch);

onArrowLoad();
loadData();