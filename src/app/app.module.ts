import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

// Components
import { AppComponent } from './app.component';
import { FooterComponent } from 'app/shared/components/footer.component'
import { HeaderComponent } from 'app/shared/components/header/header.component'
import { MenuComponent } from 'app/shared/components/menu/menu.component'

// Modules
import { EncodingModule } from 'app/encoding/encoding.module';
import { EncryptionModule } from 'app/encryption/encryption.module';
import { FormatConvertorModule } from 'app/format-convertor/format-convertor.module';
import { HashingModule } from 'app/hashing/hashing.module';
import { NumberConvertorModule } from 'app/number-convertor/number-convertor.module';
import { ValidatorModule } from 'app/validator/validator.module';
import { OtherUtilityModule } from 'app/other-utility/other-utility.module';

// const appRoutes = [
//   { path: '', redirectTo: 'home', pathMatch: 'full' },
//   { path: 'home', component: HomeComponent },
//   { path: 'json-to-xml', component: J2XComponent },
//   { path: 'json-validator', component: JUtilityComponent },
//   { path: 'xml-to-json', component: X2JComponent },
//   { path: 'xml-validator', component: XmlComponent },
//   { path: 'jquerytest', component: JqueryTestComponent }
// ]
// RouterModule.forRoot(appRoutes)

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    EncodingModule,
    EncryptionModule,
    FormatConvertorModule,
    HashingModule,
    NumberConvertorModule,
    ValidatorModule,
    OtherUtilityModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
