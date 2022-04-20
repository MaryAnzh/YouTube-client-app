import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IVideoYouTubeResults } from 'src/app/youtube/model/video-response.model';
import { IVideoItem } from 'src/app/youtube/model/video-item.model';
import { RequestService } from '../request/request.service';
import { itemPlug } from '../item-plug';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private _searchString$$ = new BehaviorSubject<string>('');

  public searchString$ = this._searchString$$.asObservable();

  public searchString = '';

  private _videosId$$ = new BehaviorSubject<string>('');

  public videosId$ = this._videosId$$.asObservable();

  private _youTubeSearchResults$$ = new BehaviorSubject<IVideoYouTubeResults | null>(null);

  public youTubeSearchResults$ = this._youTubeSearchResults$$.asObservable();

  public youTubeSearchResultsData$: IVideoYouTubeResults | null;

  private _items$$ = new BehaviorSubject<IVideoItem[] | null>(null);

  public items$ = this._items$$.asObservable();

  public items: IVideoItem[] = [];

  constructor(
    private requestService: RequestService

  ) {

    this.youTubeSearchResultsData$ = null;
    this._youTubeSearchResults$$.subscribe(
      (value: IVideoYouTubeResults | null) => this.youTubeSearchResultsData$ = value ? value : null
    );

    this._items$$.subscribe(
      (value: IVideoItem[] | null) => this.items = value ? value : []
    )
  }

  async getYouTubeSearchResults(value: string): Promise<void> {
    this.videosId$ = this.requestService.getVideoId(value);
    this.videosId$.subscribe(
      (value: string) => {
        this._videosId$$.next(value);
        this.getVideosByID(value);
      }
    )
  }

  getVideosByID(ods: string): void  {
    this.youTubeSearchResults$ = this.requestService.getVideoItemw(ods);
    this.youTubeSearchResults$.subscribe(
      (value: IVideoYouTubeResults | null) => {
        if (value) {
          this._items$$.next(value.items)
        }
      }
    )


}

  removeItem(): void {
    this._youTubeSearchResults$$.next(null);
  }
}
