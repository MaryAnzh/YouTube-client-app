import { IVideoItem } from "./video-item.model"

export interface IVideoYouTubeResults {
  etag: string,
  items: IVideoItem[],
  kind: string,
  pageInfo: {
    resultsPerPage: number,
    totalResults: number,
  }
}
