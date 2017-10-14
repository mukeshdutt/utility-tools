import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'

import { MD5HashingComponent } from 'app/hashing/components/md5-hashing/md5-hashing.component';
import { ShaHashingComponent } from 'app/hashing/components/sha-hashing/sha-hashing.component';
import { HmacHashingComponent } from 'app/hashing/components/hmac-hashing/hmac-hashing.component';

@NgModule({
    declarations: [
        MD5HashingComponent,
        ShaHashingComponent,
        HmacHashingComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            { 'path': 'md5-hashing', component: MD5HashingComponent },
            { 'path': 'sha-hashing', component: ShaHashingComponent },
            { 'path': 'hmac-hashing', component: HmacHashingComponent }
        ])],
    providers: []
})
export class HashingModule {
}
