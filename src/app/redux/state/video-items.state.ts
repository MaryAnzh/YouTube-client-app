import { IVideoItem } from "src/app/youtube/model/video-item.model";

export interface IVideoItemsSState {
  videoItems: IVideoItem[]
}

export const initVideoItemState: IVideoItemsSState = {
  videoItems: []
};
