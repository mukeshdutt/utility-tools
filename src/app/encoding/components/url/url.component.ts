import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

// encodeURI — encodes characters that are not allowed (raw) in URLs (use it to fix up broken URIs if you can't fix them beforehand)
// encodeURIComponent — as encodeURI plus characters with special meaning in URIs (use it to encode data for inserting into a URI)

@Component({
    selector: 'app-url',
    templateUrl: 'url.component.html'
})
export class UrlComponent {

    private resultText: string
    private defaultInput: string

    constructor() {
    }

    setDefaultValue() {
        this.defaultInput = "my oxigen.aspx?name=ståle&car=saab";
    }

    simpleToEncodedUrl(form: NgForm) {
        let input = form.value.input;
        this.resultText = encodeURIComponent(input);
        this.focusOnResultTab()
    }

    encodedToSimpleUrl(form: NgForm) {
        let input = form.value.input;
        this.resultText = decodeURIComponent(input);
        this.focusOnResultTab()
    }

    focusOnResultTab() {
        document.getElementById("nav-tab-head-1").classList.remove('active');
        document.getElementById("nav-tab-head-2").classList.add('active');
        document.getElementById("tab_1").classList.remove('active');
        document.getElementById("tab_2").classList.add('active');
    }
}
