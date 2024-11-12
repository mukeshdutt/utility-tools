import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-html',
  templateUrl: 'html.component.html',
  providers: []
})
export class HtmlComponent {

  public resultText: string = ''
  public defaultInput: string = ''

  setDefaultValue() {
    this.defaultInput = "<html><head><title></title><head><body>&nbsp; &copy;HTML Encoder</body></html>";
  }

  encodeHTML(form: NgForm) {
    let input = form.value.input;
    this.resultText = this.htmlEscape(input);
    this.focusOnResultTab()
  }

  decodeHTML(form: NgForm) {
    let input = form.value.input;
    this.resultText = this.htmlUnescape(input);
    this.focusOnResultTab()
  }

  focusOnResultTab() {
    const navTabHead1 = document.getElementById("nav-tab-head-1");
    const navTabHead2 = document.getElementById("nav-tab-head-2");
    const tab1 = document.getElementById("tab_1");
    const tab2 = document.getElementById("tab_2");

    if (navTabHead1) navTabHead1.classList.remove('active');
    if (navTabHead2) navTabHead2.classList.add('active');
    if (tab1) tab1.classList.remove('active');
    if (tab2) tab2.classList.add('active');
  }

  htmlEscape(text: string) {
    return text
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  htmlUnescape(text: string) {
    return text
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&');
  }
}
