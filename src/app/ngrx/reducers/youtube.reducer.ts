import { createReducer, on } from '@ngrx/store';
import { YoutubeActions } from '../actions/youtube.actions';
import { IVideoItem } from "../../youtube/model/video-item.model";
import { ICustomCard } from "../../youtube/model/custom-card.model";

export interface IYoutubeState {
  videoItems: IVideoItem[],
  customCards: ICustomCard[],
}

export const initialYoutubeState: IYoutubeState = {
  videoItems: [],
  customCards: [],
}

export const youtubeReducer = createReducer(
  initialYoutubeState,
  on(YoutubeActions.addVideoItemsAction, (state, { videoItems }): IYoutubeState => ({
    ...state,
    videoItems
  })
  ),

  on(YoutubeActions.addCustomCardsAction, (state, { customCards }): IYoutubeState => ({
    ...state,
    customCards
  })
  ),
)
