import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

declare var md5: any;
declare var jsSHA: any;

@Component({
  selector: 'app-hmac-hashing',
  templateUrl: 'hmac-hashing.component.html'
})
export class HmacHashingComponent {

  private shaObject: any;
  private resultText: string
  private defaultMode: string
  private errorText: string
  private modes = [
    { modeValue: 'MD5', modeText: 'HMAC with MD5' },
    { modeValue: 'SHA-1', modeText: 'HMAC with SHA-1' },
    { modeValue: 'SHA-256', modeText: 'HMAC with SHA-256' },
    { modeValue: 'SHA3-256', modeText: 'HMAC with SHA3-256' },
    { modeValue: 'SHA-384', modeText: 'HMAC with SHA-384' },
    { modeValue: 'SHA3-384', modeText: 'HMAC with SHA3-384' },
    { modeValue: 'SHA-512', modeText: 'HMAC with SHA-512' },
    { modeValue: 'SHA3-512', modeText: 'HMAC with SHA3-512' }
  ]

  constructor() {
    this.defaultMode = "MD5"
  }

  getHMAC(form: NgForm) {

    try {
      
      let mode: string = form.value.mode;
      let input: string = form.value.input;
      let hmacKey: string = form.value.hmacKey;

      if (mode == "MD5") {
        this.resultText = this.hmacWithMD5(input, hmacKey)
      } else {
        this.resultText = this.hmacWithSHA(mode, input, hmacKey);
      }
      this.focusOnResultTab()

    } catch (err) {
      this.errorText = "Some problem has been occurred. (" + err + ")"
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
