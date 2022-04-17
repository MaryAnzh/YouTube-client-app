import { IVideoItem } from './search-item.model';

export interface IYouTubeSearchResults {
  etag: string,
  items: IVideoItem[],
  kind: string,
  nextPageToken: string,
  pageInfo: {
    resultsPerPage: number,
    totalResults: number,
  },
  regionCode: string,
}
