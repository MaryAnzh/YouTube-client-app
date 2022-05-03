import { IVideoItem } from "src/app/youtube/model/video-item.model"
import { ICustomCard } from "src/app/youtube/model/custom-card.model"

export interface IState {
  youtube: {
    videoItems: IVideoItem[],
    customCards: ICustomCard[],
  }
}

export const initialYoutube: IState = {
  youtube: {
    videoItems: [],
    customCards: [],
  }
}

