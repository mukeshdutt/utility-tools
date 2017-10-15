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
    document.getElementById("nav-tab-head-1").classList.remove('active');
    document.getElementById("nav-tab-head-2").classList.add('active');
    document.getElementById("tab_1").classList.remove('active');
    document.getElementById("tab_2").classList.add('active');
  }

  htmlEscape(text) {
    return text
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  htmlUnescape(text) {
    return text
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&');
  }
}
