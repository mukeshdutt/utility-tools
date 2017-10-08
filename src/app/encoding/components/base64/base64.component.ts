import { Component, Input } from '@angular/core';
import { NgForm, Form } from '@angular/forms'

@Component({
  selector: 'app-base64',
  templateUrl: 'base64.component.html'
})
export class Base64Component {

  data = { resultText: '' }

  constructor() {
  }

  stringToBase64(form: NgForm) {
    let input = form.value.input;
    this.data.resultText = btoa(input);
  }

  base64ToString(form: NgForm) {
    let input = form.value.input;
    this.data.resultText = atob(input);
  }
}
