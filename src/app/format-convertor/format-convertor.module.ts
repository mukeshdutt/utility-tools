import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule, Route } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'

import { Xml2JsonConvertorComponent } from 'app/format-convertor/components/xml2json-convertor/xml2json-convertor.component';
import { Json2XmlConvertorComponent } from 'app/format-convertor/components/json2xml-convertor/json2xml-convertor.component';

@NgModule({
    declarations: [
        Xml2JsonConvertorComponent,
        Json2XmlConvertorComponent,
    ],
    imports: [
        FormsModule,
        BrowserModule,
        RouterModule.forRoot([
            { path: 'xml2json', component: Xml2JsonConvertorComponent },
            { path: 'json2xml', component: Json2XmlConvertorComponent }
        ])
    ],
    providers: []
})
export class FormatConvertorModule {
}
