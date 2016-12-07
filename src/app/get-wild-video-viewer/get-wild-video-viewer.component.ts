import { Component, OnInit, Input } from '@angular/core';
import { GetWildVideo } from "../get-wild-video";

@Component({
  selector: 'app-get-wild-video-viewer',
  templateUrl: './get-wild-video-viewer.component.html',
  styleUrls: ['./get-wild-video-viewer.component.css']
})
export class GetWildVideoViewerComponent implements OnInit {
  @Input()
  activeVideo: GetWildVideo;

  constructor() { }

  ngOnInit() {
  }


}
