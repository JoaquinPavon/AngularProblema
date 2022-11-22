import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPrincipalComponent } from './product-principal/product-principal.component';
import { AboutComponent } from './about/about.component';
const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'products',
    pathMatch:'full'
  },
  
  {
path: 'products',
component: ProductPrincipalComponent

},
{
  path: 'about',
  component: AboutComponent
},
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
