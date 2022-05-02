import { createReducer, on } from '@ngrx/store';
import { IVideoItem } from 'src/app/youtube/model/video-item.model';
import { ExampleActions } from '../actions/example-actions';

export const initialVideoItemsState: ReadonlyArray<IVideoItem> = [];

export const videoItemsReducer = createReducer(
  initialVideoItemsState,
  on(ExampleActions.videoItemsAction, (state, { videoItems }) => ({
    ...state,
    videoItems: videoItems
  })
  )
);

