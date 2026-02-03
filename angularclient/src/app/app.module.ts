import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
// import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent, 
  ],
  imports: [
    AppRoutingModule, 
    // CommonModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
