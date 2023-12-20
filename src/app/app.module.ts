import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogComponent } from './dialog/dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MainComponent } from './component/main/main.component';
import { FooterComponent } from './component/footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './component/header/header.component';
import { AdminComponent } from './admin/admin.component';
import {MatBadgeModule} from '@angular/material/badge';
import { FilterPipe } from './shared/filter.pipe';
import { FillComponent } from './fill/fill.component';
import { ChoiceComponent } from './choice/choice.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    MainComponent,
    FooterComponent,
    CartComponent,
    LoginComponent,
    HeaderComponent,
    AdminComponent,
    FilterPipe,
    FillComponent,
    ChoiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatBadgeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
