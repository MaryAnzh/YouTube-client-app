import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IYouTubeSearchResults } from 'src/app/youtube/model/search-response.model';

@Injectable({
  providedIn: 'root'
})

export class RequestService {

  constructor(private http: HttpClient,) { }

  getVideoId(value: string): Observable<string> {
    const a = this.http.get<IYouTubeSearchResults>(`search?type=video&part=snippet&maxResults=10&q=${value}`)
      .pipe(
        map((res: IYouTubeSearchResults) => {
          return res.items.map(item => item.id.videoId)
            .join(',');
        })
    )

    let bb = '';
    let b = a.subscribe(
      (value: string) => {
        bb = value;
        console.log('value');
        console.log(value); }
    );

    return a;
  }

}
