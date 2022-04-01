import { PageInfo, Item } from './search-item.model';

export interface ISearchResults {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: Item[];
}
