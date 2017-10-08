import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
    <div class="row">
        <div class="footer">Footer</div>
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
