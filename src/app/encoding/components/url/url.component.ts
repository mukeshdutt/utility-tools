import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

// encodeURI — encodes characters that are not allowed (raw) in URLs (use it to fix up broken URIs if you can't fix them beforehand)
// encodeURIComponent — as encodeURI plus characters with special meaning in URIs (use it to encode data for inserting into a URI)

@Component({
    selector: 'app-url',
    templateUrl: 'url.component.html'
})
export class UrlComponent {

    data = { resultText: '' }

    constructor() {
    }

    simpleToEncodedUrl(form: NgForm) {
        let input = form.value.input;
        this.data.resultText = encodeURIComponent(input);
    }

    encodedToSimpleUrl(form: NgForm) {
        let input = form.value.input;
        this.data.resultText = decodeURIComponent(input);
    }
}
