import { PageInfo, Item } from './search-item.model';

export interface ISearchResults {
  kind: string;
  etag: string;
  pageInfo: PageInfo | undefined;
  items: Item[] | undefined;
}
