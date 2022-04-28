import { Action } from '@ngrx/store';
import { IVideoItem } from 'src/app/youtube/model/video-item.model';

export enum EVideoItemActions {
  GetVideoId = '[Search Component], Search Video',
  GetVideoById = '[DataService], Search Video By Id',
}

export class GetVideoId implements Action {
  public readonly type = EVideoItemActions.GetVideoId;
  constructor(public searchString: string) {}
}

export class GetVideoById implements Action {
  public readonly type = EVideoItemActions.GetVideoById;
  constructor(public videoItems: IVideoItem[]) { }
}

export type VideoItemActions = GetVideoId | GetVideoById;
