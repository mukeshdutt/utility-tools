import { Component } from '@angular/core'
import { NgForm } from '@angular/forms';

declare var X2JS: any;

@Component({
    selector: 'app-xml2json-convertor',
    templateUrl: 'xml2json-convertor.html'
})
export class Xml2JsonConvertorComponent {

    data = { resultText: '' }

    xml2json: any;

    constructor() {
        this.xml2json = new X2JS();
    }

    convertToJson(form: NgForm) {
        let input = form.value.input;
        this.data.resultText = JSON.stringify(this.xml2json.xml_str2json(input));
    }
}