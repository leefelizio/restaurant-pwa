import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { IonicModule } from '@ionic/angular';
import 'share-api-polyfill'

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [
    IonicModule,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent {
  title!:string;
  uuid!:string;
  recipe!:any;

  constructor(route: ActivatedRoute, service: ApiService) { 
    const recipeUuid = route.snapshot.params['uuid'];
    
    this.uuid = recipeUuid;
    service.getData().then(
      database => {
        const c = database.data.find(c => c.recipes.find((r: any) => r.uuid === this.uuid))
        const r = c.recipes.find((r: any) => r.uuid === this.uuid)
        
        this.recipe = r;

      }
    )
    // console.log(recipeUuid)
    // console.log(route.snapshot)
  }

  displayShare() {
    navigator.share({
      title: this.title + ' | Resto',
      url: location.href
    })
    .then( _ => console.log('Yay, you shared it :)'))
    .catch( error => console.log('Oh noh! You couldn\'t share it! :\'(\n', error));
  }
}
