import { NgModule } from '@angular/core';
import { MD5HashingComponent } from 'app/hashing/components/md5-hashing/md5-hashing.component';
import { ShaHashingComponent } from 'app/hashing/components/sha-hashing/sha-hashing.component';

@NgModule({
    declarations: [
        MD5HashingComponent,
        ShaHashingComponent
    ],
    imports: [],
    providers: []
})
export class HashingModule {
}
