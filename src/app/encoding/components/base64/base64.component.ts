import { Component } from "@angular/core";
import { NgForm, Form } from "@angular/forms";

@Component({
  selector: "app-base64",
  templateUrl: "base64.component.html",
})
export class Base64Component {
  public resultText: string = "";
  public defaultInput: string = "";
  public errorText: string = "";

  setDefaultValue() {
    this.defaultInput =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";
  }

  stringToBase64(form: NgForm) {
    let input = form.value.input;
    this.resultText = btoa(input);
    this.focusOnResultTab();
  }

  base64ToString(form: NgForm) {
    try {
      let input = form.value.input;
      this.resultText = atob(input);
      this.focusOnResultTab();
    } catch (err) {
      this.errorText =
        "Please enter valid Base64 text. (This string to be decoded is not correctly encoded).";
    }
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
