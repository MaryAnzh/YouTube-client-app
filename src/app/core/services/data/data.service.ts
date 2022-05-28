import { Injectable } from '@angular/core';
import { Subject, Observable, map, mergeMap, switchMap, shareReplay } from 'rxjs';import { ICustomCard } from 'src/app/youtube/model/custom-card.model';
 import { IVideoItem } from 'src/app/youtube/model/video-item.model';
import { RequestService } from '../request/request.service';
import { Store } from '@ngrx/store';
import { YoutubeActions } from '../../../ngrx/actions/youtube.actions'

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private _search$$ = new Subject<string | null>();

  public items$: Observable<IVideoItem[]> = this._search$$
    .pipe(switchMap((param => this.requestService.getVideoId(param ?? ""))))
    .pipe(switchMap(value => this.requestService.getVideoById(value)))
    .pipe(map(element => element.items))
    .pipe(shareReplay({ refCount: true, bufferSize: 10 }));

  private _cards$$ = new Subject<ICustomCard[] | null>();

  public cards$: Observable<ICustomCard[] | null> = this._cards$$.asObservable();

  public cards: ICustomCard[] = [];

  constructor(
    private requestService: RequestService,
    private store: Store

  ) {
    this.cards$.subscribe(
      value => this.cards = value ?? []
    )
   }

  getItemById(id: string): Observable<IVideoItem> {
    const itemIndex = 0;
    return this.requestService.getVideoById(id)
      .pipe(
        map((value) => {
          return value.items[itemIndex]
        }))
  }

  updateSearchString(search: string): void {
    this._search$$.next(search);
  }

  updateCards(cards: ICustomCard[]): void {
    this._cards$$.next(cards);

    this.store.dispatch(
      YoutubeActions.addCustomCardsAction({
        customCards: cards
      })
    );
  }

  ngdistroy() {
    if (this._cards$$) {
      this._cards$$.unsubscribe();
    }
    if (this._search$$) {
      this._search$$.unsubscribe();
    }
  }

}
