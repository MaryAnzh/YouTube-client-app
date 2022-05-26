import { initialYoutubeState, IYoutubeState } from "../reducers/youtube.reducer";

export interface IState {
  youtube: IYoutubeState,
}

export const initialState: IState = {
  youtube: initialYoutubeState,
}

