import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SearchService } from 'src/app/youtube/services/search/search.service';
import { IYouTubeSearchResults } from 'src/app/youtube/model/search-response.model';
import { ISearchVideoItem } from 'src/app/youtube/model/search-item.model';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private _youTubeSearchResults$$ = new BehaviorSubject<IYouTubeSearchResults | null>(null);

  public youTubeSearchResuSearchResults$ = this._youTubeSearchResults$$.asObservable();

  public youTubeSearchResuSearchResultsData: IYouTubeSearchResults | null;

  private itemsId = '';

  private _items$$ = new BehaviorSubject<ISearchVideoItem[] | null>(null);

  public items$ = this._items$$.asObservable();

  public items: ISearchVideoItem[] = [];

  constructor(private searchService: SearchService) {
    this.youTubeSearchResuSearchResultsData = null;
    this._youTubeSearchResults$$.subscribe(
      (value: IYouTubeSearchResults | null) => this.youTubeSearchResuSearchResultsData = value? value : null
    );

    this._items$$.subscribe(
      (value: ISearchVideoItem[] | null) => this.items = value ? value : []
    )
   }

  async getYouTubeSearchResults(value: string) {

    try {
      const youTubeSearchResults = await this.searchService.getYouTubeSearchResults(value);
      this._youTubeSearchResults$$.next(youTubeSearchResults);
      this._items$$.next(youTubeSearchResults.items);
      if (this.youTubeSearchResuSearchResultsData) {
        this.itemsId = this.getItemsId(this.items);
      }
    } catch (error) {
      console.log(error);;
    }

    console.log('this.itemsId');
    console.log(this.itemsId);
    try {
      const statistics = await this.searchService.getYouTubeVideo(this.itemsId);
    console.log(statistics);
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
