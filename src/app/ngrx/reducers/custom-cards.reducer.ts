import { createReducer, on } from '@ngrx/store';
import { ICustomCard } from 'src/app/youtube/model/custom-card.model';

export const initialCustomCardsState: ReadonlyArray<ICustomCard> = [];

export const customCardsReducer = createReducer(
  initialCustomCardsState,
  // on(retrievedBookList, (state, { books }) => books) из примера
);
