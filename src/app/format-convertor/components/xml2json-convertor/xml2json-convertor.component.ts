import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

declare var X2JS: any;

@Component({
  selector: "app-xml2json-convertor",
  templateUrl: "xml2json-convertor.html",
})
export class Xml2JsonConvertorComponent {
  public xml2json: any = "";
  public resultText: string = "";
  public errorText: any = "";
  public defaultInput: string = "";

  constructor() {
    this.xml2json = new X2JS();
  }

  convertToJson(form: NgForm) {
    try {
      let input = form.value.input;
      this.resultText = JSON.stringify(this.xml2json.xml_str2json(input));
      this.focusOnResultTab();
    } catch (err) {
      this.errorText = err;
    }
  }

  closeAlert() {
    this.errorText = "";
  }

  setDefaultText() {
    this.defaultInput =
      "<employee><name>John H</name><mobile>+1-998988938293</mobile><email>john.h@abc.com</email></employee>";
  }

  focusOnResultTab() {
    this.errorText = "";
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
