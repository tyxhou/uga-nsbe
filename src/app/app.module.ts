import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from '../app/components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './components/footer/footer.component';
import { CookieService } from 'ngx-cookie-service';
import { UsersService } from './services/users.service';
import { EditProfileComponent } from './views/edit-profile/edit-profile.component';
import { ResourcesComponent } from './views/resources/resources.component';
import { ManageUsersComponent } from './views/admin/manage-users/manage-users.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents,
    EditProfileComponent,
    ResourcesComponent,
    ManageUsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,   
    FormsModule
  ],
  providers: [CookieService, routingComponents, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
