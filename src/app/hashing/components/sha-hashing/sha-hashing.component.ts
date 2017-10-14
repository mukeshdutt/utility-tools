import { Component } from '@angular/core';
import { NgForm } from '@angular/Forms';

declare var jsSHA: any;

@Component({
  selector: 'app-sha-hashing',
  templateUrl: 'sha-hashing.component.html',
})
export class ShaHashingComponent {

  shaObject: any;
  data = { resultText: '' }

  constructor() { }

  private getSHAHashed(form: NgForm) {

    let mode: string = form.value.mode;
    let input: string = form.value.input;

    if (!mode) {
      alert('No mode selected..');
      return
    }

    this.shaObject = new jsSHA(mode, 'TEXT');
    this.shaObject.update(input);
    this.data.resultText = this.shaObject.getHash('HEX');
  }
}
