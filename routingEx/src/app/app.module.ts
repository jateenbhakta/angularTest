import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {SidebarModule} from 'primeng/sidebar';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContentareaComponent } from './contentarea/contentarea.component';
import { Contentarea2Component } from './contentarea2/contentarea2.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import {ButtonModule} from 'primeng/button';
const appRoutes: Routes = [
  { path: 'content-area', component: ContentareaComponent },
  { path: 'content-area2', component: Contentarea2Component },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  { path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  { path: '**', component: PagenotfoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ContentareaComponent,
    Contentarea2Component,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    ButtonModule,
    SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
