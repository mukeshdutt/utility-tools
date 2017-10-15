import { Component } from '@angular/core'
import { NgForm } from '@angular/forms';

declare var X2JS: any;

@Component({
    selector: 'app-xml2json-convertor',
    templateUrl: 'xml2json-convertor.html'
})
export class Xml2JsonConvertorComponent {

    public xml2json: any;
    public resultText: string
    public errorText: string
    public defaultInput: string

    constructor() {
        this.xml2json = new X2JS();
    }

    convertToJson(form: NgForm) {

        try {

            let input = form.value.input;
            this.resultText = JSON.stringify(this.xml2json.xml_str2json(input));
            this.focusOnResultTab()

        } catch (err) {
            this.errorText = err
        }
    }

    closeAlert() {
        this.errorText = ""
    }

    setDefaultText() {
        this.defaultInput = "<employee><name>John H</name><mobile>+1-998988938293</mobile><email>john.h@abc.com</email></employee>"
    }

    focusOnResultTab() {
        this.errorText = ""
        document.getElementById("nav-tab-head-1").classList.remove('active');
        document.getElementById("nav-tab-head-2").classList.add('active');
        document.getElementById("tab_1").classList.remove('active');
        document.getElementById("tab_2").classList.add('active');
    }
}