import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import '@khmyznikov/pwa-install';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, IonicModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppComponent {}