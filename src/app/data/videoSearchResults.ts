import { ISearchResults } from "../youtube/model/search-response.model";
import { items } from './items';


export const videoSearchResults: ISearchResults = {
  "kind": "youtube#videoListResponse",
  "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/Cmodw7c5XPTM8Yg3kMXelihxek4\"",
  "pageInfo": {
    "totalResults": 10,
    "resultsPerPage": 10
  },
  "items": items
}
