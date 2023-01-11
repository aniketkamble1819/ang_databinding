import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FriendsComponent } from './friends/friends.component';
import { Assigment1Component } from './assigment1/assigment1.component';
import { Assigment2Component } from './assigment2/assigment2.component';
import { Assigment3Component } from './assigment3/assigment3.component';

@NgModule({
  declarations: [
    AppComponent,
    FriendsComponent,
    Assigment1Component,
    Assigment2Component,
    Assigment3Component
  
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
