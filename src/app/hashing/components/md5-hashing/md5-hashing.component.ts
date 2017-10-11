import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

declare var md5: any;

@Component({
  selector: 'app-md5-hashing',
  templateUrl: 'md5-hashing.component.html',
  providers: []
})
export class MD5HashingComponent {

  data = { resultText: '' }

  constructor() {
  }

  makeMd5(form: NgForm) {
    let input: string = form.value.input;
    this.data.resultText = md5(input);
  }
}
