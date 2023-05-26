import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { CartComponent } from './cart/cart.component';

const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Products'
    },
    {
      path: 'details/:id',
      component: DetailsComponent,
      title: 'Product Details'
    },
    {
      path: 'cart',
      component: CartComponent,
      title: 'Cart'
    }
  ];
  
  export default routeConfig;