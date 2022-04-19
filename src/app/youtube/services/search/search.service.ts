import { Injectable } from '@angular/core';
import { IVideoYouTubeResults } from '../../model/video-response.model';
import { IYouTubeSearchResults } from '../../model/search-response.model';

@Injectable({
  providedIn: 'root'
})

export class SearchService {

  private baseURL = 'https://www.googleapis.com/youtube/v3/';

  private APIkey = 'AIzaSyAPL2IqZBsGRYbZwj-jGWNZIhekt29YdUk'

  constructor() { }

  async getYouTubeSearchResults(value: string): Promise<IYouTubeSearchResults | Error> {
    const response = await fetch((`${this.baseURL}search?key=${this.APIkey}&type=video&part=snippet&maxResults=15&q=${value}`), {
      method: 'GET',
    });
    const status = response.status;
    if (status !== 200) {
      throw new Error(status.toString());
    } else {

      const responseJSON = <IYouTubeSearchResults>(await response.json());

      return responseJSON;
    }
  }

  async getYouTubeVideo(id: String): Promise<IVideoYouTubeResults | Error> {

    const response = await fetch((`${this.baseURL}videos?id=${id}&key=${this.APIkey}&part=snippet,statistics`), {
      method: 'GET',
    });
    const status = response.status;
    if (status !== 200) {
      throw new Error(status.toString());
    } else {

      const responseJSON = <IVideoYouTubeResults>(await response.json());
      console.log('Ответ от сервера');
      console.log(responseJSON);
      return responseJSON;
    }
  }
}
