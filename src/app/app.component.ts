import {Component, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ToastComponent} from './toast/toast.component';
import {ToastService} from './toast.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dashboardBI4sae6';
  @ViewChild('toast') toastComponent!: ToastComponent;

  constructor(private toastService: ToastService) {}

  ngAfterViewInit() {
    this.toastService.register(this.toastComponent);
  }
}
