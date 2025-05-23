import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    NgIf
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
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
export class DashboardComponent implements OnInit {
  showToast: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    const nav = this.router.getCurrentNavigation();
    const loginSuccess = nav?.extras?.state?.['loginSuccess'];

    if (loginSuccess) {
      this.showToast = true;
      setTimeout(() => this.showToast = false, 2000);
    }
  }
}
