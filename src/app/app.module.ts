import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DataService} from './data.service';  // import service 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  // needed for animations
import { FormsModule } from '@angular/forms'; // required for forms based work
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule    
  ],
  providers: [DataService],  
  bootstrap: [AppComponent]
})
export class AppModule { }
