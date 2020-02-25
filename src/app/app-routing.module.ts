import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartModuleComponent } from './pages/cart-module/cart-module.component';

const routes: Routes = [
    { path: "cart", component: CartModuleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
