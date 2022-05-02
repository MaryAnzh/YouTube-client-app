import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { videoItemsReducer } from './video-items.reducer';
import { customCardsReducer } from './custom-cards.reducer';
import { IVideoItem } from 'src/app/youtube/model/video-item.model';
import { ICustomCard } from 'src/app/youtube/model/custom-card.model';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  videoItemsReducer,
  customCardsReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
