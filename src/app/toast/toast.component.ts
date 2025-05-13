import { Component, Input } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  animations: [
    trigger('toastAnimation', [
      transition(':enter', [
        style({opacity: 0, transform: 'translateY(-20px)'}),
        animate('300ms ease-out', style({opacity: 1, transform: 'translateY(0)'})),
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({opacity: 0, transform: 'translateY(-20px)'})),
      ]),
    ]),
  ],
  imports: [
    NgIf
  ]
})
export class ToastComponent {
  @Input() message: string = '';
  visible: boolean = false;

  show(message: string) {
    this.message = message;
    this.visible = true;
    setTimeout(() => this.visible = false, 2000);
  }
}
