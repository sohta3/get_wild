import { Component, OnInit, Input } from '@angular/core';
import { GetWildVideo } from "../get-wild-video";

@Component({
  selector: 'app-get-wild-video-list',
  templateUrl: './get-wild-video-list.component.html',
  styleUrls: ['./get-wild-video-list.component.css']
})
export class GetWildVideoListComponent implements OnInit {
  @Input()
  videoList: GetWildVideo[];

  constructor() { }

  ngOnInit() {
  }

}
