import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

declare var jsSHA: any;

@Component({
  selector: 'app-sha-hashing',
  templateUrl: 'sha-hashing.component.html',
})
export class ShaHashingComponent {

  public shaObject: any;
  public resultText: string = ''
  public errorText: string = ''
  public defaultMode: string = ''
  public modes = [
    { modeValue: 'SHA-1', modeText: 'SHA 1' },
    { modeValue: 'SHA-256', modeText: 'SHA 256' },
    { modeValue: 'SHA3-256', modeText: 'SHA3 - 256' },
    { modeValue: 'SHA-384', modeText: 'SHA 384' },
    { modeValue: 'SHA3-384', modeText: 'SHA3 - 384' },
    { modeValue: 'SHA-512', modeText: 'SHA 512' },
    { modeValue: 'SHA3-512', modeText: 'SHA3 - 512' }
  ]

  constructor() { 
    this.defaultMode = "SHA-1"
  }

  getSHAHashed(form: NgForm) {

    try {

      let mode: string = form.value.mode;
      let input: string = form.value.input;
  
      this.shaObject = new jsSHA(mode, 'TEXT');
      this.shaObject.update(input);
      this.resultText = this.shaObject.getHash('HEX');
      this.focusOnResultTab()

    } catch(err){
      this.errorText = "The problem has occurred with this entered input text and selected mode, Please send this info to the development team to rectify the same issue.";
    }
  }

  closeAlert(){
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
