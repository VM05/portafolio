import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
// import router from './router/router';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faBootstrap,
  faCss3,
  faCss3Alt,
  faGithub,
  faHtml5,
  faInstagram,
  faJs,
  faJsSquare,
  faLinkedin,
  faNode,
  faNodeJs,
  faPhp,
  faSass,
  faVuejs,
  faWhatsapp,
  faWordpressSimple,
} from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFileLines, faNewspaper } from '@fortawesome/free-regular-svg-icons';
import {
  faCode,
  faCodeBranch,
  faCodeCommit,
  faCodeCompare,
  faCodeFork,
  faCodeMerge,
  faCodePullRequest,
  faLaptopCode,
  faTerminal,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faJsSquare,
  faNodeJs,
  faGithub,
  faFileLines,
  faLinkedin,
  faInstagram,
  faWhatsapp,
  faPhp,
  faVuejs,
  faHtml5,
  faCss3,
  faSass,
  faNode,
  faWordpressSimple,
  faBootstrap,
  faCss3Alt,
  faCode,
  faLaptopCode,
  faCodeBranch,
  faCodeCompare,
  faCodePullRequest,
  faCodeFork,
  faCodeMerge,
  faCodeCommit,
  faTerminal,
  faJs,
  faNewspaper
);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
