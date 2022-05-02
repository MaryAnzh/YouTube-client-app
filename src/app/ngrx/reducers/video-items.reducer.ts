import { createReducer, on } from '@ngrx/store';
import { IVideoItem } from 'src/app/youtube/model/video-item.model';
import { ExampleActions } from '../actions/example-actions';
import { DataService } from 'src/app/core/services/data/data.service';

export const initialVideoItemsState: ReadonlyArray<IVideoItem> = [];

export const videoItemSReducer = createReducer(
  initialVideoItemsState,
  on(ExampleActions.videoItemsAction, (state, {search}) => ({
    ...state,
    videoItems:
    //мне надо сюда вписать запоос из  DataService?
  })
}
