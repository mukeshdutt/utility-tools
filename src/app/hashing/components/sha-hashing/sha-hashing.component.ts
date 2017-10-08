import { Component, OnInit } from '@angular/core';

declare var jsSHA: any;

@Component({
  selector: 'app-sha-hashing',
  templateUrl: 'sha-hashing.component.html'
})
export class ShaHashingComponent implements OnInit {

  shaObj: any
  result: string

  constructor() {
    this.shaObj = new jsSHA('SHA-512', 'TEXT');
    this.shaObj.update('This is test text');
    this.result = this.shaObj.getHash('HEX');
  }

  ngOnInit() {
  }

}
