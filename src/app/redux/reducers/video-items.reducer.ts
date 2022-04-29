import * as VideoActions from "../actions/video-items.actions";
import { initVideoItemState } from "../state/video-items.state";
import { createReducer, on } from '@ngrx/store';

export const videoItemsReducer = createReducer(
  initVideoItemState,
  on(
    VideoActions.getVideoById, state => ({ ...state, videoItems: state.videoItems})
  ))
