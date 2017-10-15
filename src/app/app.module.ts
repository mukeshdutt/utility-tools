import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

// Components
import { AppComponent } from './app.component';
import { FooterComponent } from 'app/shared/components/footer.component'
import { HeaderComponent } from 'app/shared/components/header/header.component'
import { MenuComponent } from 'app/shared/components/menu/menu.component'
import { HomeComponent } from 'app/shared/components/home/home.component';

// Modules
import { EncodingModule } from 'app/encoding/encoding.module';
import { EncryptionModule } from 'app/encryption/encryption.module';
import { FormatConvertorModule } from 'app/format-convertor/format-convertor.module';
import { HashingModule } from 'app/hashing/hashing.module';
import { NumberConvertorModule } from 'app/number-convertor/number-convertor.module';
import { OtherUtilityModule } from 'app/other-utility/other-utility.module';
import { FormatterModule } from 'app/formatter/formatter.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    EncodingModule,
    FormatterModule,
    EncryptionModule,
    FormatConvertorModule,
    HashingModule,
    NumberConvertorModule,
    OtherUtilityModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
