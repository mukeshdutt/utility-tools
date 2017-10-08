import { Component, OnInit } from '@angular/core';
import { pd } from 'pretty-data'
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-json-formatter',
  templateUrl: 'json-formatter.component.html',
  providers: []
})
export class JsonFormatterComponent {

  data = { resultText: '' }

  constructor() {
  }

  makeBeautify(form: NgForm) {
    let input = form.value.input
    this.data.resultText = pd.json(input);
  }

  makeMinify(form: NgForm) {
    let input = form.value.input
    this.data.resultText = pd.jsonmin(input);
    console.log(pd.jsonmin(input));
  }
}
