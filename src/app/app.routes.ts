import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { CartPreviewComponent } from './components/cart-preview/cart-preview.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CheckOutComponent } from './pages/check-out/check-out.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { ThankyouComponent } from './pages/thankyou/thankyou.component';


export const routes: Routes = [
    { path: 'homepage', component: HomepageComponent }, //quando va sul path homepage va alla homepage
    { path: '', redirectTo: 'homepage', pathMatch: 'full' }, // in questo modo si arriva direttamente alla homepage
    { path: 'products', component: ProductsComponent },
    { path: 'product-detail/:id', component: ProductDetailComponent },
    { path: 'cart', component: CartComponent },
    { path: 'cart-preview/:id', component: CartPreviewComponent },
    { path: 'cart-item', component: CartItemComponent },
    { path: 'checkout', component: CheckOutComponent },
    { path: 'payment', component: PaymentComponent },
    { path: 'thankyou', component: ThankyouComponent },





    { path: '**', component: NotFoundComponent },

];
