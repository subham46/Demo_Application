import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailComponentComponent } from './detail-component/detail-component.component';
import { AddressBookComponentComponent } from './address-book-component/address-book-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponentComponent,
    AddressBookComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
