import { Component, OnInit } from "@angular/core";
declare const pd: "pretty-data";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-json-formatter",
  templateUrl: "json-formatter.component.html",
  providers: [],
})
export class JsonFormatterComponent {
  
  public resultText: string = "";
  public defulatInput: string = "";
  public errorText: any = "";

  makeBeautify(form: NgForm) {
    try {
      let input = form.value.input;
      this.resultText = ""; //pd.json(input);
      this.focusOnResultTab();
    } catch (err) {
      this.errorText = err;
    }
  }

  makeMinify(form: NgForm) {
    try {
      let input = form.value.input;
      this.resultText = "";//pd.jsonmin(input);
      this.focusOnResultTab();
    } catch (err) {
      this.errorText = err;
    }
  }

  setDefaultText() {
    this.defulatInput =
      '{"colors":[{"color":"black","category":"hue","type":"primary","code":{"rgba":[255,255,255,1],"hex":"#000"}},{"color":"white","category":"value","code":{"rgba":[0,0,0,1],"hex":"#FFF"}},{"color":"red","category":"hue","type":"primary","code":{"rgba":[255,0,0,1],"hex":"#FF0"}},{"color":"blue","category":"hue","type":"primary","code":{"rgba":[0,0,255,1],"hex":"#00F"}},{"color":"yellow","category":"hue","type":"primary","code":{"rgba":[255,255,0,1],"hex":"#FF0"}},{"color":"green","category":"hue","type":"secondary","code":{"rgba":[0,255,0,1],"hex":"#0F0"}}]}';
  }

  closeAlert() {
    this.errorText = "";
  }

  focusOnResultTab() {
    const navTabHead1 = document.getElementById("nav-tab-head-1");
    const navTabHead2 = document.getElementById("nav-tab-head-2");
    const tab1 = document.getElementById("tab_1");
    const tab2 = document.getElementById("tab_2");

    if (navTabHead1) navTabHead1.classList.remove("active");
    if (navTabHead2) navTabHead2.classList.add("active");
    if (tab1) tab1.classList.remove("active");
    if (tab2) tab2.classList.add("active");
  }
}
