import { createAction, props } from '@ngrx/store';
import { IVideoItem } from 'src/app/youtube/model/video-item.model';

export const getVideoById = createAction('[DataService], Search Video By Id',
  props<{ videoItems: IVideoItem[]}>());
