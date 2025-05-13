import {Component, OnInit} from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-extra',
  imports: [ RouterLink,
    RouterLinkActive,
    RouterOutlet,
    NgIf],
  templateUrl: './extra.component.html',
  styleUrl: './extra.component.css'
})
export class ExtraComponent implements  OnInit {
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
