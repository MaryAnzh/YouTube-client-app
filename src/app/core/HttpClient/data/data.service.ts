import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, switchMap, SubjectLike, Subscription, mergeMap } from 'rxjs';import { IVideoItem } from 'src/app/youtube/model/video-item.model';
import { RequestService } from '../request/request.service';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private search$$ = new BehaviorSubject<string | null>(null);

  public items$: Observable<IVideoItem[]> = this.search$$
    .pipe(mergeMap(((param: string | null) => this.requestService.getVideoId(param ?? ""))) )
    .pipe(mergeMap(value => this.requestService.getVideoById(value)))
    .pipe(map(element => element.items));

  constructor(
    private requestService: RequestService
  ) { }

  updateSearchSTring(search: string): void {
    this.search$$.next(search);
  }

}
