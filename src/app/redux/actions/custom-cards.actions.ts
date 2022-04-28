import { createAction, props } from '@ngrx/store';
import { ICustomCard } from 'src/app/youtube/model/custom-card.model';

export const createCustomCards = createAction('[Admin Component], Create Custom Card',
  props<{ customCard: ICustomCard[] }>());
