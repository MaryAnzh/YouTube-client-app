import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SearchService } from 'src/app/youtube/services/search/search.service';
import { ISearchVideoItem } from 'src/app/youtube/model/search-item.model';
import { IVideoYouTubeResults } from 'src/app/youtube/model/video-response.model';
import { IVideoItem } from 'src/app/youtube/model/video-item.model';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private _userWords$$ = new BehaviorSubject<string>('');

  public userWords$ = this._userWords$$.asObservable();

  public userWords = '';

  private _youTubeSearchResults$$ = new BehaviorSubject<IVideoYouTubeResults | null>(null);

  public youTubeSearchResuSearchResults$ = this._youTubeSearchResults$$.asObservable();

  public youTubeSearchResuSearchResultsData: IVideoYouTubeResults | null;

  private itemsId = '';

  private _items$$ = new BehaviorSubject<IVideoItem[] | null>(null);

  public items$ = this._items$$.asObservable();

  public items: IVideoItem[] = [];

  constructor(private searchService: SearchService) {
    this.youTubeSearchResuSearchResultsData = null;
    this._youTubeSearchResults$$.subscribe(
      (value: IVideoYouTubeResults | null) => this.youTubeSearchResuSearchResultsData = value ? value : null
    );

    this._items$$.subscribe(
      (value: IVideoItem[] | null) => this.items = value ? value : []
    )
  }

  async getYouTubeSearchResults(value: string) {

    try {
      const youTubeSearchResults = await this.searchService.getYouTubeSearchResults(value);
      this.itemsId = this.getItemsId(youTubeSearchResults.items);
    } catch (error) {
      console.log(error);;
    }

    try {
      const videoResults = await this.searchService.getYouTubeVideo(this.itemsId);
      this._youTubeSearchResults$$.next(videoResults);
      this._items$$.next(videoResults.items);
    } catch (error) {
      console.log(error);;
    }

  }

  getItemsId(items: ISearchVideoItem[]): string {
    return items.map(elem => elem.id.videoId).join(',');
  }

  removeItem() {
    this._youTubeSearchResults$$.next(null);
  }
}

//export const
