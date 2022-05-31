import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationListComponent } from './components/notification-list/notification-list.component';
import { ActionsComponent } from './components/actions/actions.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, NotificationListComponent, ActionsComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
