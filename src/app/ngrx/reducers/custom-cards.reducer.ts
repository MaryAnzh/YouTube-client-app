import { createReducer, on } from '@ngrx/store';
import { ICustomCard } from 'src/app/youtube/model/custom-card.model';
import { ExampleActions } from '../actions/example-actions';

export const initialCustomCardsState: ReadonlyArray<ICustomCard> = [];

export const customCardsReducer = createReducer(
  initialCustomCardsState,
  on(ExampleActions.customCardsAction, (state, { customCards }) => ({
    ...state,
    videoItems: customCards
  })
  )
);
