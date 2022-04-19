import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IVideoYouTubeResults } from 'src/app/youtube/model/video-response.model';
import { IVideoItem } from 'src/app/youtube/model/video-item.model';
import { RequestService } from '../request/request.service';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private _userWords$$ = new BehaviorSubject<string>('');

  public userWords$ = this._userWords$$.asObservable();

  public userWords = '';

  private _videosId$$ = new BehaviorSubject<string>('');
  public videosId$ = this._videosId$$.asObservable();

  private _youTubeSearchResults$$ = new BehaviorSubject<IVideoYouTubeResults | null>(null);

  public youTubeSearchResuSearchResults$ = this._youTubeSearchResults$$.asObservable();

  public youTubeSearchResuSearchResultsData: IVideoYouTubeResults | null;

  private _items$$ = new BehaviorSubject<IVideoItem[] | null>(null);

  public items$ = this._items$$.asObservable();

  public items: IVideoItem[] = [];

  constructor(
    private requestService: RequestService

  ) {

    this.youTubeSearchResuSearchResultsData = null;
    this._youTubeSearchResults$$.subscribe(
      (value: IVideoYouTubeResults | null) => this.youTubeSearchResuSearchResultsData = value ? value : null
    );

    this._items$$.subscribe(
      (value: IVideoItem[] | null) => this.items = value ? value : []
    )
  }

  async getYouTubeSearchResults(value: string) {
    this.videosId$ = this.requestService.getVideoId(value);
    this.videosId$.subscribe(
      (value: string) => {
        this._videosId$$.next(value);
        this.getVideosByID(value);
      }
    )
  }

  getVideosByID(ods: string) {
    this.youTubeSearchResuSearchResults$ = this.requestService.getVideoItemw(ods);
    this.youTubeSearchResuSearchResults$.subscribe(
      (value: IVideoYouTubeResults | null) => {
        if (value) {
          this._items$$.next(value.items)
        }
      }
    )


}

  removeItem() {
    this._youTubeSearchResults$$.next(null);
  }
}
