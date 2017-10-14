import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-html',
  templateUrl: 'html.component.html',
  providers: []
})
export class HtmlComponent {

  private resultText: string
  private defaultInput: string

  constructor() {
  }

  setDefaultValue() {
    this.defaultInput = "my oxigen.aspx?name=ståle&car=saab";
  }

  encodeHTML(form: NgForm) {
    let input = form.value.input;
    this.resultText = encodeURI(input);
    this.focusOnResultTab()
  }

  decodeHTML(form: NgForm) {
    let input = form.value.input;
    this.resultText = decodeURI(input);
    this.focusOnResultTab()
  }

  focusOnResultTab() {
    document.getElementById("nav-tab-head-1").classList.remove('active');
    document.getElementById("nav-tab-head-2").classList.add('active');
    document.getElementById("tab_1").classList.remove('active');
    document.getElementById("tab_2").classList.add('active');
  }
}
