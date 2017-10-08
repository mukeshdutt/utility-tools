import { Component } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5'

@Component({
  selector: 'app-md5-hashing',
  templateUrl: 'md5-hashing.component.html',
  providers: [Md5]
})
export class MD5HashingComponent {

  restult: any

  constructor(private _md5: Md5) { }

  DoMd5() {
    let input: string = ""
    console.log(input);
    this.restult = Md5.hashStr(input);

    let blog: Blob = new Blob()

    console.log(this._md5.appendAsciiStr('hello').end())
  }
}
