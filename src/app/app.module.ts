import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductPriceEasyPipe } from './product-price-easy.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductPriceEasyPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
