import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {NgIf, NgOptimizedImage} from '@angular/common';
import {ToastService} from '../toast.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf, NgOptimizedImage],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  showToast: boolean = false;
  errorMessage: string = '';
  successMessage : string = '';
  constructor(private router: Router, private toastService: ToastService) {}

  login() {
    if (this.username === 'admin' && this.password === 'admin') {
      this.errorMessage = '';
      this.router.navigate(['/dashboard']).then(() => {
        state: { loginSuccess: true }
        this.showToast = true;
        this.successMessage = '✅ Login successful';
        this.toastService.show('Login successful as admin!');
        setTimeout(() => {
          this.showToast = false;
        }, 3000);
      });
    } else {
      this.errorMessage = '❌ Invalid credentials';
    }
  }
}
