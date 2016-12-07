import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GetWildVideoComponent } from './get-wild-video/get-wild-video.component';
import { GetWildVideoViewerComponent } from './get-wild-video-viewer/get-wild-video-viewer.component';
import { GetWildVideoListComponent } from './get-wild-video-list/get-wild-video-list.component';
import { GetWildVideoService } from './get-wild-video.service';
import { GetWildStoreService } from './get-wild-store.service';
import { YoutubeSafeUrlPipe } from './youtube-safe-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GetWildVideoComponent,
    GetWildVideoViewerComponent,
    GetWildVideoListComponent,
    YoutubeSafeUrlPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    GetWildVideoService,
    GetWildStoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
