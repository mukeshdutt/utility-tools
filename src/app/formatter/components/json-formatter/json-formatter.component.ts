import { Component, OnInit } from '@angular/core';
import { pd } from 'pretty-data'
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-json-formatter',
  templateUrl: 'json-formatter.component.html',
  providers: []
})
export class JsonFormatterComponent {

  private resultText: string
  private defulatInput: string
  private errorText: string

  makeBeautify(form: NgForm) {
    
    try{
      let input = form.value.input;
      this.resultText = pd.json(input);
      this.focusOnResultTab()
    } catch(err){
      this.errorText = err
    }
  }

  makeMinify(form: NgForm) {

    try{
    let input = form.value.input;
    this.resultText = pd.jsonmin(input);
    this.focusOnResultTab()
    }catch(err){
      this.errorText = err
    }
  }


  setDefaultText() {
    this.defulatInput = '{"menu":{"id": "file","value": \n[[1,2,3],[4,5,6] ],\n"popup":{"menuitem":[{"value":    ["one","two"],\n"onclick":"CreateNewDoc()"},{"value":"Close","onclick":"CloseDoc()"}]}}}';
  }

  closeAlert() {
    this.errorText = ""
  }

  focusOnResultTab() {
    document.getElementById("nav-tab-head-1").classList.remove('active');
    document.getElementById("nav-tab-head-2").classList.add('active');
    document.getElementById("tab_1").classList.remove('active');
    document.getElementById("tab_2").classList.add('active');
  }
}
