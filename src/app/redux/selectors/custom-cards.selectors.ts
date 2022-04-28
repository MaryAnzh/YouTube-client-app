import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { ICustomCardsState } from '../state/custom-card.state';

const selecCustomCardsStateState = (state: IAppState): ICustomCardsState => {
  return state.customCardsStat;
};

export const selecCustomCards = createSelector(
  selecCustomCardsStateState,
  (state) => state.customCards,
);
