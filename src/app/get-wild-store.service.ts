import { Injectable } from '@angular/core';
import { GetWildVideo } from "./get-wild-video";

@Injectable()
export class GetWildStoreService {

  videoList: GetWildVideo[] = [];
  activeVideo: GetWildVideo;

  constructor() { }

}
