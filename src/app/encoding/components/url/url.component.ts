import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

/*
1. encodeURI — encodes characters that are not allowed (raw) in URLs (use it to fix up broken URIs if you can't fix them beforehand)

2. encodeURIComponent — as encodeURI plus characters with special meaning in URIs (use it to encode data for inserting into a URI)
*/

@Component({
    selector: 'app-url',
    templateUrl: 'url.component.html'
})
export class UrlComponent {

    public resultText: string
    public defaultInput: string

    setDefaultValue() {
        this.defaultInput = "https://www.google.co.in/search?q=angular+4+introduction&rlz=1C1CHBF_enIN726IN726&oq=angular+4+intr&aqs=chrome.1.69i57j0l3.10742j0j1&sourceid=chrome&ie=UTF-8";
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
