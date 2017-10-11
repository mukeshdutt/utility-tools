import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

declare var md5: any;
declare var jsSHA: any;

@Component({
  selector: 'app-hmac-hashing',
  templateUrl: 'hmac-hashing.component.html'
})
export class HmacHashingComponent {

  shaObject: any;
  data = { resultText: '' }

  constructor() { }

  getHMAC(form: NgForm) {

    let mode: string = form.value.mode;
    let input: string = form.value.input;
    let hmacKey: string = form.value.hmacKey;

    if (!mode) {
      alert('No mode selected..')
      return
    }

    if (mode == "MD5") {
      this.data.resultText = this.hmacWithMD5(input, hmacKey)
    } else {
      console.log(mode);
      this.data.resultText = this.hmacWithSHA(mode, input, hmacKey);
    }
  }

  private hmacWithMD5(input: string, key: string): string {
    return md5(input, key);
  }

  private hmacWithSHA(mode: string, input: string, key: string): string {
    this.shaObject = new jsSHA(mode, 'TEXT');
    this.shaObject.setHMACKey(key, 'TEXT')
    this.shaObject.update(input);
    return this.shaObject.getHMAC('HEX');
  }
}
