import { Injectable } from '@angular/core';
import {ToastComponent} from './toast/toast.component';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toastComponent!: ToastComponent;

  register(toastComponent: ToastComponent) {
    this.toastComponent = toastComponent;
  }

  show(message: string) {
    this.toastComponent.show(message);
  }
}
