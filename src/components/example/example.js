import './example.scss';
import template from './example.html';

export class Example {
  data = {}

  constructor(id, data) {
    console.log('Example', id, data);
    this.data = {...this.data, ...data};
    this.el = document.getElementById(id);
    this.update();
  }

  update() {
    this.el.innerHTML = template.render(this.data);
  }
}
