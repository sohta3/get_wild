import { Component, OnInit } from '@angular/core';
import { GetWildVideoService } from "../get-wild-video.service";
import { GetWildVideo } from "../get-wild-video";
import { GetWildStoreService } from "../get-wild-store.service";


@Component({
  selector: 'app-get-wild-video',
  templateUrl: './get-wild-video.component.html',
  styleUrls: ['./get-wild-video.component.css']
})
export class GetWildVideoComponent implements OnInit {

  constructor(private getWildVideoService:GetWildVideoService, private getWildStoreService:GetWildStoreService) { }

  ngOnInit() {
    this.getWildVideoService.fetch()
    .subscribe((data) => {
        this.getWildStoreService.videoList = data;
    this.getWildStoreService.activeVideo = data[0];
console.dir(this.getWildStoreService)
    });

  }

}
