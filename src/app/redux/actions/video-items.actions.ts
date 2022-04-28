import { createAction, props } from '@ngrx/store';
import { IVideoItem } from 'src/app/youtube/model/video-item.model';

export const getVideoId = createAction('[Search Component], Search Video',
  props<{ search: string }>());

export const getVideoById = createAction('[DataService], Search Video By Id',
  props<{ videoItems: IVideoItem[]}>());
