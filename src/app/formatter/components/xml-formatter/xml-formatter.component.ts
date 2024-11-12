import { Component } from "@angular/core";
// import { pd } from "pretty-data";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-xml-formatter",
  templateUrl: "xml-formatter.component.html",
})
export class XmlFormatterComponent {
  public resultText: string = "";
  public defulatInput: string = "";
  public errorText: any = "";

  makeBeautify(form: NgForm) {
    try {
      let input = form.value.input;
      this.resultText = ""//pd.xml(input);
      this.focusOnResultTab();
    } catch (err) {
      this.errorText = err;
    }
  }

  makeMinify(form: NgForm) {
    try {
      let input = form.value.input;
      this.resultText = ""//pd.xmlmin(input, "");
      this.focusOnResultTab();
    } catch (err) {
      this.errorText = err;
    }
  }

  setDefaultText() {
    this.defulatInput =
      "<employee><name>John H</name><mobile>+1-998988938293</mobile><email>john.h@abc.com</email></employee>";
  }

  closeAlert() {
    this.errorText = "";
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
