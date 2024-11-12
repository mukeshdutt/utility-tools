import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

declare var md5: any;

@Component({
  selector: 'app-md5-hashing',
  templateUrl: 'md5-hashing.component.html',
  providers: []
})
export class MD5HashingComponent {

  public resultText: string = ''
  public defulatInput: string = ''
  public errorText: string = ''

  makeMd5(form: NgForm) {

    try {

      let input: string = form.value.input;
      this.resultText = md5(input);
      this.focusOnResultTab()

    } catch (err) {
      this.errorText = "The problem has occurred with this entered input text, Please send it to the development team to rectify the same issue."
    }
  }

  setDefaultText() {
    this.defulatInput = "Hello Oxigen"
  }

  closeAlert() {
    this.errorText = ""
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
}
