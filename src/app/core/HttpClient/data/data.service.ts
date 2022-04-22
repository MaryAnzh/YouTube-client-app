import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, switchMap } from 'rxjs';
import { IVideoYouTubeResults } from 'src/app/youtube/model/video-response.model';
import { IVideoItem } from 'src/app/youtube/model/video-item.model';
import { RequestService } from '../request/request.service';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private search$$ = new BehaviorSubject<string | null>(null);

  public items$: Observable<IVideoItem> = this.search$$.pipe(switchMap());

  constructor(
    private requestService: RequestService
  ) { }

  getVideoById(id: string): Observable<IVideoItem> {

    return this.items$;
  }

  updateSearchSTring(search: string): void {
    this.search$$.next(search);
  }

  // async getYouTubeSearchResults(value: string): Promise<void> {
  //   this.videosId$ = this.requestService.getVideoId(value);
  //   this.videosId$.subscribe(
  //     (value: string) => {
  //       this._videosId$$.next(value);
  //       this.getVideosByID(value);
  //     }
  //   )
  // }

  // getVideosByID(ods: string): void {
  //   this.youTubeSearchResults$ = this.requestService.getVideoItemw(ods);
  //   this.youTubeSearchResults$.subscribe(
  //     (value: IVideoYouTubeResults | null) => {
  //       if (value) {
  //         this._items$$.next(value.items)
  //       }
  //     }
  //   )
  // }

  // removeItem(): void {
  //   this._youTubeSearchResults$$.next(null);
  // }
}
