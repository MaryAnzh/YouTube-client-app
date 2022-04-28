import { createReducer, on } from '@ngrx/store';
import { initCustomCard } from '../state/custom-card.state';
import * as CustomCardActions from "../actions/custom-cards.actions";

export const customCardsReducer = createReducer(
  initCustomCard,
  on(
    CustomCardActions.createCustomCards, state => ({ ...state, customCards: state.customCards })
  ))
