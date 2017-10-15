import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, Route } from '@angular/router'
import { FormsModule } from '@angular/forms'

import { Base64Component } from 'app/encoding/components/base64/base64.component';
import { HtmlComponent } from 'app/encoding/components/html/html.component';
import { UrlComponent } from 'app/encoding/components/url/url.component';

@NgModule({
  declarations: [
    Base64Component,
    HtmlComponent,
    UrlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { 'path': 'base64', component: Base64Component },
      { 'path': 'html', component: HtmlComponent },
      { 'path': 'url', component: UrlComponent }
    ])
  ],
  exports: [
    Base64Component,
    HtmlComponent,
    UrlComponent
  ],
  providers: []
})
export class EncodingModule {
}
