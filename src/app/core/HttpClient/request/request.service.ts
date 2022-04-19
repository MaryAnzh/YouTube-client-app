import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IYouTubeSearchResults } from 'src/app/youtube/model/search-response.model';
import { IVideoYouTubeResults } from 'src/app/youtube/model/video-response.model';

@Injectable({
  providedIn: 'root'
})

export class RequestService {

  constructor(private http: HttpClient,) { }

  getVideoId(value: string): Observable<string> {
    const requestParam = 'search?type=video&part=snippet&maxResults=10&q=';
    return this.http.get<IYouTubeSearchResults>(`${requestParam}${value}`)
      .pipe(
        map((res: IYouTubeSearchResults) => {
          return res.items.map(item => item.id.videoId)
            .join(',');
        })
    )
  }

  getVideoItemw(id: string) {
    const requestParam = `videos?id=${id}&part=snippet,statistics`;
    return this.http.get<IVideoYouTubeResults>(requestParam);
  }
}
