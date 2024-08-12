import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { ShelfComponent } from './components/shelf/shelf.component';
import { BookComponent } from './components/book/book.component';
import { RemoveParenthesisPipe } from './pipes/remove-parenthesis.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShelfComponent,
    BookComponent,
    RemoveParenthesisPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
