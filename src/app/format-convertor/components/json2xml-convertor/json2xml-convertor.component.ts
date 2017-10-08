import { Component } from '@angular/core'
import { NgForm } from '@angular/forms';

import { json2xml } from 'json2xml'

@Component({
    selector: 'app-json2xml-convertor',
    templateUrl: 'json2xml-convertor.html'
})
export class Json2XmlConvertorComponent {

    data = { resultText: '' }

    xml2json: any;

    constructor() {
    }

    convertToXml(form: NgForm) {
        let input = form.value.input;
        console.log(decodeURIComponent(this.xml2json.json2xml("{'name':'mukesh','email':'mukeshdutt@gmail.com'}")))

        this.data.resultText = "" // JSON.stringify(this.xml2json.json2xml_str(input));
    }
}