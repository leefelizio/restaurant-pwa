import { Routes } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { dataResolver } from './resolvers/data.resolver';
import { RecipeComponent } from './containers/recipe/recipe.component';
import { KitchenComponent } from './containers/kitchen/kitchen.component';
import { SettingsComponent } from './components/settings/settings.component';
import { isAuthGuard } from './guards/is-auth.guard';
import { NotFoundComponent } from './containers/not-found/not-found.component';
import { LoginPageComponent } from './containers/login-page/login-page.component';

export const routes: Routes = [
    {
      path: 'home',
      component: HomeComponent,
      resolve: {
        // returns one obj 
        data: dataResolver
      }
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
      path: 'recipe',
      children: [
        {
          path: ':uuid',
          component: RecipeComponent
        }
      ],
    },
    {
      path: 'kitchen',
      children: [
        {
          path: '',
          component: KitchenComponent
        },
        {
          path: 'settings',
          component: SettingsComponent
        }
      ],
      canActivate: [isAuthGuard],
    },
    {
      path: 'login',
      component: LoginPageComponent,
    },
    {
      // custom 404
      path: '404',
      component: NotFoundComponent
    },
    // {
    //   // any other routes
    //   path: '**',
    //   // if I want to redirect all other routes
    //   // to 404, so I could remove the obj path 404
    //   // and add here directly the redirectTo component NotFound
    //   redirectTo: '404',
    //   pathMatch: 'full'
    // },
  ];
