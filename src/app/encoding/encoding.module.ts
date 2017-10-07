import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'

import { Base64Component } from 'app/encoding/components/base64/base64.component';
import { HtmlComponent } from 'app/encoding/components/html/html.component';
import { UrlComponent } from 'app/encoding/components/url/url.component';


@NgModule({
    declarations: [
        Base64Component,
        HtmlComponent,
        UrlComponent
    ],
    imports: [],
    exports: [
        Base64Component,
        HtmlComponent,
        UrlComponent
    ],
    providers: []
})
export class EncodingModule {

}
