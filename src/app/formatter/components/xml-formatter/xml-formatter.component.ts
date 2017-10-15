import { Component } from '@angular/core';
import { pd } from 'pretty-data'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-xml-formatter',
  templateUrl: 'xml-formatter.component.html'
})
export class XmlFormatterComponent {

  private resultText: string
  private defulatInput: string
  private errorText: string

  makeBeautify(form: NgForm) {

    try {

      let input = form.value.input
      this.resultText = pd.xml(input);
      this.focusOnResultTab();

    } catch (err) {
      this.errorText = err
    }
  }

  makeMinify(form: NgForm) {
    
    try {

      let input = form.value.input
      this.resultText = pd.xmlmin(input, '');
      this.focusOnResultTab();

    } catch (err) {
      this.errorText = err
    }
  }

  setDefaultText() {
    this.defulatInput = "<employee><name>John H</name><mobile>+1-998988938293</mobile><email>john.h@abc.com</email></employee>"
  }

  closeAlert() {
    this.errorText = ""
  }

  focusOnResultTab() {
    this.errorText = ""
    document.getElementById("nav-tab-head-1").classList.remove('active');
    document.getElementById("nav-tab-head-2").classList.add('active');
    document.getElementById("tab_1").classList.remove('active');
    document.getElementById("tab_2").classList.add('active');
  }
}
