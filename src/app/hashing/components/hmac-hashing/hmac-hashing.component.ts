import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

declare var md5: any;
declare var jsSHA: any;

@Component({
  selector: "app-hmac-hashing",
  templateUrl: "hmac-hashing.component.html",
})
export class HmacHashingComponent {
  public shaObject: any;
  public resultText: string = "";
  public defaultMode: string = "";
  public errorText: string = "";
  public modes = [
    { modeValue: "MD5", modeText: "HMAC with MD5" },
    { modeValue: "SHA-1", modeText: "HMAC with SHA-1" },
    { modeValue: "SHA-256", modeText: "HMAC with SHA-256" },
    { modeValue: "SHA3-256", modeText: "HMAC with SHA3-256" },
    { modeValue: "SHA-384", modeText: "HMAC with SHA-384" },
    { modeValue: "SHA3-384", modeText: "HMAC with SHA3-384" },
    { modeValue: "SHA-512", modeText: "HMAC with SHA-512" },
    { modeValue: "SHA3-512", modeText: "HMAC with SHA3-512" },
  ];

  constructor() {
    this.defaultMode = "MD5";
  }

  getHMAC(form: NgForm) {
    try {
      let mode: string = form.value.mode;
      let input: string = form.value.input;
      let hmacKey: string = form.value.hmacKey;

      if (mode == "MD5") {
        this.resultText = this.hmacWithMD5(input, hmacKey);
      } else {
        this.resultText = this.hmacWithSHA(mode, input, hmacKey);
      }
      this.focusOnResultTab();
    } catch (err) {
      this.errorText =
        "The problem has occurred with this entered input text, selected mode and key, Please send this info to the development team to rectify the same issue.";
    }
  }

  private hmacWithMD5(input: string, key: string): string {
    return md5(input, key);
  }

  private hmacWithSHA(mode: string, input: string, key: string): string {
    this.shaObject = new jsSHA(mode, "TEXT");
    this.shaObject.setHMACKey(key, "TEXT");
    this.shaObject.update(input);
    return this.shaObject.getHMAC("HEX");
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
