import { ICustomCard } from "src/app/youtube/model/custom-card.model";

export interface ICustomCardsState {
  customCards: ICustomCard[],
}

export const initCustomCard: ICustomCardsState = {
  customCards: [],
}
