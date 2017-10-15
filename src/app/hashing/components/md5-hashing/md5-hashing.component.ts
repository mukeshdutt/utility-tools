import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

declare var md5: any;

@Component({
  selector: 'app-md5-hashing',
  templateUrl: 'md5-hashing.component.html',
  providers: []
})
export class MD5HashingComponent {

  public resultText: string
  public defulatInput: string
  public errorText: string

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
    document.getElementById("nav-tab-head-1").classList.remove('active');
    document.getElementById("nav-tab-head-2").classList.add('active');
    document.getElementById("tab_1").classList.remove('active');
    document.getElementById("tab_2").classList.add('active');
  }
}
