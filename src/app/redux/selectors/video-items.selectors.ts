import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { IVideoItemsSState } from '../state/video-items.state';

const selectVideoItemsState = (state: IAppState): IVideoItemsSState => {
  return state.videoItemsSState;
};

export const selectItems = createSelector(
  selectVideoItemsState,
  (state) => state.videoItems,
) ;
