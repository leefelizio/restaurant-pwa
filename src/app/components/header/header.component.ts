import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IsUppercasePipe } from '../../pipes/isUppercasePipe/is-uppercase.pipe';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
     IsUppercasePipe
    ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() title?: string;
  @Output() buttonClicked: EventEmitter<string> = new EventEmitter();

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
