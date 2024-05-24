import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IsUppercasePipe } from '../../pipes/isUppercasePipe/is-uppercase.pipe';
import { IonToolbar, IonBackButton, IonTitle, IonMenuButton } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { IsAuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    IonToolbar, 
    IonBackButton, 
    IonTitle, 
    IonMenuButton,
    IsUppercasePipe,
    RouterLink,
    AsyncPipe
    ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() title?: string;
  @Output() buttonClicked: EventEmitter<string> = new EventEmitter();

  constructor(public auth:IsAuthService){}

  // openMenu() {
  //   this.buttonClicked.emit('menu');
  // }

  colorText() {
    if (this.title?.toLocaleLowerCase().includes('pizza')) {
      return 'var(--main-color)';
    } else {
      return 'var(--secondary-color)';
    }
  }


}
