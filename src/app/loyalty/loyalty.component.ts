import {Component, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-loyalty',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './loyalty.component.html',
  styleUrl: './loyalty.component.css',
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
export class LoyaltyComponent implements OnInit {
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
