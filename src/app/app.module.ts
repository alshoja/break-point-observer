import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreakPointObserverModule } from '@alshoja/break-point-observer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BreakPointObserverModule.forRoot(
      [
        { gridName: 'xl', width: '(min-width: 1200px)' },
        { gridName: 'lg', width: '(min-width: 992px)' },
        { gridName: 'md', width: '(min-width: 768px)' },
        { gridName: 'sm', width: '(min-width: 576px)' },
        { gridName: 'xs', width: '(min-width: 0px)' },
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
