import { HomePage } from './pages/homePage/index.js';
import { NotFoundPage } from './pages/notfoundpage/index.js';
import { router } from './router/index.js';

const ROOT = document.getElementById("container");

router({
  '/': async () => await HomePage(), // /index.htm
  '*': () => NotFoundPage(),
}, '#app');