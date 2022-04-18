import { ISearchVideoItem } from './search-item.model';

export interface IYouTubeSearchResults {
  etag: string,
  items: ISearchVideoItem[],
  kind: string,
  nextPageToken: string,
  pageInfo: {
    resultsPerPage: number,
    totalResults: number,
  },
  regionCode: string,
}
