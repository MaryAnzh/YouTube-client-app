import { Injectable } from '@angular/core';
import { IVideoItem } from '../../model/search-item.model';
import { IYouTubeSearchResults } from '../../model/search-response.model';

@Injectable({
  providedIn: 'root'
})

export class SearchService {

  private baseURL = 'https://www.googleapis.com/youtube/v3/';

  private APIkey = 'AIzaSyAPL2IqZBsGRYbZwj-jGWNZIhekt29YdUk'

  constructor() { }

  async getYouTubeSearchResults(value: string) {
    const response = await fetch((`${this.baseURL}search?key=${this.APIkey}&type=video&part=snippet&maxResults=15&q=${value}`), {
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

    const response = await fetch((`${this.baseURL}videos?id=${id}&key=${this.APIkey}&part=snippet,statistics`), {
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
