import { Injectable } from '@angular/core';
import { IVideoItem } from '../../model/search-item.model';
import { IYouTubeSearchResults } from '../../model/search-response.model';

@Injectable({
  providedIn: 'root'
})

export class SearchService {

  private baseURL = 'https://www.googleapis.com/youtube/v3/';

  private search = 'search?';

  private videos = 'videos?';

  private APIkey1 = 'key=AIzaSyAPL2IqZBsGRYbZwj-jGWNZIhekt29YdUk'

  private APIkey2 = 'key=AIzaSyCRGoNO1ZiwsjOE73FB4vF1owzaSUgcILs'
    //'key=AIzaSyAPWskf1Z4RQ0j2CAVEVKTigC_siyCcSNg';
  //AIzaSyCRGoNO1ZiwsjOE73FB4vF1owzaSUgcILs

  private searchHeader = '&type=video&part=snippet&maxResults=15&q=';

  private videoIdHeader = 'id=';

  private videoHeaderPart = '&part=snippet,statistics'

  constructor() { }

  async getYouTubeSearchResults(value: string) {
    const response = await fetch((this.baseURL + this.search + this.APIkey1 + this.searchHeader + value), {
      method: 'GET',
    });
    const status = response.status;
    if (status !== 200) {
      throw new Error(status.toString());
    } else {

      const responseJSON = <any>(await response.json());
      console.log('Ответ от сервера');
      console.log(responseJSON);
      return responseJSON;
    }
  }

  async getYouTubeVideo(id: String) {

    const response = await fetch((`https://www.googleapis.com/youtube/v3/videos?id=${id}&key=AIzaSyCRGoNO1ZiwsjOE73FB4vF1owzaSUgcILs&part=snippet,statistics`), {
      method: 'GET',
    });
    const status = response.status;
    if (status !== 200) {
      throw new Error(status.toString());
    } else {

      const responseJSON = <any>(await response.json());
      console.log('Ответ от сервера');
      console.log(responseJSON);
      return responseJSON;
    }
  }
}
