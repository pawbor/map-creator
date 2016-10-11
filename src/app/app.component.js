import template from './app.html';
import styles from './app.scss';

class controller {
  constructor() {
    this.styles = styles;
  }
}

const component = {
  template,
  controller
};

export default component;
