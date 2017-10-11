import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
    <div class="row">
        <div class="footer">
            <div class="col-md-offset-1 col-md-5">Developed @ Oxigen in 2017</div>
            <div class="col-md-offset-2 col-md-4">Version 1.0.0</div>
        </div>
    </div>
    `,
    styles: [`
    .footer {
        border-top: 1px dotted #294e80;
        padding: 5px;
        color: #294e80;
        position: relative;
        bottom: 0;
        left: 0;
    }
    `]
})
export class FooterComponent {
}
