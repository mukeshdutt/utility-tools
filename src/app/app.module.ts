import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

// Components
import { AppComponent } from "./app.component";
import { FooterComponent } from "./shared/components/footer.component";
import { HeaderComponent } from "./shared/components/header/header.component";
import { MenuComponent } from "./shared/components/menu/menu.component";
import { HomeComponent } from "./shared/components/home/home.component";

// Modules
import { EncodingModule } from "./encoding/encoding.module";
import { EncryptionModule } from "./encryption/encryption.module";
import { FormatConvertorModule } from "./format-convertor/format-convertor.module";
import { HashingModule } from "./hashing/hashing.module";
import { NumberConvertorModule } from "./number-convertor/number-convertor.module";
import { OtherUtilityModule } from "./other-utility/other-utility.module";
import { FormatterModule } from "./formatter/formatter.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
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
      { path: "", redirectTo: "/home", pathMatch: "full" },
      { path: "home", component: HomeComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
