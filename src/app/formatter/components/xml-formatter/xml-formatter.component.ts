import { Component } from '@angular/core';
import { pd } from 'pretty-data'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-xml-formatter',
  templateUrl: 'xml-formatter.component.html'
})
export class XmlFormatterComponent {

  data = { resultText: '' }

  constructor() {
  }

  makeBeautify(form: NgForm) {
    let input = form.value.input
    this.data.resultText = pd.xml(input);
    console.log(pd.xml(input));
  }

  makeMinify(form: NgForm) {
    let input = form.value.input
    this.data.resultText = pd.xmlmin(input, '');
    console.log(pd.xmlmin(input, ''));
  }

}
