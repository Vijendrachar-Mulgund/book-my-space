import { RequestSubmitService } from './services/request-submit.service';
import { OrderService } from './services/order.service';
import { BookingCartService } from './services/booking-cart.service';
import { ProductSaveService } from './services/product-save.service';
import { OwnerAuthGaurdService } from './services/owner-auth-gaurd.service';
import { AuthGaurdService } from './services/auth-gaurd.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './services/auth.service';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { RouterModule } from '@angular/router';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ngx-custom-validators';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarBsComponent } from './navbar-bs/navbar-bs.component';
import { HomeComponent } from './home/home.component';
import { DisplayWarehouseComponent } from './display-warehouse/display-warehouse.component';
import { BookingCartComponent } from './booking-cart/booking-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OwnerListingsComponent } from './Owner/owner-listings/owner-listings.component';
import { OwnerOrdersComponent } from './Owner/owner-orders/owner-orders.component';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { ProductFormComponent } from './Owner/product-form/product-form.component';
import { CategoryService } from './services/category.service';
import { ListingFilterComponent } from './home/listing-filter/listing-filter.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { OwnerRequestFormComponent } from './owner-request-form/owner-request-form.component';
import { RequestSuccessComponent } from './request-success/request-success.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { ContactusAckComponent } from './contactus-ack/contactus-ack.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarBsComponent,
    HomeComponent,
    DisplayWarehouseComponent,
    BookingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    OwnerListingsComponent,
    OwnerOrdersComponent,
    LoginComponent,
    NewsComponent,
    ProductFormComponent,
    ListingFilterComponent,
    ProductCardComponent,
    OwnerRequestFormComponent,
    RequestSuccessComponent,
    AboutUsComponent,
    ContactUsComponent,
    TermsConditionsComponent,
    ContactusAckComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CustomFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'display-warehouse', component: DisplayWarehouseComponent },
      { path: 'booking-cart', component: BookingCartComponent, canActivate: [AuthGaurdService] },
      { path: 'login', component: LoginComponent },
      { path: 'news', component: NewsComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'contact-us/acknowledgement', component: ContactusAckComponent },
      { path: 'termsandconditions', component: TermsConditionsComponent },

      { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGaurdService] },
      { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGaurdService] },
      { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGaurdService] },
      { path: 'requestForm', component: OwnerRequestFormComponent, canActivate: [AuthGaurdService] },
      { path: 'requestForm/success', component: RequestSuccessComponent, canActivate: [AuthGaurdService] },

      { path: 'owner/products/new', component: ProductFormComponent, canActivate: [AuthGaurdService, OwnerAuthGaurdService] },
      { path: 'owner/products/:id', component: ProductFormComponent, canActivate: [AuthGaurdService, OwnerAuthGaurdService] },
      { path: 'owner/listings', component: OwnerListingsComponent, canActivate: [AuthGaurdService, OwnerAuthGaurdService] },
      { path: 'owner/orders', component: OwnerOrdersComponent, canActivate: [AuthGaurdService, OwnerAuthGaurdService] },
    ]),
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production, registrationStrategy: 'registerImmediately' }),

  ],
  providers: [
    AuthService,
    AngularFirestore,
    AuthGaurdService,
    OwnerAuthGaurdService,
    AngularFirestoreModule,
    CategoryService,
    ProductSaveService,
    BookingCartService,
    OrderService,
    RequestSubmitService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
