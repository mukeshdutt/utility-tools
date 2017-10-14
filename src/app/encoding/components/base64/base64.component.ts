import { Component, Input } from '@angular/core';
import { NgForm, Form } from '@angular/forms'

@Component({
  selector: 'app-base64',
  templateUrl: 'base64.component.html'
})
export class Base64Component {

  private resultText: string
  private defaultInput: string
  private errorText: string

  constructor() {
  }

  setDefaultValue() {
    this.defaultInput = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";
  }

  stringToBase64(form: NgForm) {
    let input = form.value.input;
    this.resultText = btoa(input);
    this.focusOnResultTab();
  }

  base64ToString(form: NgForm) {

    try {
      let input = form.value.input;
      this.resultText = atob(input);
      this.focusOnResultTab();
    } catch (err) {
      this.errorText = "Please enter valid Base64 text. (This string to be decoded is not correctly encoded).";
    }
  }

  closeAlert() {
    this.errorText = "";
  }

  focusOnResultTab() {
    document.getElementById("nav-tab-head-1").classList.remove('active');
    document.getElementById("nav-tab-head-2").classList.add('active');
    document.getElementById("tab_1").classList.remove('active');
    document.getElementById("tab_2").classList.add('active');
  }
}
