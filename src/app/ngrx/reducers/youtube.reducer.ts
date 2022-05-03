import { createReducer, on } from '@ngrx/store';
import { ExampleActions } from '../actions/example-actions';
import { initialYoutube } from '../state/youtube.state';

export const youtubeReducer = createReducer(
  initialYoutube,
  on(ExampleActions.addVideoItemsAction, (state, { videoItems }) => ({
    ...state,
    videoItems
  })
  ),

  on(ExampleActions.addCustomCardsAction, (state, { customCards }) => ({
    ...state,
    customCards
  })
  )
);
