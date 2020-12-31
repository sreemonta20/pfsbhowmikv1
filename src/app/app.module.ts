import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Location, LocationStrategy, HashLocationStrategy, PathLocationStrategy } from '@angular/common';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import * as $ from 'jquery';


const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./portfolio/portfolio.module').then(m => m.PortfolioModule),
    data: { preload: false }
  },
  {
    path: 'portfolio',
    loadChildren: () =>
    import('./portfolio/portfolio.module').then(m => m.PortfolioModule),
    data: { preload: false }
  }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, HttpModule, FormsModule,
    ReactiveFormsModule, RouterModule.forRoot(routes),
    ToastNoAnimationModule.forRoot()
  ],
  providers: [Title],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
