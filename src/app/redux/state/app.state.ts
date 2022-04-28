import { IVideoItemsSState, initVideoItemState } from "./items.state";
import { ICustomCardsState, initCustomCard } from "./custom-card.state";

export interface IAppState {
  videoItemsSState: IVideoItemsSState,
  customCardsStat: ICustomCardsState,
}

export const initAppState: IAppState = {
  videoItemsSState: initVideoItemState,
  customCardsStat: initCustomCard
}
