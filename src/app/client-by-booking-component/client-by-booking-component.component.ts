import {Component, OnInit} from '@angular/core';
import {NgIf} from "@angular/common";
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'app-client-by-booking-component',
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    NgIf
  ],
  templateUrl: './client-by-booking-component.component.html',
  styleUrl: './client-by-booking-component.component.css',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('600ms ease-in', style({ opacity: 0, transform: 'translateY(-20px)' })),
      ]),
    ])
  ]
})

export class ClientByBookingComponentComponent   implements OnInit{
  constructor(private router: Router) {}
  ngOnInit() {
    const nav = this.router.getCurrentNavigation();
    const loginSuccess = nav?.extras?.state?.['loginSuccess'];
    if (loginSuccess) {
      // Show toast message for 2 seconds
      setTimeout(() => {
        // Hide toast message after 2 seconds
      }, 2000);
    }
  }
}
