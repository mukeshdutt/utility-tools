import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser'

// Components
import { JsonFormatterComponent } from 'app/formatter/components/json-formatter/json-formatter.component';
import { XmlFormatterComponent } from 'app/formatter/components/xml-formatter/xml-formatter.component';


@NgModule({
    declarations: [
        JsonFormatterComponent,
        XmlFormatterComponent
    ],
    imports: [
        FormsModule,
        BrowserModule,
        RouterModule.forRoot([
            { path: 'json-formatter', component: JsonFormatterComponent },
            { path: 'xml-formatter', component: XmlFormatterComponent }
        ])
    ],
    exports: []
})
export class FormatterModule {
}
