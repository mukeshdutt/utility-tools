import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-html',
  templateUrl: 'html.component.html',
  providers: []
})
export class HtmlComponent {

  data = { resultText: '' }

  constructor() {
  }

  encodeHTML(form: NgForm) {
    let input = form.value.input;
    this.data.resultText = encodeURI(input);
  }

  decodeHTML(form: NgForm) {
    let input = form.value.input;
    this.data.resultText = decodeURI(input);
  }
}
