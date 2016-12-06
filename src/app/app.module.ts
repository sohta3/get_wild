import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GetWildVideoComponent } from './get-wild-video/get-wild-video.component';
import { GetWildVideoViewerComponent } from './get-wild-video-viewer/get-wild-video-viewer.component';
import { GetWildVideoListComponent } from './get-wild-video-list/get-wild-video-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GetWildVideoComponent,
    GetWildVideoViewerComponent,
    GetWildVideoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
