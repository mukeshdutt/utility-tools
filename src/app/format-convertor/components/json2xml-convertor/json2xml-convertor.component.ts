import { Component } from '@angular/core'
import { NgForm } from '@angular/forms';

declare var X2JS: any;

@Component({
    selector: 'app-json2xml-convertor',
    templateUrl: 'json2xml-convertor.html'
})
export class Json2XmlConvertorComponent {

    data = { resultText: '' }
    xml2json: any;

    constructor() {
        this.xml2json = new X2JS()
    }

    convertToXml(form: NgForm) {
        let input = form.value.input;
        let json = this.xml2json.json2xml_str(JSON.parse(input));
        this.data.resultText = json;
    }
}