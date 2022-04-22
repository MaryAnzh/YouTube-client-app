import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, mergeMap, switchMap, filter } from 'rxjs';import { IVideoItem } from 'src/app/youtube/model/video-item.model';
import { RequestService } from '../request/request.service';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private search$$ = new BehaviorSubject<string | null>(null);

  public items$: Observable<IVideoItem[]> = this.search$$
    .pipe(filter(p => p !== null))
    .pipe(switchMap((param => this.requestService.getVideoId(param ?? ""))))
    .pipe(switchMap(value => this.requestService.getVideoById(value)))
    .pipe(map(element => element.items));

  constructor(
    private requestService: RequestService
  ) { }

  updateSearchSTring(search: string): void {
      this.search$$.next(search);
  }

}
