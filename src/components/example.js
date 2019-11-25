import './example.scss';
import template from './example.html';

export class Example {
  constructor() {
    console.log('Example');
    const el = document.createElement('div');
    el.innerHTML = template.render({ title: 'Example component' });
    document.body.appendChild(el);
  }
}
