import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { youtubeReducer } from './youtube.reducer';
import { IVideoItem } from 'src/app/youtube/model/video-item.model';
import { ICustomCard } from 'src/app/youtube/model/custom-card.model';

export interface State {
  items: (IVideoItem | ICustomCard)[]
}

export const reducers: ActionReducerMap<State> = {

};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
