import { createReducer, on } from '@ngrx/store';
import { IVideoItem } from 'src/app/youtube/model/video-item.model';

export const initialVideoItemsState: ReadonlyArray<IVideoItem> = [];

export const videoItemSReducer = createReducer(
  initialVideoItemsState,
  on(***, (state, {{ videoItemS }) => videoItemS)
  }
}
