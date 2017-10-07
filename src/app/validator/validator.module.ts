import { NgModule } from '@angular/core';
import { JsonValidatorComponent } from 'app/validator/components/json-validator/json-validator.component';
import { XmlValidatorComponent } from 'app/validator/components/xml-validator/xml-validator.component';

@NgModule({
    declarations: [
        JsonValidatorComponent,
        XmlValidatorComponent
    ],
    imports: [],
    exports: [
        JsonValidatorComponent,
        XmlValidatorComponent
    ],
    providers: []
})
export class ValidatorModule {

}
