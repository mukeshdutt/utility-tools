import { Component } from '@angular/core'
import { NgForm } from '@angular/forms';

declare var X2JS: any;

@Component({
    selector: 'app-json2xml-convertor',
    templateUrl: 'json2xml-convertor.html'
})
export class Json2XmlConvertorComponent {

    private xml2json: any;
    private resultText: string
    private defaultInput: string
    private errorText: string

    constructor() {
        this.xml2json = new X2JS()
    }

    convertToXml(form: NgForm) {

        try {

            let input = form.value.input;
            let json = this.xml2json.json2xml_str(JSON.parse(input));
            this.resultText = json;
            this.focusOnResultTab()

        } catch (err) {
            this.errorText = err + ". Invalid JSON, Please validate it first or be ensure JSON object propeties are be in double quotes."
        }
    }

    setDefaultText() {
        this.defaultInput = '{"colors":[{"color":"black","category":"hue","type":"primary","code":{"rgba":[255,255,255,1],"hex":"#000"}},{"color":"white","category":"value","code":{"rgba":[0,0,0,1],"hex":"#FFF"}},{"color":"red","category":"hue","type":"primary","code":{"rgba":[255,0,0,1],"hex":"#FF0"}},{"color":"blue","category":"hue","type":"primary","code":{"rgba":[0,0,255,1],"hex":"#00F"}},{"color":"yellow","category":"hue","type":"primary","code":{"rgba":[255,255,0,1],"hex":"#FF0"}},{"color":"green","category":"hue","type":"secondary","code":{"rgba":[0,255,0,1],"hex":"#0F0"}}]}'
    }

    closeAlert() {
        this.errorText = ""
    }

    focusOnResultTab() {
        this.errorText = ""
        document.getElementById("nav-tab-head-1").classList.remove('active');
        document.getElementById("nav-tab-head-2").classList.add('active');
        document.getElementById("tab_1").classList.remove('active');
        document.getElementById("tab_2").classList.add('active');
    }
}