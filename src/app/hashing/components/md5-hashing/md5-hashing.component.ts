import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

declare var md5: any;

@Component({
  selector: 'app-md5-hashing',
  templateUrl: 'md5-hashing.component.html',
  providers: []
})
export class MD5HashingComponent {

  private resultText: string
  private defulatInput: string
  private errorText: string

  makeMd5(form: NgForm) {

    try {
      let input: string = form.value.input;
      this.resultText = md5(input);
      this.focusOnResultTab()
    } catch (err) {
      this.errorText = "Problem occurred."
    }
  }

  setDefaultText() {
    this.defulatInput = "Hello World"
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
