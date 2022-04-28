import { IVideoItemsSState, initVideoItemState } from "./video-items.state";
import { ICustomCardsState, initCustomCard } from "./custom-cards.state";

export interface IAppState {
  videoItemsSState: IVideoItemsSState,
  customCardsStat: ICustomCardsState,
}

export const initAppState: IAppState = {
  videoItemsSState: initVideoItemState,
  customCardsStat: initCustomCard
}

export function getInitialState(): IAppState {
  return initAppState;
 }
