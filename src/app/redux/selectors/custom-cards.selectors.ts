import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { ICustomCardsState } from '../state/custom-card.state';

const selectCustomCardsStateState = (state: IAppState): ICustomCardsState => {
  return state.customCardsStat;
};

export const selectCustomCards = createSelector(
  selectCustomCardsStateState,
  (state) => state.customCards,
);
