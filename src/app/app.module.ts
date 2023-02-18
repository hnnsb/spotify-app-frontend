import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FooterBarComponent} from './components/footer-bar/footer-bar.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {AppRoutingModule} from './app-routing.module';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {UserInfoComponent} from './pages/user-info/user-info.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatToolbarModule} from "@angular/material/toolbar";
import {LoginWarningComponent} from './components/login-warning/login-warning.component';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {ArtistListingComponent} from './components/listing-artist/artist-listing.component';
import {MatTabsModule} from "@angular/material/tabs";
import {TrackListingComponent} from './components/listing-track/track-listing.component';
import {CollectionComponent} from './pages/collection/collection.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterBarComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    UserInfoComponent,
    LoginWarningComponent,
    ArtistListingComponent,
    TrackListingComponent,
    CollectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
