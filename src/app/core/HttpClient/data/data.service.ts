import { Injectable } from '@angular/core';
import { Subject, Observable, map, mergeMap, switchMap, filter } from 'rxjs'; import { IVideoItem } from 'src/app/youtube/model/video-item.model';
import { IVideoYouTubeResults } from 'src/app/youtube/model/video-response.model';
import { RequestService } from '../request/request.service';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private search$$ = new Subject<string | null>();

  public items$: Observable<IVideoItem[]> = this.search$$
    .pipe(switchMap((param => this.requestService.getVideoId(param ?? ""))))
    .pipe(switchMap(value => this.requestService.getVideoById(value)))
    .pipe(map(element => element.items));


  constructor(
    private requestService: RequestService
  ) { }

  getItemById(id: string): Observable<IVideoItem> {
    const itemIndex = 0;
    return this.requestService.getVideoById(id).pipe(map(value => value.items[itemIndex]))
  }

  updateSearchString(search: string): void {
    this.search$$.next(search);
  }

}
