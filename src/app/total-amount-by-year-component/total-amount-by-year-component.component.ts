import {Component, OnInit} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-total-amount-by-year-component',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './total-amount-by-year-component.component.html',
  styleUrl: './total-amount-by-year-component.component.css',
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
export class TotalAmountByYearComponentComponent implements OnInit {
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
