import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

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
        RouterModule.forRoot([
            { path: 'json-formatter', component: JsonFormatterComponent },
            { path: 'xml-formatter', component: XmlFormatterComponent }
        ])
    ],
    exports: []
})
export class FormatterModule {
}
