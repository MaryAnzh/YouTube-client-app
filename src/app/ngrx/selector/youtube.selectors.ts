import { createSelector } from '@ngrx/store';
import { IState } from '../state/youtube.state';
import { IYoutubeState } from '../reducers/youtube.reducer';

const selectYoutubeState = (state: IState): IYoutubeState => {
  return state.youtube;
};

export const selectVideoItems = createSelector(
  selectYoutubeState,
  (state) => state.videoItems,
);

export const selectCustomCards = createSelector(
  selectYoutubeState,
  (state) => state.customCards,
);
