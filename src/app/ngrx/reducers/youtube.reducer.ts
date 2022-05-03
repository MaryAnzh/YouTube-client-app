import { createReducer, on } from '@ngrx/store';
import { IVideoItem } from 'src/app/youtube/model/video-item.model';
import { ICustomCard } from 'src/app/youtube/model/custom-card.model';
import { ExampleActions } from '../actions/example-actions';

  export const initialYoutubeState: ReadonlyArray<IVideoItem | ICustomCard> = [];

export const youtubeReducer = createReducer(
  initialYoutubeState,
  on(ExampleActions.addYoutubeAction, (state, { youtube }) => ({
    ...state,
    prop: youtube
  })
  )
);
