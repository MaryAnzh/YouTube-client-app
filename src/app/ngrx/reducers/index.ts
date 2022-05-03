import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { youtubeReducer } from './youtube.reducer';
import { IState } from '../state/youtube.state'

export const reducers: ActionReducerMap<IState> = {
  youtube: youtubeReducer
};


export const metaReducers: MetaReducer<IState>[] = !environment.production ? [] : [];
